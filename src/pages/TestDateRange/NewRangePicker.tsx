import React, { useState } from "react";
import { DatePicker } from "antd";
import { Moment } from "moment";
const { RangePicker } = DatePicker;

const DateRange = ({ date: value, setDate: setValue }: any) => {
  const [dates, setDates] = useState<[Moment | null, Moment | null]>([
    null,
    null,
  ]);

  const [hackValue, setHackValue] = useState<[Moment | null, Moment | null]>();
  // const [value, setValue] = useState();

  const disabledDate = (current: Moment) => {
    if (!dates || dates.every((it) => !it)) {
      return false;
    }
    const tooLate = dates[0] && current.diff(dates[0], "days") > 7;
    const tooEarly = dates[1] && dates[1].diff(current, "days") > 7;
    return tooEarly || tooLate || false;
  };

  const onOpenChange = (open: boolean) => {
    if (open) {
      setHackValue([null, null]);
      setDates([null, null]);
    } else {
      setHackValue(undefined);
    }
  };

  return (
    <RangePicker
      value={hackValue || value}
      disabledDate={disabledDate}
      onCalendarChange={(val) => setDates(val as [Moment, Moment])}
      onChange={(val) => setValue(val)}
      onOpenChange={onOpenChange}
    />
  );
};

export default DateRange;
