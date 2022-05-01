import { Route } from "react-router";
import Home from "./pages/Home/index";
import ContextAndHook from "./pages/ContextAndHook/index";
import TestAHooks from "./pages/TestAHooks";
import TestKey from "./pages/TestKey";
import TestReactApi from "./pages/TestReactApi/index";
import EchartsCollections from "./pages/EchartsCollections/index";
import TestCanvas from "./pages/TestCanvas";

import TestExportPdf from "./pages/TestExportPdf";
import TestHistoryMethods from "./pages/TestHistoryMethods";
import TestExportWord from "./pages/TestExportWord";
import TestAntdForm from "./pages/TestAntd/components/Form";
import TestSWR from "./pages/TestSWR";
import TestResizable from "./pages/TestResizable/index";
import TestFlexTable from "./pages/TestFlexTable";
import TestScrollTable from "./pages/TestScrollTable/index";
import TestReducerAndContext from "./pages/TestReducerAndContext/index";
import TestCallChildMethod from "./pages/TestCallChildMethod/index";
import TestDateRange from "./pages/TestDateRange/index";
import TestTabs from "./pages/TestTabs/index";
import TestForm from "./pages/TestForm/index";
import TestZIndex from "./pages/TestZIndex/index";
import { lazy } from "react";
import TestAntd from "./pages/TestAntd";
// const TestAntd = lazy(() => import("./pages/TestAntd"));

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/antd",
    name: "测试TestAntd",
    component: TestAntd,
  },
  // {
  //   path: "/EchartsCollections",
  //   name: "Echarts Demos",
  //   component: EchartsCollections,
  // },
  // {
  //   path: "/ContextAndHook",
  //   name: "ContextAndHook",
  //   component: ContextAndHook,
  // },
  // {
  //   path: "/TestAHooks",
  //   name: "测试TestAHooks",
  //   component: TestAHooks,
  // },
  // {
  //   path: "/TestExportPdf",
  //   name: "测试TestExportPdf",
  //   component: TestExportPdf,
  // },
  // {
  //   path: "/TestHistoryMethods",
  //   name: "测试TestHistoryMethods",
  //   component: TestHistoryMethods,
  // },
  // {
  //   path: "/TestExportWord",
  //   name: "测试TestExportWord",
  //   component: TestExportWord,
  // },
  // {
  //   path: "/TestReactApi",
  //   name: "测试TestReactApi",
  //   component: TestReactApi,
  // },
  // {
  //   path: "/TestCanvas",
  //   name: "测试TestCanvas",
  //   component: TestCanvas,
  // },
  // {
  //   path: "/TestKey",
  //   name: "测试TestKey",
  //   component: TestKey,
  // },
  // {
  //   path: "/TestResizable",
  //   name: "测试库react-resizable",
  //   component: TestResizable,
  // },
  // {
  //   path: "/TestSWR",
  //   name: "测试swr",
  //   component: TestSWR,
  // },
  // {
  //   path: "/TestFlexTable",
  //   name: "table可伸缩",
  //   component: TestFlexTable,
  // },
  // {
  //   path: "/TestScrollTable",
  //   name: "table纵向滚动",
  //   component: TestScrollTable,
  // },
  // {
  //   path: "/TestReducerAndContext",
  //   name: "测试reducer和context",
  //   component: TestReducerAndContext,
  // },
  // {
  //   path: "/TestZIndex",
  //   name: "测试z-index",
  //   component: TestZIndex,
  // },
  // {
  //   path: "/TestDateRange",
  //   name: "测试时间范围组件",
  //   component: TestDateRange,
  // },
  // {
  //   path: "/TestCallChildMethod",
  //   name: "测试父组件调用子组件的方法",
  //   component: TestCallChildMethod,
  // },
  // {
  //   path: "/TestTabs",
  //   name: "测试antd的tab",
  //   component: TestTabs,
  // },
];

export default routes;
