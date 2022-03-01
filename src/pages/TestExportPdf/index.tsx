import React, { useState } from "react";
import { jsPDF as JsPDF } from "jspdf";
import styled from "styled-components";

import CodeEditor from "./components/CodeEditor";
import Preview from "./components/Preview";
import CodeHeader from "./components/CodeHeader";
import PreviewHeader from "./components/PreviewHeader";
import ChartAndCode from "./components/ChartAndCode/index";

// import DemoAddTable from "./components/DemoAddTable";
import "./test-font-normal.js";
import "./test-font-chinese-normal";
import { handleGenerateDataUrl } from "./utils";

const IndexStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 80vh;

  .left,
  .right {
    display: flex;
    flex-direction: column;
  }

  .card {
    margin-top: 20px;
  }
  .card-wrapper {
    width: 50%;
  }
`;

const initPdf = new JsPDF();

/**
 * @desc 自定义导出pdf
 */
const ExportPdfDemo = () => {
  const [pdf, setPdf] = useState(initPdf);
  const [demoType, setDemoType] = useState("table");

  const handleExportChart = async () => {
    const pdfObj = new JsPDF();
    const dataURL = await handleGenerateDataUrl("#pdf-demo-dom");

    const imgEle = document.createElement("img");
    imgEle.src = dataURL;

    pdfObj.addImage({
      imageData: imgEle,
      x: 100,
      y: 100,
      width: 200,
      height: 300,
    });

    setPdf(pdfObj);
  };

  return (
    <>
      <ChartAndCode />
      <IndexStyle>
        <div className="left">
          {/* todo: 如果用户选择了不用的类型，修改不同的初始化code */}
          <CodeHeader pdf={pdf} />
          <CodeEditor pdf={pdf} setPdf={setPdf} />
        </div>

        <div className="right">
          <PreviewHeader />
          <Preview pdf={pdf} />
        </div>
      </IndexStyle>
    </>
  );
};

export default ExportPdfDemo;
