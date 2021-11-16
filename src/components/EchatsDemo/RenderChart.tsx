import React, { useState, useEffect, useRef } from "react";
import * as echarts from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { BarChart, PieChart, LineChart } from "echarts/charts";
import {
  TitleComponent,
  GridComponent,
  TooltipComponent,
  LegendComponent,
  DataZoomComponent,
  DatasetComponent,
} from "echarts/components";
import { ScatterChart } from "echarts/charts";

/** echarts按需引入 */
echarts.use([
  CanvasRenderer,
  TitleComponent,
  GridComponent,
  TooltipComponent,
  LegendComponent,
  DataZoomComponent,
  DatasetComponent,
  BarChart,
  PieChart,
  LineChart,
  ScatterChart,
]);

/**
 * chart高度固定 宽度自适应（兼容图谱）
 * */
const RenderChart: React.FC<any> = ({ options }) => {
  const contentChartRef = useRef<HTMLDivElement>(null);
  const [chartInstance, setChartInstance] = useState<echarts.ECharts | null>(
    null
  );

  /** 实例化chart 一次即可 */
  useEffect(() => {
    if (contentChartRef?.current) {
      const chartInstance = echarts.init(
        contentChartRef?.current as HTMLDivElement
      );
      setChartInstance(chartInstance);
    }
  }, []);

  useEffect(() => {
    if (chartInstance) {
      chartInstance.setOption(options, true);
    }
  }, [options, chartInstance]);

  /** 窗口大小改变 则resize chart */
  useEffect(() => {
    const handleResize = () => chartInstance?.resize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [chartInstance]);

  return (
    <div
      ref={contentChartRef}
      style={{ width: "800px", height: "600px" }}
    ></div>
  );
};

export default React.memo(RenderChart);
