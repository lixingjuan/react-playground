import HighChart from "../../../../components/HighChartDemo";
import "./index.css";
import TestDomTable from "./TestDomTable.jsx";

/**
 * @desc 自定义导出pdf
 */
const ExportPdfDemo = () => {
  return (
    <>
      <ol
        id="pdf-demo-dom"
        style={{ width: "800px", border: "1px #666 dashed", padding: "20px" }}
      >
        <li>
          <h3>highchart</h3>
          <HighChart />
        </li>
        <li>
          <h3>colorful font</h3>

          <span style={{ color: "red" }}>I'm red font</span>
        </li>

        <li>
          <h3>table</h3>
          <TestDomTable />
          <table>
            <thead>
              <tr>
                <th colSpan={2}>The table header</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>The table body</td>
                <td>with two columns</td>
              </tr>
            </tbody>
          </table>
        </li>

        <li>
          <h3>different size font</h3>
          <span style={{ fontSize: "12px" }}>12px font</span>
          <span style={{ fontSize: "18px" }}>18px font</span>
          <span style={{ fontSize: "20px" }}>20px font</span>
        </li>
      </ol>
    </>
  );
};

export default ExportPdfDemo;
