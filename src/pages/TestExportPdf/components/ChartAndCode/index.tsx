import React, { useState, useEffect } from "react";
import { jsPDF as JsPDF } from "jspdf";
import styled from "styled-components";
import { Button } from "antd";
import HighChartDemo from "../../../../components/HighChartDemo";
import { handleGenerateDataUrl } from "../../utils";

const initPdf = new JsPDF();

const chartClassName = "hello-chart";
/**
 * @desc 自定义导出pdf
 */
const ExportPdfDemo = ({ setPdf }: any) => {
  const handleExportChart = async () => {
    const pdfObj = new JsPDF();
    const dataURL = await handleGenerateDataUrl(`.${chartClassName}`);

    pdfObj.addImage({
      imageData: dataURL,
      x: 100,
      y: 100,
      width: 200,
      height: 300,
    });

    setPdf(pdfObj);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", width: "50vw" }}>
      <Button onClick={handleExportChart}>导出chart</Button>
      <HighChartDemo otherConfig={{ chart: { className: chartClassName } }} />
    </div>
  );
};

export default ExportPdfDemo;
