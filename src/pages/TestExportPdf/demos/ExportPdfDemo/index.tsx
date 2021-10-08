import React, { useState, useEffect } from "react";
import { Button, Row } from "antd";
import { jsPDF as JsPDF } from "jspdf";
import domtoimage from "dom-to-image";
import TestDom from "./TestDom";
import BtnPreview from "./BtnPreview";

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

  const handleAddText = (/* str: string | number */) => {
    pdfObj.setTextColor("red");
    pdfObj.text("222", 10, 10);
    pdfObj.setTextColor("green");
    pdfObj.text("888", 10, 30);
  };

  return (
    <>
      <Row>
        <Button
          type="primary"
          style={{ marginLeft: "20px" }}
          onClick={handleAddImage}
        >
          将下图chart加入pdf
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
          onClick={handleAddText}
        >
          添加数字 222, 红色, 888, 绿色
        </Button>

        <BtnPreview />

        <Button
          type="primary"
          style={{ marginLeft: "20px" }}
          onClick={() => pdfObj.save("lixingjuan.pdf")}
        >
          保存pdf
        </Button>
      </Row>

      <TestDom />
    </>
  );
};

export default ExportPdfDemo;
