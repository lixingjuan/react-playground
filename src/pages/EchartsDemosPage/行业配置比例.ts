import moment from "moment";
import { EChartsOption } from "echarts";
import round from "lodash/round";
import { to10Color } from "./utils";

const colors = ["#5180FF", "#FF9749", "#1ABFB0"];

window.moment = moment;

const forSeriesItem = (val: any[]) =>
  val.map(([date, value]) => [date, round(value, 2)]);

const option: EChartsOption = {
  legend: {
    itemHeight: 0,
    itemWidth: 10,
    left: 140,
    lineStyle: {
      type: "solid",
    },
  },
  color: colors,
  // xAxis: {
  //   type: "time",
  //   axisLabel: {
  //     hideOverlap: true,
  //     formatter: "{yyyy}-{MM}-{dd}",
  //   },
  // },
  xAxis: [
    {
      type: "category",
      boundaryGap: false,
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
  ],
  yAxis: {
    type: "value",
    axisLabel: {
      hideOverlap: true,
      formatter: "{value}%",
    },
    splitLine: {
      lineStyle: {
        type: "dashed",
      },
    },
  },
  tooltip: {
    trigger: "axis",
    appendToBody: true,
    confine: false,
    renderMode: "html",
    hideDelay: 0,
    textStyle: {
      fontSize: 12,
    },
    backgroundColor: "rgba(255, 255, 255, 0.85)",
    axisPointer: {
      lineStyle: {
        color: "#eaeaea",
        width: 2,
        type: "solid",
      },
      z: 0,
    },
    formatter: (params) => {
      if (!Array.isArray(params)) {
        return "";
      }

      /** @ts-ignore-next-line */
      const axisValueLabel = params[0].axisValueLabel;

      const title = `<div style="width:100%;text-align:center;font-size:14px;color: #333;font-weight:400;margin-bottom:5px;">${axisValueLabel}</div>`;

      const lines = params.reduce((tol, cur) => {
        const { data = [], marker = "", seriesName } = cur;
        const [, yAxisValue] = data as any[];

        return `${tol}
        <li style="list-style:none;display:flex;justify-content:space-between;align-items:center">
          <span style="display:flex;height:14px;align-items:center;">
            ${(marker as string).replace(
              "border-radius:10px;width:10px;height:10px;",
              "border-radius:0px;width:10px;height:2px;"
            )}
            ${seriesName}
          </span>
          <span>${yAxisValue}%</span>
        </li>
        `;
      }, "");

      return `
        <div style="min-width:120px;">
          ${title}
          <ul style="padding-left:0px;margin-bottom:0px;">${lines}</ul>
        </div>
      `;
    },
  },
  series: [
    {
      name: "Email",
      type: "line",
      stack: "Total",
      areaStyle: {},
      emphasis: {
        focus: "series",
      },
      data: [
        ["Mon", 120],
        ["Tue", 132],
        ["Wed", 101],
        ["Thu", 134],
        ["Fri", 90],
        ["Sat", 230],
        ["Sun", 210],
      ],
    },
    {
      name: "Union Ads",
      type: "line",
      stack: "Total",
      areaStyle: {},
      emphasis: {
        focus: "series",
      },
      data: [
        ["Mon", 220],
        ["Tue", 182],
        ["Wed", 191],
        ["Thu", 234],
        ["Fri", 290],
        ["Sat", 330],
        ["Sun", 310],
      ],
    },
    // {
    //   name: "Video Ads",
    //   type: "line",
    //   stack: "Total",
    //   areaStyle: {},
    //   emphasis: {
    //     focus: "series",
    //   },
    //   data: [150, 232, 201, 154, 190, 330, 410],
    // },
    // {
    //   name: "Direct",
    //   type: "line",
    //   stack: "Total",
    //   areaStyle: {},
    //   emphasis: {
    //     focus: "series",
    //   },
    //   data: [320, 332, 301, 334, 390, 330, 320],
    // },
    // {
    //   name: "Search Engine",
    //   type: "line",
    //   stack: "Total",
    //   label: {
    //     show: true,
    //     position: "top",
    //   },
    //   areaStyle: {},
    //   emphasis: {
    //     focus: "series",
    //   },
    //   data: [820, 932, 901, 934, 1290, 1330, 1320],
    // },
  ],
};

export default option;
