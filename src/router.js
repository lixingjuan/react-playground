import Home from "./pages/Home";
import TestFancyInput from "./pages/TestFancyInput";
import TestDateRange from "./pages/TestDateRange";

const routes = [
  {
    path: "/TestDateRange",
    desc: "测试时间范围组件",
    component: TestDateRange,
  },
  {
    path: "/TestFancyInput",
    desc: "测试父组件调用子组件的方法",
    component: TestFancyInput,
  },
  {
    path: "/TestTabs",
    desc: "测试antd的tab",
    component: Home,
  },
];

export default routes;
