import React from "react";
import styled from "styled-components";
import { AllProps } from "../type.d";
// @ts-ignore
import CodeMirror from "react-codemirror";

const CodeMirrorStyle = styled(CodeMirror)`
  height: 100%;
  min-height: 100%;
`;

var options = {
  lineNumbers: true,
};

const Demo: React.FC<AllProps> = (props: AllProps) => {
  const { pdf } = props;

  return (
    <CodeMirrorStyle
      value={"// "}
      onChange={(val: string) => {
        console.log({ val });
      }}
      options={options}
    />
  );
};

export default Demo;
