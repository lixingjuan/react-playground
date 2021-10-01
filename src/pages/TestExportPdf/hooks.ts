/** Copyright © 2013-2021 DataYes, All Rights Reserved. */

import { useCallback } from "react";
import domtoimage from "dom-to-image";
import { jsPDF as JsPDF } from "jspdf";
import { message } from "antd";
/* @ts-ignore */
import tempCanvg from "canvg";
/* @ts-ignore */
import HTMLtoDOCX from "html-to-docx/dist/html-to-docx.esm.js";
/* @ts-ignore */
import { saveAs } from "file-saver";

const canvg = tempCanvg;

export const useExport = () => {
  const svgToBase64Img = () => {
    const svgHtml = document.querySelector("#highChart-dom svg")?.outerHTML;
    const canvasContext = document.createElement("canvas");
    canvg(canvasContext, svgHtml);
    const ctx = canvasContext.getContext("2d");
    const imageBase64 = ctx?.canvas.toDataURL("image/jpeg");

    const imgEle = document.createElement("img");

    if (!imageBase64) {
      imgEle.src = "";
      imgEle.alt = "oops";
      return imgEle;
    }

    imgEle.src = imageBase64;
    return imgEle;
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

  const handleAppend = (domSelector = "body") => {
    handleGenerateDataUrl(domSelector)
      .then((dataUrl: string) => {
        const img = new Image();
        img.src = dataUrl;
        document.body.appendChild(img);
        message.success("append successfully!");
      })
      .catch((error: Error) => {
        message.error(error.message || "error");
      });
  };

  /**
   * @desc 导出pdf
   * @param {*} useCallback
   */
  const handleExportPdf = useCallback(async (domSelector = "body") => {
    const dataURL = await handleGenerateDataUrl(domSelector);

    const pdfObj = new JsPDF();

    pdfObj.text("Hello world!", 10, 10);
    // 2. 第二页
    pdfObj.addPage("3");
    pdfObj.text("this is the second page", 10, 10);
    pdfObj.addImage(dataURL, "JPEG", 20, 20, 180, 140);
    // 3. 下载pdf文件
    pdfObj.save("lixingjuan.pdf");
  }, []);

  /**
   * @desc 导出word
   * @param {string} domSelector dom选择器
   * 由于html-to-docx不能导出图片, 所以需要将图片进行解析为base64
   */
  const handleExportWord = useCallback(async (domSelector = "body") => {
    // 1. 创建canvas画布
    const canvasContext = document.createElement("canvas");

    if (!canvasContext.getContext) {
      return;
    }

    const ctx = canvasContext.getContext("2d");
    if (!ctx) {
      return;
    }
    const svgDom = document.querySelector("#highChart-dom svg");

    const imageBase64 = svgToBase64Img();
    svgDom?.parentNode?.replaceChild(imageBase64, svgDom);

    const toExportHtml = document.querySelector(".container");
    toExportHtml && document.querySelector("body")?.append(toExportHtml);
    // const res = await HTMLtoDOCX(toExportHtml);
    // saveAs(res, "lixingjuan.doc");
  }, []);

  return {
    handleAppend,
    handleExportPdf,
    handleExportWord,
    handleGenerateDataUrl,
  };
};
