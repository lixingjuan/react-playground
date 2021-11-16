import { Checkbox, Button, Col, Row } from "antd";
import React, { useMemo, useState } from "react";
// import { useSelections } from "ahooks";
import useSelections from "./code";

const list = [{ name: "1" }, { name: "2" }, { name: "3" }];

export default function TestUseSelections() {
  const [hideOdd, setHideOdd] = useState(false);
  const [allTreeKeys, setallTreeKeys] = useState([1, 2, 3, 4]);
  const [defautCheckedKeys, setdefautCheckedKeys] = useState([1]);

  const {
    selected,
    allSelected,
    partiallySelected,
    isSelected,
    toggle,
    toggleAll,
  } = useSelections(allTreeKeys, defautCheckedKeys);

  const handleClick = () => {
    // setallTreeKeys([5, 6]);
    setdefautCheckedKeys([5]);
  };

  return (
    <div>
      <Button onClick={handleClick}>修改 alldata</Button>

      <div>初始化被选中的元素 selected : {selected.map((it) => it)}</div>

      <div style={{ borderBottom: "1px solid #E9E9E9", padding: "10px 0" }}>
        <Checkbox
          checked={allSelected}
          onClick={toggleAll}
          indeterminate={partiallySelected}
        >
          Check all
        </Checkbox>
        <Checkbox checked={hideOdd} onClick={() => setHideOdd((v) => !v)}>
          Hide Odd
        </Checkbox>
      </div>

      {allTreeKeys.map((it) => (
        <li>{it}</li>
      ))}
    </div>
  );
}
