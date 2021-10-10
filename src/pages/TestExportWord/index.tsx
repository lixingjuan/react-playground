import { Tabs } from "antd";
import ExportPdfDemo from "./demos/ExportPdfDemo";
import ExportWordDemo from "./demos/ExportWordDemo";

export default function DemoExportButton() {
  return (
    <Tabs defaultActiveKey="1">
      <Tabs.TabPane tab="导出pdf demo" key="1">
        <ExportPdfDemo />
      </Tabs.TabPane>
      <Tabs.TabPane tab="导出word demo" key="2">
        <ExportWordDemo />
      </Tabs.TabPane>
    </Tabs>
  );
}
