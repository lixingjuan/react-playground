import { useState, useEffect } from "react";
import EchatsDemo from "../../components/EchatsDemo";

import NetWorthTrend from "./components/NetWorthTrend";
import BarChart from "./components/BarChart";
import jingzhihuiche from "./净值回撤";
import hangyepeizhibili from "./行业配置比例";

import { queryChartData } from "./service";

function EchartsDemosPage() {
  const [chartsDetail, setChartsDetail] = useState();

  useEffect(() => {
    queryChartData().then((res) => {
      console.log({ res });
      setChartsDetail(res);
    });
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <NetWorthTrend />
      <BarChart />

      <h2>行业配置比例</h2>
      <EchatsDemo options={hangyepeizhibili} style={{ width: "100%" }} />

      <h2>净值回撤</h2>
      <EchatsDemo options={jingzhihuiche} style={{ width: "100%" }} />
    </div>
  );
}

export default EchartsDemosPage;
