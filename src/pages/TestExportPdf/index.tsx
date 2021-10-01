/** Copyright © 2013-2021 DataYes, All Rights Reserved. */

import React from "react";
import { Button } from "antd";
import styled from "styled-components";
import HighChart from "./Chart";

import { useExport } from "./hooks";
import { handleExportWord } from "./ExportWord";

const ToPdfDomContainer = styled.div`
  position: fixed;
  .red {
    color: red;
  }
  /* top: -200%; */
`;

export default function DemoExportButton() {
  const { handleAppend, handleExportPdf } = useExport();

  return (
    <div>
      <Button onClick={() => handleAppend("#dom-container")}>
        将Top10的图片append到body
      </Button>
      <Button onClick={() => handleExportPdf("#dom-container")}>
        导出chart部分的的pdf
      </Button>
      <Button onClick={() => handleExportWord("#dom-container")}>
        导出chart部分的的word
      </Button>

      <ToPdfDomContainer id="dom-container">
        <div className="red">一些红色的字, css并不在dom上</div>
        <div
          style={{
            color: "yellow",
          }}
        >
          一些黄色的字, css在dom上
        </div>
        <div id="chart1" style={{ width: "800px" }}>
          <HighChart />
        </div>
        <div id="chart2" style={{ width: "800px" }}>
          <HighChart />
        </div>
      </ToPdfDomContainer>
    </div>
  );
}
