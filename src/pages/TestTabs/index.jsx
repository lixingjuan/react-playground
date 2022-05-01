import { Tabs, Card } from "antd";
import TestRender from "./components/TestRender";
import ExtraButton from "./components/ExtraButton";

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
      <ExtraButton />

      <Tabs
        defaultActiveKey="1"
        onChange={callback}
        tabBarExtraContent={<div>hello </div>}
      >
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
