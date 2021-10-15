import { useState } from "react";
import { Tabs } from "antd";

const { TabPane } = Tabs;

const tempArr = [
  {
    tab: "1",
    comp: () => <div>1</div>,
  },
  {
    tab: "create",
    comp: () => "",
  },
];

const TestTabsPage = () => {
  const [activeKey, setactiveKey] = useState("1");

  function callback(key: any) {
    if (key === "create") {
      return false;
    }
    setactiveKey(key);
  }

  return (
    <Tabs
      defaultActiveKey="1"
      activeKey={activeKey}
      onChange={callback}
      tabBarExtraContent={<div>hello </div>}
    >
      {tempArr.map((it) => (
        <TabPane tab={it.tab} key={it.tab}>
          {it?.comp && it.comp()}
        </TabPane>
      ))}
    </Tabs>
  );
};

export default TestTabsPage;
