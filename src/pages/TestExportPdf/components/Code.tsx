import React from "react";
import styled from "styled-components";
import { Select } from "antd";
import { AllProps } from "../type.d";

const { Option } = Select;

const DemoStyle = styled.div`
  header {
    background-color: rgb(139, 92, 221);
  }
`;

const Demo: React.FC<AllProps> = (props: AllProps) => {
  const { pdf } = props;

  return (
    <DemoStyle>
      <header>
        <label htmlFor="">Pick an example</label>

        <Select bordered={false}>
          <Option value="Table">Table</Option>
        </Select>
      </header>

      <div>此处放代码编辑器</div>
    </DemoStyle>
  );
};

export default Demo;
