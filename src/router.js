import Home from "./pages/Home/index";
import TestAHooks from "./pages/TestAHooks";
import TestKey from "./pages/TestKey";
import TestExportPdf from "./pages/TestExportPdf";
import TestExportWord from "./pages/TestExportWord";
import TestAntd from "./pages/TestAntd";
import TestCanvas from "./pages/TestCanvas";
import TestSWR from "./pages/TestSWR";
import TestResizable from "./pages/TestResizable/index";
import TestFlexTable from "./pages/TestFlexTable";
import TestScrollTable from "./pages/TestScrollTable/index";
import TestReducerAndContext from "./pages/TestReducerAndContext/index";
import TestCallChildMethod from "./pages/TestCallChildMethod/index";
import TestDateRange from "./pages/TestDateRange/index";
import TestTabs from "./pages/TestTabs/index";
import TestZIndex from "./pages/TestZIndex/index";

const baseUrl = "react-playground";

const routes = [
  {
    path: "/",
    desc: "Home",
    component: Home,
  },
  {
    path: "/TestAHooks",
    desc: "测试TestAHooks",
    component: TestAHooks,
  },
  {
    path: "/TestExportPdf",
    desc: "测试TestExportPdf",
    component: TestExportPdf,
  },
  {
    path: "/TestExportWord",
    desc: "测试TestExportWord",
    component: TestExportWord,
  },
  {
    path: "/TestAntd",
    desc: "测试TestAntd",
    component: TestAntd,
  },
  {
    path: "/TestCanvas",
    desc: "测试TestCanvas",
    component: TestCanvas,
  },
  {
    path: "/TestKey",
    desc: "测试TestKey",
    component: TestKey,
  },
  {
    path: "/TestResizable",
    desc: "测试库react-resizable",
    component: TestResizable,
  },
  {
    path: "/TestSWR",
    desc: "测试swr",
    component: TestSWR,
  },
  {
    path: "/TestFlexTable",
    desc: "table可伸缩",
    component: TestFlexTable,
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

export default routes.map((it) => ({
  ...it,
  path: `/${baseUrl}${it.path}`,
}));
