export const initCode = `//
      pdf.text("1. 调用pdf.table方法添加的table", 20, 40);

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
      // you need to install 'jspdf-autotable' use "import autoTable from 'jspdf-autotable';"
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

      pdf.setFont('SourceHanSansCN-Normal-normal', 'normal');
      pdf.text("ǒ", 10,10,50,50);

      pdf.setFont('SourceHanSansCN-Normal-normal', 'normal');
      pdf.text("中文", 100,100,20,20);
`;

// 测试设计稿table
export const initTableCode = `
 autoTable(pdf, {
  theme: "plain",
  headStyles: {
    fillColor: "#f6f6f6",
    textColor: "#000",
    cellWidth: "wrap",
    fontSize: 8,
  },
  bodyStyles: {
    textColor: "#000",
    cellWidth: "wrap",
    fontSize: 8,
  },
  head: [
    [
      {
        content: "Forecast Value",
        colSpan: 2,
        styles: {
          halign: "center",
          valign: "middle",
          fillColor: "#f6f6f6",
        },
      },
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "June",
      "July",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
  ],
  body: [
    [
      {
        content: "2021",
        rowSpan: 2,
        styles: {
          halign: "center",
          valign: "middle",
          cellWidth: "wrap",
          fillColor: "#f6f6f6",
        },
      },
      {
        content: "Value",
        styles: {
          fillColor: "#f6f6f6",
          halign: "center",
          valign: "middle",
          cellWidth: "wrap",
        },
      },
      "5,228,31",
      "5,228,31",
      "5,228,31",
      "5,228,31",
      "5,228,31",
      "5,228,31",
      "5,228,31",
      "5,228,31",
      "5,228,31",
      "5,228,31",
      "5,228,31",
      "5,228,31",
    ],
    [
      {
        content: "%Change",
        styles: {
          halign: "center",
          valign: "middle",
          cellWidth: "wrap",
          fillColor: "#f6f6f6",
        },
      },
      "4.49%",
      "4.49%",
      "4.49%",
      "4.49%",
      "4.49%",
      "4.49%",
      "4.49%",
      "4.49%",
      "4.49%",
      "4.49%",
      "4.49%",
      "4.49%",
    ],
    [
      {
        content: "2022",
        rowSpan: 2,
        styles: {
          halign: "center",
          valign: "middle",
          fillColor: "#f6f6f6",
        },
      },
      {
        content: "Value",
        styles: {
          halign: "center",
          valign: "middle",
          fillColor: "#f6f6f6",
        },
      },
      "5,228,31",
      "5,228,31",
      "5,228,31",
      "5,228,31",
      "5,228,31",
      "5,228,31",
      "5,228,31",
      "5,228,31",
      "5,228,31",
      "5,228,31",
      "5,228,31",
      "5,228,31",
    ],
    [
      {
        content: "%Change",
        styles: {
          halign: "center",
          valign: "middle",
          fillColor: "#f6f6f6",
        },
      },
      "4.49%",
      "4.49%",
      "4.49%",
      "4.49%",
      "4.49%",
      "4.49%",
      "4.49%",
      "4.49%",
      "4.49%",
      "4.49%",
      "4.49%",
      "4.49%",
    ],
  ],
});

`;
