import React from "react";
import { Button } from "antd";
import { jsPDF as JsPDF } from "jspdf";
import canvg from "canvg";
import autoTable from "jspdf-autotable";

import TestDomTable from "./TestDomTable";

/**
 * @desc 传入svg字符串
 * @param {*} svg 字符串
 * @return 返回img dom
 */
const svgToBase64Img = (svgHtml: string) => {
  if (!!svgHtml === false || typeof svgHtml !== "string") {
    throw TypeError("The parameter format must be a string.");
  }

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
 * @desc 将制定的dom 进行克隆、svg 替换， 并返回
 * @param {Element} toExportDomOriginal
 */
const getExportHtml = async (toExportDomOriginal: Element) => {
  // 对用户指定的dom执行深拷贝
  const toExportDom = toExportDomOriginal.cloneNode(true) as Element;

  // 将其中的svg dom 替换为 img标签
  const svgDomList = toExportDom?.querySelectorAll("svg");

  if (svgDomList) {
    Array.from(svgDomList).forEach((it) => {
      const newIt = svgToBase64Img(it.outerHTML);
      it.parentNode?.replaceChild(newIt, it);
    });
  }

  const toExportHtml = toExportDom?.outerHTML;
  return toExportHtml;
};

export default function BtnPreview() {
  var pdf = new JsPDF();

  // 打开新窗口预览
  const handleAddTable = async (preview = false) => {
    pdf.table(
      10,
      10,
      [
        { name: "lixingjuan", age: "25" },
        { name: "li", age: "18" },
        { name: "li", age: "22" },
      ],
      ["name", "age"],
      {
        css: {
          "font-size": 0.5,
        },
        headerBackgroundColor: "f6f6f6",
        // lineWidth: 0,
      }
    );

    autoTable(pdf, { html: "table" });

    autoTable(pdf, {
      head: [["Name", "Email", "Country"]],
      body: [
        [
          {
            content: "Text",
            rowSpan: 2,
            styles: { halign: "center", valign: "middle" },
          },
          "david@example.com",
          "Sweden",
          "SwedenSwedenSwedenSwedenSweden",
        ],
        [
          // "Castille",
          "castille@example.com",
          "Spain",
          "SpainSpainSpainSpainSpain",
        ],
        [
          "David",
          "david@example.com",
          "Sweden",
          "SwedenSwedenSwedenSwedenSweden",
        ],
        [
          "Castille",
          "castille@example.com",
          "Spain",
          "SpainSpainSpainSpainSpain",
        ],
      ],
      headStyles: {
        fillColor: "red",
      },
    });

    pdf.setLineWidth(0.1);
    pdf.line(0, 0, 20, 20);

    if (preview) {
      pdf.output("dataurlnewwindow");
    } else {
      pdf.save("lixingjuan.pdf");
    }
  };

  return (
    <div>
      <Button
        type="primary"
        style={{ marginLeft: "20px" }}
        onClick={() => handleAddTable(false)}
      >
        添加table&&导出
      </Button>
      <Button
        type="primary"
        style={{ marginLeft: "20px" }}
        onClick={() => handleAddTable(true)}
      >
        添加table&&预览
      </Button>

      <TestDomTable id="#my-table" />
    </div>
  );
}
