import React, { useState, useEffect } from "react";
import { Row, Button } from "antd";
import HighChartDemo from "../../components/HighChartDemo";
import { handleGenerateDataUrl } from "../../pages/TestExportPdf/utils";
import { jsPDF as JsPDF } from "jspdf";
import dataURL from "./del";
/* eslint-disabled-next-line */
import frameworkDataUrl from "./framework";

const exportClassName = "hello-chart";
// import "./home.css";

function HomePage() {
  const [imgSrc, setImgSrc] = useState("");
  const [ifamreSrc, setIfamreSrc] = useState("");

  useEffect(() => {
    const handleExportChart = async () => {
      const pdfObj = new JsPDF();
      // const dataURL = await handleGenerateDataUrl(`.${exportClassName}`);
      setImgSrc(frameworkDataUrl);
      if (!frameworkDataUrl) {
        return;
      }

      pdfObj.addImage({
        imageData: frameworkDataUrl,
        x: 0,
        y: 0,
        width: 2500 / 5,
        height: 850 / 5,
      });
      const datauristring = pdfObj.output("datauristring");
      setIfamreSrc(datauristring);
      pdfObj.save("li.pdf");
    };
    handleExportChart();
  }, []);

  // 2500 850
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {/* <Button onClick={handleExportChart}>导出chart</Button> */}
      {/* <img src={imgSrc} alt="imgSrc" /> */}
      <iframe src={ifamreSrc} title="ifamreSrc"></iframe>
      <Row align="middle" justify="center" style={{ height: "100%" }}>
        {/* <h1>Hello World!</h1> */}
        {/* <div id="container">
        <HighChartDemo
          otherConfig={{ chart: { className: exportClassName } }}
        />
      </div> */}
      </Row>
    </div>
  );
}

export default HomePage;
