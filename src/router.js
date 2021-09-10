import Home from "./pages/Home/index";
import TestFancyInput from "./pages/TestFancyInput/index";
import TestDateRange from "./pages/TestDateRange/index";
import TestTabs from "./pages/TestTabs/index";

const routes = [
  {
    path: "/",
    desc: "Home",
    component: Home,
  },
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
    component: TestTabs,
  },
];

export default routes;
