import React from "react";
import HighchartsReact from "highcharts-react-official";
import { Options } from "highcharts/highcharts.d";
import merge from "lodash/merge";
import Highcharts from "highcharts/highstock";
/* @ts-ignore-next-line */
import ReactHighchartsFromModule from "react-highcharts";

import "./index.css";
import demoConfig from "./configs/demo.json";
import other from "./configs/other";

export const ReactHighchartsWidget =
  ReactHighchartsFromModule.withHighcharts(Highcharts);

interface HighChartDemoProps {
  otherConfig?: Options;
}

const HighChartDemo = (props: HighChartDemoProps) => {
  const { otherConfig } = props;
  const theOptions = merge({}, demoConfig, otherConfig);
  const otherOptions = other;

  return (
    <div>
      {/* <h1>defaut Config</h1> */}
      {/* <HighchartsReact highcharts={Highcharts} options={theOptions} /> */}

      <h1>Other Config</h1>
      <HighchartsReact highcharts={Highcharts} options={otherOptions} />

      {/* <ReactHighchartsWidget
        config={theOptions}
        // style={{ height: "400px", maxWidth: "600px", margin: "auto" }}
      /> */}
    </div>
  );
};

export default HighChartDemo;
