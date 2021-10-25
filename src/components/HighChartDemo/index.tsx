import React from "react";
import HighchartsReact from "highcharts-react-official";
import { Options } from "highcharts/highcharts.d";
import merge from "lodash/merge";
import Highcharts from "highcharts/highstock";
/* @ts-ignore-next-line */
import ReactHighchartsFromModule from "react-highcharts";

import "./index.css";
import options from "./config.json";
import options2 from "./config2.json";

export const ReactHighchartsWidget =
  ReactHighchartsFromModule.withHighcharts(Highcharts);

interface HighChartDemoProps {
  otherConfig?: Options;
}

const HighChartDemo = (props: HighChartDemoProps) => {
  const { otherConfig } = props;
  const theOptions = merge({}, options, otherConfig);

  return (
    <div>
      {/* <ul className="legend">
        {options.series.map((it) => (
          <li key={it.name}>{it.name}</li>
        ))}
      </ul> */}

      <HighchartsReact highcharts={Highcharts} options={theOptions} />

      {/* <ReactHighchartsWidget
        config={theOptions}
        // style={{ height: "400px", maxWidth: "600px", margin: "auto" }}
      /> */}
    </div>
  );
};

export default HighChartDemo;
