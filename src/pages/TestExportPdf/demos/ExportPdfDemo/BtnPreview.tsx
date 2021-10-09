import React from "react";
import { Button } from "antd";
import { jsPDF as JsPDF } from "jspdf";

/**
 * @desc 传入svg字符串
 * @param {*} svg 字符串
 * @return 返回img dom
 */
// const svgToBase64Img = (svgHtml: string) => {
//   if (!!svgHtml === false || typeof svgHtml !== "string") {
//     throw TypeError("The parameter format must be a string.");
//   }

//   const canvasContext = document.createElement("canvas");
//   canvg(canvasContext, svgHtml);
//   const ctx = canvasContext.getContext("2d");
//   const imageBase64 = ctx?.canvas.toDataURL("image/jpeg");

//   const imgEle = document.createElement("img");

//   if (!imageBase64) {
//     imgEle.src = "";
//     imgEle.alt = "oops";
//     return imgEle;
//   }

//   imgEle.src = imageBase64;
//   return imgEle;
// };

/**
 * @desc 将制定的dom 进行克隆、svg 替换， 并返回
 * @param {Element} toExportDomOriginal
 */
// const getExportHtml = async (toExportDomOriginal: Element) => {
//   // 对用户指定的dom执行深拷贝
//   const toExportDom = toExportDomOriginal.cloneNode(true) as Element;

//   // 将其中的svg dom 替换为 img标签
//   const svgDomList = toExportDom?.querySelectorAll("svg");

//   if (svgDomList) {
//     Array.from(svgDomList).forEach((it) => {
//       const newIt = svgToBase64Img(it.outerHTML);
//       it.parentNode?.replaceChild(newIt, it);
//     });
//   }

//   const toExportHtml = toExportDom?.outerHTML;
//   return toExportHtml;
// };

export default function BtnPreview() {
  let pdf = new JsPDF({
    orientation: "landscape",
    unit: "pt",
    format: "a4",
    compress: false,
  });

  // 打开新窗口预览
  const handlePreview = async (currentPage: boolean) => {
    const aaaDom = document.getElementById("aaaa")!.outerHTML;
    const bbbbDom = document.getElementById("bbbb")!.outerHTML;

    pdf = await pdf.html(aaaDom, {
      autoPaging: true,
      image: {
        type: "jpeg",
        quality: 1,
      },
      width: 200,
    });

    debugger;

    pdf.addPage("a4");
    pdf.text("split line", 30, 30);

    pdf = await pdf.html(bbbbDom, {
      autoPaging: true,
      image: {
        type: "jpeg",
        quality: 1,
      },
      width: 200,
    });

    pdf.save("lixingjuan.pdf");
  };

  return (
    <div>
      <Button
        type="primary"
        style={{ marginLeft: "20px" }}
        onClick={() => {
          handlePreview(false);
        }}
      >
        打开新窗口预览(效果很差) 分页和样式都很差
      </Button>

      <Button
        type="primary"
        style={{ marginLeft: "20px" }}
        onClick={() => {
          handlePreview(true);
        }}
      >
        当前页面预览
      </Button>
      <div id="aaaa">aaaa</div>
      <div id="bbbb">bbbb</div>
    </div>
  );
}
