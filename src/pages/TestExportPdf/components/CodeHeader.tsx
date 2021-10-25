import React from "react";
import styled from "styled-components";
import { Select } from "antd";
import { AllProps } from "../type";
// @ts-ignore

const { Option } = Select;

const DemoStyle = styled.header`
  height: 90px;
  min-height: 90px;
  background-color: rgb(139, 92, 221);
  color: #fff;
  display: flex;
  align-items: center;
  label {
    color: rgba(255, 255, 255, 0.5);
    padding-left: 40px;
    font-size: 22px;
  }
`;

const Demo: React.FC<AllProps> = (props: AllProps) => {
  // const { pdf } = props;

  return (
    <DemoStyle>
      <label htmlFor="">Pick an example</label>

      {/* <Select
        bordered={false}
        defaultValue="Table"
        style={{
          color: "#fff",
          fontSize: "20px",
          marginLeft: "30px",
          borderBottom: "1px solid #fff",
        }}
      >
        <Option value="Table">Table</Option>
      </Select> */}
    </DemoStyle>
  );
};

export default Demo;
