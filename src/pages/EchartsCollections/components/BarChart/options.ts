/**  横轴日期*/
const date = ["2012-01-01", "2013-01-01", "2014", "2015", "2016"];
/** 选中的行业 */
const selected = [{ industryName: "行业1" }, { industryName: "行业2" }];

const positions = [
  [
    { id: "24", position: 13 },
    { id: "25", position: 10 },
  ],
  [
    { id: "24", position: 3 },
    { id: "25", position: 10 },
  ],
  [
    { id: "24", position: 23 },
    { id: "25", position: 20 },
  ],
  [
    { id: "24", position: 18 },
    { id: "25", position: 11 },
  ],
  [
    { id: "24", position: 11 },
    { id: "25", position: 13 },
  ],
];

const res = positions.map((it) => it.map((inner) => inner.position));
const numberArr = res.map((it, index) => [date[index], ...it]);
const header = ["日期", ...selected.map((it) => it.industryName)];
numberArr.unshift(header);

const option = {
  legend: {},
  tooltip: {},
  dataset: {
    source: numberArr,
    // source: [
    //   ["日期", "我是第一个行业", "我是第二行业"],
    //   ["2021-01-01", 13, 10],
    //   ["2021-02-01", 3, 10],
    //   ["2021-03-01", 23, 20],
    //   ["2021-04-01", 18, 11],
    //   ["2021-05-01", 11, 13],
    // ],
    // source: [
    //   ["product", "2012", "2013", "2014", "2015"],
    //   ["Matcha Latte", 41.1, 30.4, 65.1, 53.3],
    //   ["Milk Tea", 86.5, 92.1, 85.7, 83.1],
    //   ["Cheese Cocoa", 24.1, 67.2, 79.5, 86.4],
    // ],
  },
  xAxis: { type: "category" },
  yAxis: {},
  grid: { bottom: "55%" },
  series: [
    // 这几个系列会出现在第一个直角坐标系中，每个系列对应到 dataset 的每一行。
    { type: "bar", seriesLayoutBy: "column" },
    { type: "bar", seriesLayoutBy: "column" },
    { type: "bar", seriesLayoutBy: "column" },
  ],
};

export default option;
