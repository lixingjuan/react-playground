import React, { lazy } from "react";

const Home = lazy(() => import("./pages/Home/index"));
const TestAHooks = lazy(() => import("./pages/TestAHooks"));
const TestKey = lazy(() => import("./pages/TestKey"));
const TestExportPdf = lazy(() => import("./pages/TestExportPdf"));
const TestExportWord = lazy(() => import("./pages/TestExportWord"));
const TestAntd = lazy(() => import("./pages/TestAntd"));
const TestCanvas = lazy(() => import("./pages/TestCanvas"));
const TestSWR = lazy(() => import("./pages/TestSWR"));
const TestResizable = lazy(() => import("./pages/TestResizable/index"));
const TestFlexTable = lazy(() => import("./pages/TestFlexTable"));
const TestScrollTable = lazy(() => import("./pages/TestScrollTable/index"));
const TestReducerAndContext = lazy(() =>
  import("./pages/TestReducerAndContext/index")
);
const TestCallChildMethod = lazy(() =>
  import("./pages/TestCallChildMethod/index")
);
const TestDateRange = lazy(() => import("./pages/TestDateRange/index"));
const TestTabs = lazy(() => import("./pages/TestTabs/index"));
const TestZIndex = lazy(() => import("./pages/TestZIndex/index"));

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
