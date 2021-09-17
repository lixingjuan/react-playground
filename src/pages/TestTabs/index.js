import { Tabs, Card } from "antd";
import TestRender from "./components/TestRender";

const { TabPane } = Tabs;

function callback(key) {
  console.log({ key });
}

const arr = Array.from({ length: 20 }).map((it, index) => ({
  tab: `tab${index}`,
}));

const TestTabsPage = () => {
  return (
    <div>
      <Tabs defaultActiveKey="1" onChange={callback}>
        {arr.map((it) => (
          <TabPane tab={it.tab} key={it.tab}>
            {it.tab} content
          </TabPane>
        ))}
      </Tabs>

      <Card title="测试tab的渲染" style={{ width: "100vw" }}>
        <TestRender />
      </Card>
    </div>
  );
};

export default TestTabsPage;
