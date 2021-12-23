import { lazy } from "react";

const Home = lazy(() => import("./pages/Home/index"));

const routes = [
  {
    path: "/",
    desc: "Home",
    component: Home,
  },
];

export default routes;
