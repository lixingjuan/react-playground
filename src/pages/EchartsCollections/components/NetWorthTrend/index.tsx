import EchatsDemo from "../../../../components/EchatsDemo";

import options from "./options";

function EchartsDemosPage() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h2>净值走势</h2>
      <EchatsDemo options={options} style={{ width: "100%" }} />
    </div>
  );
}

export default EchartsDemosPage;
