import React from "react";
import EchatsDemo from "../../components/EchatsDemo";
import jingzhizoushi from "./净值走势";

function EchartsDemosPage() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h2>净值走势</h2>
      <EchatsDemo options={jingzhizoushi} style={{ width: "100%" }} />
    </div>
  );
}

export default EchartsDemosPage;
