import React, { useState } from "react";
import { DatePicker } from "antd";

const { RangePicker } = DatePicker;

const TestDateRange = () => {
  const [dates, setDates] = useState([]);
  const [value, setValue] = useState();
  const [hackValue, setHackValue] = useState();

  /**
   * @desc disabled 的时间范围
   */
  const disabledDate = (current) => {
    if (!dates || dates.length === 0) {
      return false;
    }
    const tooLate = dates[0] && current.diff(dates[0], "years") < 1;
    const tooEarly = dates[1] && dates[1].diff(current, "years") < 1;
    return tooEarly || tooLate;
  };

  /**
   * @desc 打开关闭
   */
  const onOpenChange = (open) => {
    if (open) {
      setHackValue([]);
      setDates([]);
    } else {
      setHackValue(undefined);
    }
  };

  /**
   * @desc 待选日期范围发生变化的回调
   */
  const onCalendarChange = (val) => {
    console.log("触发", "onCalendarChange");
    setDates(val);
  };

  const onChange = (val) => {
    console.log("触发", "onChange");
    setValue(val);
  };

  return (
    <div>
      <h1>时间范围必须大于一年</h1>
      <RangePicker
        value={hackValue || value}
        onChange={onChange}
        disabledDate={disabledDate}
        onCalendarChange={onCalendarChange}
        onOpenChange={onOpenChange}
      />
    </div>
  );
};

export default TestDateRange;
