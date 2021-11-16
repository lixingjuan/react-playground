import React from "react";
import ScatterConfig from "./configs/ScatterConfig";
import RenderChart from "./RenderChart";

export default function EchatsDemo() {
  return (
    <div>
      <h1>ScatterConfig</h1>
      <RenderChart options={ScatterConfig} />
    </div>
  );
}
