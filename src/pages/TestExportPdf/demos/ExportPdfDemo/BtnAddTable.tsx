import React from "react";
import { Button } from "antd";
import { jsPDF as JsPDF } from "jspdf";
import autoTable from "jspdf-autotable";

import TestDomTable from "./TestDomTable";

export default function BtnPreview() {
  var pdf = new JsPDF();

  // 打开新窗口预览
  const handleAddTable = async (preview = false) => {
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

    autoTable(pdf, { html: "table" });

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

    pdf.setLineWidth(0.1);
    pdf.line(0, 0, 20, 20);

    if (preview) {
      pdf.output("dataurlnewwindow");
    } else {
      pdf.save("lixingjuan.pdf");
    }
  };

  return (
    <div>
      <Button
        type="primary"
        style={{ marginLeft: "20px" }}
        onClick={() => handleAddTable(false)}
      >
        添加table&&导出
      </Button>
      <Button
        type="primary"
        style={{ marginLeft: "20px" }}
        onClick={() => handleAddTable(true)}
      >
        添加table&&预览
      </Button>

      <TestDomTable id="#my-table" />
    </div>
  );
}
