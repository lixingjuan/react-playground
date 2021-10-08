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
const getBlob = async (toExportDomOriginal: Element) => {
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
  const res = await HTMLtoDOCX(toExportHtml);
  return res;
};

/**
 * @desc 导出word
 * @param {string} domSelector dom选择器
 * 由于html-to-docx不能导出图片, 所以需要将图片进行解析为base64
 */
export const exportWord = async (domSelector: string) => {
  if (!!domSelector === false || typeof domSelector !== "string") {
    throw TypeError("The 'domSelector' must be a string.");
  }

  const toExportDomOriginal = document.querySelector(domSelector);

  if (!toExportDomOriginal) {
    console.error("找不到指定的dom");
    return;
  }

  getBlob(toExportDomOriginal)
    .then((resBlob) => {
      saveAs(resBlob, "lixingjuan.doc");
    })
    .catch((err) => {
      console.log("export error, error message=>", err);
    });
};
