import React from "react";
import EchatsDemo from "../../components/EchatsDemo";
import jingzhizoushi from "./净值走势";
import jingzhihuiche from "./净值回撤";
import hangyepeizhibili from "./行业配置比例";

function EchartsDemosPage() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h2>行业配置比例</h2>
      <EchatsDemo options={hangyepeizhibili} style={{ width: "100%" }} />

      <h2>净值回撤</h2>
      <EchatsDemo options={jingzhihuiche} style={{ width: "100%" }} />

      <h2>净值走势</h2>
      <EchatsDemo options={jingzhizoushi} style={{ width: "100%" }} />
    </div>
  );
}

export default EchartsDemosPage;
