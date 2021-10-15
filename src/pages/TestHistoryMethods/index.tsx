import { useEffect } from "react";
import { Button } from "antd";

const theMethods = [
  {
    name: "go",
    refresh: true,
  },
  {
    name: "back",
    refresh: true,
  },
  {
    name: "forward",
    refresh: true,
  },
  {
    name: "replaceState",
    refresh: true,
  },
  {
    name: "pushState",
    refresh: true,
  },
  {
    name: "popState",
    refresh: true,
  },
];

export default function Index() {
  const editLocationHash = () => {
    window.location.hash = `${window.location.hash}/${+new Date()}`;
  };

  useEffect(() => {
    console.log(window.location.hash);
    const listenHashChange = (event: Event) => {
      console.log({ event });
    };

    window.addEventListener("hashchange", listenHashChange);
    return () => {
      window.removeEventListener("hashchange", listenHashChange);
    };
  }, []);

  return (
    <div>
      <h1>Hello, guys! This page is to used test HTML5-API-history.</h1>

      <h2>点击下面的按钮会修改当前页面的hash, 并查看查看控制台的打印</h2>

      <Button onClick={editLocationHash}>Click Me</Button>
    </div>
  );
}
