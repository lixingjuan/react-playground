import React, { useState, useEffect } from "react";
import { Button } from "antd";
import Son from "./components/son";

export default function Demo() {
  const [name, setName] = useState("lixingjuan");

  useEffect(() => {
    setTimeout(() => {
      setName("你好，父组件渲染完成后5秒，在父组件更新了name的值");
    }, 5000);
  }, []);

  return (
    <div>
      <h1>
        子组件利用prop作为变量初始值，测试如果传给自组件的值变了，自组件的变量是否会更新
      </h1>
      <div>5秒后name值更新</div>
      <Button onClick={() => setName((pre) => pre + "一")}>
        在原本的name上加 一
      </Button>
      <hr />
      <Son name={name}></Son>
    </div>
  );
}
