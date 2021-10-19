import React, { useState, useEffect } from "react";
import { jsPDF as JsPDF } from "jspdf";
import styled from "styled-components";

import CodeEditor from "./components/CodeEditor";
import Preview from "./components/Preview";
import CodeHeader from "./components/CodeHeader";
import PreviewHeader from "./components/PreviewHeader";
// import DemoAddTable from "./components/DemoAddTable";
import "./test-font-normal.js";
import "./test-font-chinese-normal";

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

// const data = [
//   {
//     title: "测试table",
//     CompElement: DemoAddTable,
//   },
// {
//   title: "测试highchart(图片)",
//   CompElement: DemoChart,
// },
// ];

const initPdf = new JsPDF();

/**
 * @desc 自定义导出pdf
 */
const ExportPdfDemo = () => {
  const [pdf, setPdf] = useState(initPdf);

  return (
    <IndexStyle>
      <div className="left">
        <CodeHeader pdf={pdf} />
        <CodeEditor pdf={pdf} setPdf={setPdf} />
      </div>

      <div className="right">
        <PreviewHeader />
        <Preview pdf={pdf} />
      </div>
    </IndexStyle>
  );
};

export default ExportPdfDemo;
