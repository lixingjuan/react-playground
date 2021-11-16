import { useState, useMemo } from "react";
import { Tree } from "antd";
import { useCreation } from "ahooks";
const treeData = [
  {
    title: "parent 1",
    key: "0-0",
    children: [
      {
        title: "parent 1-0",
        key: "0-0-0",
        children: [
          {
            title: "leaf",
            key: "0-0-0-0",
          },
          {
            title: "leaf",
            key: "0-0-0-1",
          },
        ],
      },
      {
        title: "parent 1-1",
        key: "0-0-1",
        children: [
          {
            title: (
              <span
                style={{
                  color: "#1890ff",
                }}
              >
                我是自定义title
              </span>
            ),
            key: "0-0-1-0",
          },
        ],
      },
    ],
  },
];

/**
 * @desc 打平，生成树结构map的 key-value map
 */
const recursion = (sourceData: any, theDataMap?: any) => {
  let treeDataMap = theDataMap || new Map();

  sourceData.forEach((it: any) => {
    if (!treeDataMap.has(it?.key)) {
      treeDataMap.set(it?.key, it?.children || []);
    }
    if (it?.children?.length) {
      recursion(it?.children, treeDataMap);
    }
  });
  return treeDataMap;
};

const Demo = () => {
  // const selectKeys = useCreation(() => new Map(), []);
  const allCanSeenKeys = useCreation(() => new Map(), []);
  const [expendedKeys, setExpendedKeys] = useState(["0-0"]);

  const onSelect = (selectedKeys: any, info: any) => {
    console.log("selected", selectedKeys, info);
  };

  const onCheck = (checkedKeys: any, info: any) => {
    console.log("onCheck", checkedKeys, info);
  };

  const keyToValueTreeMap = useMemo(() => {
    return recursion(treeData);
  }, [treeData]);

  const onExpand = (checkedKeys: any, info: any) => {
    console.log("onExpand", checkedKeys, info);
    setExpendedKeys(checkedKeys);
    // const {node } = info;
    // const {key:currentKey } = node;
    // allCanSeenKeys.
    // 设置当前所有可砍价的节点key
  };

  return (
    <Tree
      checkable
      defaultExpandedKeys={expendedKeys}
      defaultCheckedKeys={["0-0-0", "0-0-1"]}
      onSelect={onSelect}
      onCheck={onCheck}
      treeData={treeData}
      onExpand={onExpand}
    />
  );
};

export default Demo;
