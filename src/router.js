import Home from "./pages/Home/index";
import TestScrollTable from "./pages/TestScrollTable/index";
import TestReducerAndContext from "./pages/TestReducerAndContext/index";
import TestCallChildMethod from "./pages/TestCallChildMethod/index";
import TestDateRange from "./pages/TestDateRange/index";
import TestTabs from "./pages/TestTabs/index";
import TestZIndex from "./pages/TestZIndex/index";

const routes = [
  {
    path: "/",
    desc: "Home",
    component: Home,
  },
  {
    path: "/TestScrollTable",
    desc: "table纵向滚动",
    component: TestScrollTable,
  },
  {
    path: "/TestReducerAndContext",
    desc: "测试reducer和context",
    component: TestReducerAndContext,
  },
  {
    path: "/TestZIndex",
    desc: "测试z-index",
    component: TestZIndex,
  },
  {
    path: "/TestDateRange",
    desc: "测试时间范围组件",
    component: TestDateRange,
  },
  {
    path: "/TestCallChildMethod",
    desc: "测试父组件调用子组件的方法",
    component: TestCallChildMethod,
  },
  {
    path: "/TestTabs",
    desc: "测试antd的tab",
    component: TestTabs,
  },
];

export default routes;
