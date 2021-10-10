import React from "react";
import styled from "styled-components";

interface DemoProps {
  contentText?: string;
}

const DemoStyle = styled.div`
  height: 90px;
  min-height: 90px;
  color: #fff;
  background-color: #c6c1d3;
  display: flex;
  align-items: center;
  font-size: 22px;

  label {
    color: #fff;
    padding-left: 40px;
  }

  .Download {
    margin-left: 30px;
    span.arrow {
      width: 55px;
      height: 55px;
      margin-left: 20px;
      border-radius: 50%;
      &:hover {
        background-color: #aeabbc;
      }
    }
  }
`;

const Demo: React.FC<DemoProps> = (props: DemoProps) => {
  // const { contentText } = props;

  return (
    <DemoStyle>
      <label htmlFor=""> PDF preview</label>

      <a href="javascript(0);" className="Download">
        <span>Download</span>
        <span className="arrow">⬇️</span>
      </a>
    </DemoStyle>
  );
};

export default Demo;
