import React from "react";
import { jsPDF as JsPDF } from "jspdf";
import styled from "styled-components";

import Code from "./components/Code";
import Preview from "./components/Preview";
import CodeHeader from "./components/CodeHeader";
import PreviewHeader from "./components/PreviewHeader";
import DemoAddTable from "./components/DemoAddTable";

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

const data = [
  {
    title: "测试table",
    CompElement: DemoAddTable,
  },
  // {
  //   title: "测试highchart(图片)",
  //   CompElement: DemoChart,
  // },
];

var pdf = new JsPDF();

/**
 * @desc 自定义导出pdf
 */
const ExportPdfDemo = () => {
  return (
    <IndexStyle>
      <div className="left">
        <CodeHeader pdf={pdf} />
        <Code pdf={pdf} />
      </div>

      <div className="right">
        <PreviewHeader />
        <Preview pdf={pdf} />
      </div>
    </IndexStyle>
  );
};

export default ExportPdfDemo;
