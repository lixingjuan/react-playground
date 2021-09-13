import { Tabs } from "antd";

const { TabPane } = Tabs;

function callback(key) {
  console.log({ key });
}

const arr = Array.from({ length: 20 }).map((it, index) => ({
  tab: `tab${index}`,
}));

const Demo = () => {
  // const handleMore = () => {};
  // const TabsRef = useRef(null);
  // useEffect(() => {
  //   console.log(TabsRef.current);
  // }, [TabsRef]);

  return (
    <div>
      {/* onChange 居然是 */}
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
