import React from "react";
// import { option } from "./configs/TestAction";
import RenderChart from "./RenderChart";

export default function EchatsDemo({
  options,
  style,
}: {
  options: any;
  style?: React.CSSProperties;
}) {
  return <RenderChart options={options} style={style} />;
}
