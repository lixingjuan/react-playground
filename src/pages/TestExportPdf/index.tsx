/** Copyright © 2013-2021 DataYes, All Rights Reserved. */

import React from "react";
import { Button } from "antd";
import styled from "styled-components";
import HighChart from "./Chart";

import { useExport } from "./hooks";

const ToPdfDomContainer = styled.div`
  position: fixed;
  /* top: -200%; */
`;

export default function DemoExportButton() {
  const { handleAppend, handleExportPdf, handleExportWord } = useExport();

  return (
    <div>
      <Button onClick={() => handleAppend("#highChart-dom")}>
        将Top10的图片append到body
      </Button>
      <Button onClick={() => handleExportPdf("#highChart-dom")}>
        导出chart部分的的pdf
      </Button>
      <Button onClick={() => handleExportWord("#highChart-dom")}>
        导出chart部分的的word
      </Button>

      <ToPdfDomContainer>
        {/* Demo TOP10 */}
        <div id="highChart-dom" style={{ width: "800px" }}>
          <HighChart />
        </div>
      </ToPdfDomContainer>
    </div>
  );
}
