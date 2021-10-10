import React from "react";
import { Button, Row, Card } from "antd";
import { jsPDF as JsPDF } from "jspdf";
import domtoimage from "dom-to-image";
import { HeartTwoTone } from "@ant-design/icons";
import styled from "styled-components";

import BtnPreview from "./components/BtnPreview";
import DemoAddTable from "./components/DemoAddTable";
import DemoChart from "./components/DemoChart";

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

const pdfObj = new JsPDF();

/**
 * @desc 自定义导出pdf
 */
const ExportPdfDemo = () => {
  const handleAddPage = () => {
    pdfObj.addPage();
  };

  const handleAddText = (/* str: string | number */) => {
    pdfObj.setTextColor("red");
    pdfObj.text("222", 10, 10);
    pdfObj.setTextColor("green");
    pdfObj.text("888", 10, 30);
  };

  return (
    <IndexStyle>
      <BtnPreview pdf={pdf} />

      <>
        {data.map(({ title, CompElement }) => (
          <Card
            style={{
              borderColor: "#7fcbfa",
            }}
            key={title}
            className="card"
            title={
              <>
                <HeartTwoTone twoToneColor="#eb2f96" />
                <span>{title}</span>
              </>
            }
          >
            <CompElement pdf={pdf} />
          </Card>
        ))}
      </>

      <hr style={{ marginTop: "3000px" }} />

      <Row>
        <Button
          type="primary"
          style={{ marginLeft: "20px" }}
          onClick={handleAddPage}
        >
          添加一个页面
        </Button>

        <Button
          type="primary"
          style={{ marginLeft: "20px" }}
          onClick={handleAddText}
        >
          添加数字 222, 红色, 888, 绿色
        </Button>
      </Row>
    </IndexStyle>
  );
};

export default ExportPdfDemo;
