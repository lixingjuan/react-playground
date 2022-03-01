export const option = {
  xAxis: {
    type: "category",
  },
  yAxis: {
    type: "value",
  },
  series: {
    data: [
      {
        id: "01030309",
        name: "机械设备",
        industryTarget: "净利润同比(YOY)",
        value: [-0.9237, 0.1342],
        itemStyle: {
          color: {
            colorStops: [
              {
                offset: 0,
                color: "rgba(209,227,255,0.3)",
              },
              {
                offset: 0.95,
                color: "rgba(121,157,255,0.7)",
              },
              {
                offset: 1,
                color: "rgba(121,157,255,1.0)",
              },
            ],
            x: 0.5,
            y: 0.5,
            r: 1,
            type: "radial",
            global: false,
          },
        },
      },

      // ["2021-07", 150],
      // ["2021-08", 230],
      // ["2021-09", 224],
      // ["2021-10", 218],
      // ["2021-11", 135],
      // ["2021-12", 147],
    ],
    type: "line",
    dataIndex: 0,
    name: "第一名",
  },
  tooltip: {},
};
