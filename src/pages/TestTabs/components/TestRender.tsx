import { useState, useCallback } from "react";
import { Button, Tabs } from "antd";

const { TabPane } = Tabs;

const OnceMap = {} as any;
const renderOnce = (name: string) => (OnceMap[name] = (OnceMap[name] || 0) + 1);

// const Content = ({ name }: { name: string }) => (
//   <TabPane tab={name} key={name}>
//     <div>渲染次数{renderOnce("name")}</div>
//   </TabPane>
// );

const getInitTabArr = () => [
  { name: "li", age: 888 },
  { name: "xing", age: 888 },
  { name: "juan", age: 888 },
];

const initTabArr = getInitTabArr();

const TestRender = () => {
  const [tabArr, setTabArr] =
    useState<{ name: string; age: number }[]>(initTabArr);

  const [activeKey, setactiveKey] = useState(tabArr[0].name);

  const callback = useCallback((key: any) => {
    // console.log({ key });
    setactiveKey(key);
  }, []);

  const handleAdd = useCallback(() => {
    setTabArr((preState) => [
      ...preState,
      {
        name: `${Math.random()}`,
        age: Math.random(),
      },
    ]);
  }, []);

  return (
    <div>
      <h2>
        测试如果通过往tab的数组添加内容的方式新增tab,
        是否会引起所有的tab重新渲染
      </h2>

      <Button onClick={handleAdd}>添加一个随机tab</Button>

      <div>？？？？ 为什么初次渲染2次？</div>
      <div>？？？？ 为什么切换tab, 其他也会渲染？？</div>
      <Tabs defaultActiveKey="1" onChange={callback} activeKey={activeKey}>
        {tabArr.map((it) => (
          <TabPane tab={it.name} key={it.name}>
            <div>
              {it.name}=渲染次数{renderOnce(it.name)}
            </div>
          </TabPane>
        ))}
      </Tabs>
    </div>
  );
};

export default TestRender;
