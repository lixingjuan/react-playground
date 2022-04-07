import styled from "styled-components";

const Title = styled.div`
  display: grid;
  grid-gap: 6px;
  grid-template-columns: 4px auto;
  align-items: center;
  i {
    height: 14px;
    width: 100%;
    display: inline-block;
    border-radius: 4px;
    background-color: #4067cf;
  }
  span {
    font-weight: 600;
    font-size: 16px;
    color: #333333;
  }
`;

const Demo = ({ title = "" }) => (
  <Title>
    <i></i>
    <span>{title}</span>
  </Title>
);

export default Demo;
