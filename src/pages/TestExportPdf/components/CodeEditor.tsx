import React, { useState } from "react";
import styled from "styled-components";
import { AllProps } from "../type";
import { jsPDF as JsPDF } from "jspdf";
// @ts-ignore
import CodeMirror from "react-codemirror";
import { useDebounceEffect } from "ahooks";
import { getInitCode, getInitTableCode } from "./constant";
import autoTable from "jspdf-autotable";

const CodeMirrorStyle = styled(CodeMirror)`
  height: 100%;
  min-height: 100%;
`;

var options = {
  lineNumbers: true,
};

interface CodeProps extends AllProps {
  setPdf: React.Dispatch<React.SetStateAction<any>>;
}

const CodeEditor: React.FC<CodeProps> = ({ setPdf }: CodeProps) => {
  const [code, setCode] = useState(getInitCode());

  useDebounceEffect(
    () => {
      try {
        const pdf = new JsPDF();
        // @ts-ignore TODO
        window.pdf = pdf;
        // @ts-ignore TODO
        window.autoTable = autoTable;
        // eslint-disable-next-line
        const demo = new Function(code);
        demo();
        setPdf(pdf);
      } catch ({ message }) {
        console.error(message);
      }
    },
    [code],
    {
      wait: 1000,
    }
  );

  return <CodeMirrorStyle value={code} onChange={setCode} options={options} />;
};

export default CodeEditor;
