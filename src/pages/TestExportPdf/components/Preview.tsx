import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { AllProps } from "../type.d";

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
    setIframeSrc(pdf.output("datauristring"));
  }, [pdf]);

  return (
    <DemoStyle>
      <iframe src={iframeSrc} title="preview" style={{}} />
    </DemoStyle>
  );
};

export default Demo;
