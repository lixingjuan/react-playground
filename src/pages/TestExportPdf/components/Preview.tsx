import React from "react";
import styled from "styled-components";
import { AllProps } from "../type.d";

const DemoStyle = styled.div``;

const Demo: React.FC<AllProps> = (props: AllProps) => {
  const { pdf } = props;

  return (
    <DemoStyle>
      <div>此处展示预览结果</div>
    </DemoStyle>
  );
};

export default Demo;
