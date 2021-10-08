import { Button, Row } from "antd";
import { exportWord } from "./utils";
import HighChart from "../../../../components/HighChart";

const ExportWordDemo = () => {
  return (
    <Row>
      <Button onClick={() => exportWord("#word-demo-dom")}>
        导出指定dom的word文件
      </Button>
      {/* 测试dom */}
      <Row id="word-demo-dom">
        <HighChart />
      </Row>
    </Row>
  );
};

export default ExportWordDemo;
