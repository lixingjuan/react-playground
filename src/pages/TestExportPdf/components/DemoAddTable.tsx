import { useEffect, useState } from "react";
import autoTable from "jspdf-autotable";

import TestDomTable from "./TestDomTable";
import CodeMirror from "./CodeMirror";
import { pdfNewPagePreview, AllProps } from "./utils";

export default function BtnPreview({ pdf }: AllProps) {
  const [code, setCode] = useState<string>("");

  useEffect(() => {
    async function handleAddTable(preview = false) {
      // pdf.text("1. 调用pdf.table方法添加的table", 20, 40);
      pdf.text("1. pdf.table", 20, 40);
      pdf.table(
        10,
        10,
        [
          { name: "lixingjuan", age: "25" },
          { name: "li", age: "18" },
          { name: "li", age: "22" },
        ],
        ["name", "age"],
        {
          css: {
            "font-size": 0.5,
          },
          headerBackgroundColor: "f6f6f6",
          // lineWidth: 0,
        }
      );

      pdf.addPage();

      // 3. 获取原液原有table
      // pdf.text("2. 使用autoTable方法, 添加的页面上的table", 20, 200);
      pdf.text("2. autoTable", 20, 200);
      autoTable(pdf, { html: "table" });

      // 3. 自定义数据源, 创建table
      // pdf.text("3. 使用autoTable方法, 自定义数据源添加的table", 20, 300);
      pdf.text("3. autoTable datasource", 20, 300);
      autoTable(pdf, {
        head: [["Name", "Email", "Country"]],
        body: [
          [
            {
              content: "Text",
              rowSpan: 2,
              styles: { halign: "center", valign: "middle" },
            },
            "david@example.com",
            "Sweden",
            "SwedenSwedenSwedenSwedenSweden",
          ],
          [
            // "Castille",
            "castille@example.com",
            "Spain",
            "SpainSpainSpainSpainSpain",
          ],
          [
            "David",
            "david@example.com",
            "Sweden",
            "SwedenSwedenSwedenSwedenSweden",
          ],
          [
            "Castille",
            "castille@example.com",
            "Spain",
            "SpainSpainSpainSpainSpain",
          ],
        ],
        headStyles: {
          fillColor: "red",
        },
      });

      if (preview) {
        pdfNewPagePreview(pdf);
      }
    }
    handleAddTable();
    setCode(handleAddTable.toString());
  }, [pdf]);
  // 打开新窗口预览

  return (
    <>
      <TestDomTable id="#my-table" />
      {!!code && <CodeMirror code={code} />}
    </>
  );
}
