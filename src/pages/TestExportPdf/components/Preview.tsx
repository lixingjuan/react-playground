import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { AllProps } from "../type.d";
import "../test-font-normal";

const DemoStyle = styled.div`
  width: 100%;
  height: 100%;
  iframe {
    width: 100%;
    height: 100%;
    border: 0;
  }
`;

const Demo: React.FC<AllProps> = ({ pdf }: AllProps) => {
  const [iframeSrc, setIframeSrc] = useState("");

  useEffect(() => {
    console.log("pdf change");
    setIframeSrc(pdf.output("datauristring"));
  }, [pdf]);

  return (
    <DemoStyle>
      {/* iframeSrc{{ iframeSrc }} */}
      <iframe src={iframeSrc} title="preview" />
    </DemoStyle>
  );
};

export default Demo;
