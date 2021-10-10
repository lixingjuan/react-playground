import React from "react";
import styled from "styled-components";

interface DemoProps {
  contentText: string;
}

const DemoStyle = styled.div``;

const Demo: React.FC<DemoProps> = (props: DemoProps) => {
  const { contentText } = props;

  return (
    <DemoStyle>
      <div>
        建议：完全适合营销工作，一定要尽你最大的诚意与努力去吸引他加入团队，只要他愿意来，你不想成功都难。
      </div>
    </DemoStyle>
  );
};

export default Demo;
