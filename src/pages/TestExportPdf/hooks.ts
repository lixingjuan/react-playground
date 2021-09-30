/** Copyright © 2013-2021 DataYes, All Rights Reserved. */

import { useCallback } from "react";
import domtoimage from "dom-to-image";
import { jsPDF as JsPDF } from "jspdf";
import { message } from "antd";

export const useExport = () => {
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

  const handleExport = useCallback(async (domSelector = "body") => {
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

  return {
    handleGenerateDataUrl,
    handleExport,
    handleAppend,
  };
};
