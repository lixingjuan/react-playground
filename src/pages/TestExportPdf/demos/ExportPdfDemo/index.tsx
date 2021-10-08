import React, { useState } from "react";
import { Button, Row } from "antd";
import { jsPDF as JsPDF } from "jspdf";
import domtoimage from "dom-to-image";
import HighChart from "../../../../components/HighChart";

/**
 * @desc 我应该有自己的状态
 * 支持添加dom
 * @param {string} selector
 */
const useExportPdf = (): [
  string,
  {
    addHtml: (val: string) => void;
    savePdf: () => void;
  }
] => {
  //
  const [stack, setStack] = useState("");

  /**
   * @desc 该方法用于向stack添加dom
   * @param {string} selector
   */
  const addHtml = (selector: string) => {
    const tempDom = document.querySelector(selector)?.outerHTML;
    setStack((pre) => `${pre}${tempDom}`);
  };

  /**
   * @desc 该方法用于下载
   */
  const savePdf = () => {};

  return [stack, { addHtml, savePdf }];
};

/**
 * @desc 获取图片dataURL
 */
const handleGenerateDataUrl = (domSelector = "body"): any => {
  const realDomSelector =
    typeof domSelector === "string" ? domSelector : "body";
  const node = document.querySelector(realDomSelector);

  return domtoimage
    .toPng(node as Node)
    .then((dataUrl: string) => dataUrl)
    .catch((error: Error) => error);
};

const pdfObj = new JsPDF();

/**
 * @desc 自定义导出pdf
 */
const ExportPdfDemo = () => {
  const handleAddImage = async () => {
    const dataURL = await handleGenerateDataUrl("#pdf-demo-dom");
    pdfObj.addImage(dataURL, "JPEG", 20, 20, 180, 140);
  };

  const handleAddPage = () => {
    pdfObj.addPage();
  };

  const handleAddText = (str: string | number) => {
    pdfObj.text(String(str), 10, 10);
  };

  return (
    <>
      <Row>
        <Button
          type="primary"
          style={{ marginLeft: "20px" }}
          onClick={handleAddImage}
        >
          给实例添加一个图片
        </Button>

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
          onClick={() => handleAddText(2222)}
        >
          添加数字 2222
        </Button>
        <Button
          type="primary"
          style={{ marginLeft: "20px" }}
          onClick={() => pdfObj.save("lixingjuan.pdf")}
        >
          保存pdf
        </Button>
      </Row>

      {/* 测试dom */}
      <div
        id="pdf-demo-dom"
        style={{ width: "800px", border: "1px #666 dashed", padding: "20px" }}
      >
        <h3>你好，下面是个high chart</h3>
        <HighChart />

        <h3>下面是红色文字</h3>
        <span style={{ color: "red" }}>我是红色文字</span>

        <h3>下面分别是不同大小文字</h3>
        <span style={{ fontSize: "12px" }}>12px文字</span>
        <span style={{ fontSize: "18px" }}>18px文字</span>
        <span style={{ fontSize: "20px" }}>20px文字</span>
      </div>
    </>
  );
};

export default ExportPdfDemo;
