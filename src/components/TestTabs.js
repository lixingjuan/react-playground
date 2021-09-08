import { Button, Tabs, Menu, Dropdown } from "antd";
import { useRef, useEffect } from "react";

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

const arr = Array.from({ length: 20 }).map((it, index) => ({
  tab: `tab${index}`,
}));

const menu = (
  <Menu>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        1st menu item
      </a>
    </Menu.Item>

    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        3rd menu item (disabled)
      </a>
    </Menu.Item>
  </Menu>
);

const Demo = () => {
  const handleMore = () => {};
  // const TabsRef = useRef(null);
  // useEffect(() => {
  //   console.log(TabsRef.current);
  // }, [TabsRef]);

  return (
    <div>
      <Dropdown overlay={menu} trigger={["click"]}>
        <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
          More
        </a>
      </Dropdown>

      <Tabs defaultActiveKey="1" onChange={callback}>
        {arr.map((it) => (
          <TabPane tab={it.tab} key={it.tab}>
            {it.tab} content
          </TabPane>
        ))}
      </Tabs>
    </div>
  );
};

export default Demo;
