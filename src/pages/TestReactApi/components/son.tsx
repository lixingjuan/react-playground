import React, { useState, useEffect } from "react";

interface DemoProps {
  name: string;
}

export default function Demo(props: DemoProps) {
  const { name } = props;
  const [sonName] = useState(name);

  useEffect(() => {
    console.log("name地址变化");
  }, [name]);

  return (
    <ol>
      <li>父组件传过来的name{name}</li>
      <li>我的name{sonName}</li>
    </ol>
  );
}
