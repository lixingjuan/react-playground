import moment from "moment";
import { EChartsOption } from "echarts";
import round from "lodash/round";
import { to10Color, padZeroTail } from "./utils";

const colors = ["#5180FF", "#FF9749", "#1ABFB0"];

window.moment = moment;

const data1 = [
  ["2021-02-03", 12],
  ["2021-02-04", 13],
  ["2021-02-05", 10],
  ["2021-02-06", 13],
  ["2021-02-07", 9],
  ["2021-02-08", 23],
  ["2021-02-09", 21],
];

const data2 = [
  ["2021-02-03", 22],
  ["2021-02-04", 18],
  ["2021-02-05", 19],
  ["2021-02-06", 23],
  ["2021-02-07", 29],
  ["2021-02-08", 33],
  ["2021-02-09", 31],
];

const data3 = Array.from({ length: data1.length }).map((it, index) => {
  const sumValue = Number(data1[index]?.[1]) + Number(data2[index]?.[1]);
  return [data1[index]?.[0], round(100 - sumValue, 2)];
});

const option: EChartsOption = {
  aria: {
    enabled: true,
    decal: {
      show: true,
      decals: {
        symbol: "rect",
      },
    },
  },
  legend: {
    itemHeight: 2,
    itemWidth: 10,
    left: 140,
    lineStyle: {
      type: "solid",
    },
    itemStyle: {},
  },
  color: colors,
  xAxis: [
    {
      type: "category",
      boundaryGap: false,
      axisLabel: {
        hideOverlap: true,
      },
    },
  ],
  yAxis: {
    type: "value",
    axisLabel: {
      hideOverlap: true,
      formatter: (val: any) => padZeroTail(val),
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
      smooth: 0.3,
      showSymbol: false,
      stack: "Total",
      areaStyle: {
        color: `rgba(${to10Color(colors[0])}, 0.4)`,
      },
      data: data1,
      symbol: "roundRect",
      symbolSize: 4,
      lineStyle: {
        width: 2,
      },
      emphasis: {
        itemStyle: {
          borderWidth: 5,
          borderColor: `rgba(${to10Color(colors[0])}, 0.4)`,
        },
      },
    },
    {
      name: "Union Ads",
      type: "line",
      showSymbol: false,
      stack: "Total",
      areaStyle: {
        color: `rgba(${to10Color(colors[1])}, 0.4)`,
      },
      data: data2,
      symbol: "roundRect",
      symbolSize: 4,
      lineStyle: {
        width: 2,
      },
      emphasis: {
        itemStyle: {
          borderWidth: 5,
          borderColor: `rgba(${to10Color(colors[1])}, 0.4)`,
        },
      },
    },
    {
      name: "Video Ads",
      type: "line",
      showSymbol: false,
      stack: "Total",
      areaStyle: {
        color: `rgba(${to10Color(colors[2])}, 0.4)`,
      },
      data: data3,
      symbol: "roundRect",
      symbolSize: 4,
      lineStyle: {
        width: 2,
      },
      emphasis: {
        itemStyle: {
          borderWidth: 5,
          borderColor: `rgba(${to10Color(colors[2])}, 0.4)`,
        },
      },
    },
  ],
};

export default option;
