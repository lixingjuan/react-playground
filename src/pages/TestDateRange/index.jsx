import { useEffect, useState } from "react";
import DateRangePicker from "./DateRangePicker";
import NotExceed7Days from "./NotExceed7Days";

const TestDateRange = () => {
  const [date, setDate] = useState([]);

  useEffect(() => {
    console.log("date 更新", date);
  }, [date]);

  return (
    <div>
      <DateRangePicker date={date} setDate={setDate} />
      <NotExceed7Days date={date} setDate={setDate} />
    </div>
  );
};

export default TestDateRange;
