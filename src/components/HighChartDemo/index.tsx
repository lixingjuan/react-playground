import React from "react";
import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

import "./index.css";
import options from "./config.json";

const HighChartDemo = (props: HighchartsReact.Props) => (
  <div>
    <ul className="legend">
      {options.series.map((it) => (
        <li key={it.name}>{it.name}</li>
      ))}
    </ul>
    <HighchartsReact highcharts={Highcharts} options={options} {...props} />
  </div>
);

export default HighChartDemo;
