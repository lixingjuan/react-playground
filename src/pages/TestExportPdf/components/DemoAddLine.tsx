import { useEffect, useState } from "react";

import TestDomTable from "./TestDomTable";
import CodeMirror from "./CodeMirror";
import { AllProps } from "../utils";

export default function BtnPreview({ pdf }: AllProps) {
  const [code, setCode] = useState<string>("");

  useEffect(() => {
    async function handleAddTable(preview = false) {
      pdf.addPage("2");
      pdf.setLineWidth(0.1);
      pdf.line(0, 0, 20, 20);
    }
    handleAddTable();

    setCode(`
${handleAddTable}
    `);
  }, [pdf]);
  // 打开新窗口预览

  return (
    <>
      <TestDomTable id="#my-table" />
      {!!code && <CodeMirror code={code} />}
    </>
  );
}
