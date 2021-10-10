import React from "react";
import { Row, Col } from "antd";
import { jsPDF as JsPDF } from "jspdf";
import styled from "styled-components";
import domtoimage from "dom-to-image";
import { HeartTwoTone } from "@ant-design/icons";

import Code from "./components/Code";
import Preview from "./components/Preview";
import DemoChart from "./components/DemoChart";
import BtnPreview from "./components/BtnPreview";
import DemoAddTable from "./components/DemoAddTable";

const IndexStyle = styled.div`
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
      <Code pdf={pdf} />
      <Col>
        <Row>此处放置操作按钮</Row>
        <Preview pdf={pdf} />
      </Col>
    </IndexStyle>
  );
};

export default ExportPdfDemo;
