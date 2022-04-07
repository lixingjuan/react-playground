import React, { useState } from "react";
import { Select, Checkbox } from "antd";

const { Option } = Select;

const children = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

function handleChange(value) {
  console.log(`Selected: ${value}`);
}

const SelectSizesDemo = () => {
  const [items, setItems] = useState(["jack", "lucy"]);

  const [size, setSize] = React.useState("default");

  const handleSizeChange = (e) => {
    setSize(e.target.value);
  };

  return (
    <>
      <Select
        value={2}
        style={{ width: 300 }}
        placeholder="custom dropdown render"
      >
        {items.map((item) => (
          <div key={item}>
            <Checkbox></Checkbox>
            <span>{item}</span>
          </div>
        ))}
      </Select>

      {/* <Select
        size={size}
        defaultValue="a1"
        onChange={handleChange}
        style={{ width: 200 }}
        dropdownRender={
          <>
            <li>hello</li>
            <li>world</li>
            <li>silly</li>
          </>
        }
      /> */}
      {/* <div>
          <Checkbox />
        </div>
      </Select> */}
    </>
  );
};

export default SelectSizesDemo;
