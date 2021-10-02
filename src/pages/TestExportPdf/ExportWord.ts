/** Copyright © 2013-2021 DataYes, All Rights Reserved. */

/* @ts-ignore */
import tempCanvg from "canvg";
/* @ts-ignore */
import HTMLtoDOCX from "html-to-docx/dist/html-to-docx.esm.js";
/* @ts-ignore */
import { saveAs } from "file-saver";

const canvg = tempCanvg;

/**
 * @desc 传入svg字符串
 * @param {*} svg 字符串
 * @return 返回img dom
 */
const svgToBase64Img = (svgHtml: string) => {
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
 * @desc 导出word
 * @param {string} domSelector dom选择器
 * 由于html-to-docx不能导出图片, 所以需要将图片进行解析为base64
 */
export const handleExportWord = async (domSelector: string) => {
  /**
   * 1. 获取要导出的dom
   * 2. 如果其中svg节点, 遍历获取, 替换为img节点(todo: 这样就修改了页面了, 是不是应该创建当前页面的副本, 在内存中操作这些)
   */

  const toExportDomOriginal = document.querySelector(domSelector);

  if (!toExportDomOriginal) {
    console.error("找不到指定的dom");
    return;
  }
  const toExportDom = toExportDomOriginal.cloneNode(true) as Element;

  const svgDomList = toExportDom?.querySelectorAll("svg");

  if (svgDomList) {
    Array.from(svgDomList).forEach((it) => {
      const newIt = svgToBase64Img(it.outerHTML);
      it.parentNode?.replaceChild(newIt, it);
    });
  }

  const toExportHtml = toExportDom?.outerHTML;
  const res = await HTMLtoDOCX(toExportHtml);
  saveAs(res, "lixingjuan.doc");

  // toExportDomOriginal?.appendChild(toExportDom);
};
