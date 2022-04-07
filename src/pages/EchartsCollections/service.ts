import axios from "axios";

export const queryChartData = () => {
  return axios
    .get("https://gw.datayes-stg.com/ams_monitor_qa/web/todo_hangyeyouxuan03")
    .then((res) => res.data);
};
