import { useEffect, useState } from "react";
import CodeMirror from "./CodeMirror";
import HighChart from "../../../components/HighChartDemo";

import { handleGenerateDataUrl, AllProps } from "./utils";

export default function DemoChart({ pdf }: AllProps) {
  const [code, setCode] = useState("");

  useEffect(() => {
    async function handleAddImage() {
      const dataURL = await handleGenerateDataUrl("#pdf-demo-dom");

      const imgEle = document.createElement("img");
      imgEle.src = dataURL;
      // pdf.addImage(imgEle, "png", 20, 20, 180, 140);
      pdf.addImage({
        imageData: imgEle,
        x: 100,
        y: 100,
        width: 200,
        height: 300,
      });
      // document.body.append(imgEle);
    }

    handleAddImage();

    setCode(
      `
// handleGenerateDataUrl函数
${handleGenerateDataUrl}

// 将图片添加到pdf实例
${handleAddImage}`
    );
  }, [pdf]);

  return (
    <div>
      <div id="pdf-demo-dom">
        <HighChart />
      </div>
      {code && <CodeMirror code={code} />}
    </div>
  );
}
