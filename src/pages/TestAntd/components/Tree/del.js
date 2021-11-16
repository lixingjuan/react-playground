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
            title: "我是自定义title",
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
const recursion = (sourceData = [], theDataMap) => {
  let treeDataMap = theDataMap || new Map();
  sourceData.forEach((it) => {
    if (!treeDataMap.has(it.key)) {
      treeDataMap.set(it.key, it.children || []);
    }
    if (it.children?.length) {
      recursion(it.children, treeDataMap);
    }
  });
  return treeDataMap;
};

const resultSet = recursion(treeData);
console.log({ resultSet });
