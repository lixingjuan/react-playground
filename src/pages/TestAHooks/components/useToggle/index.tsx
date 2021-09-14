import React from "react";
import { Button } from "antd";
// import { useToggle } from "ahooks";
import useToggle from "./code";

export default function TestAHooksToggle() {
  const [state, { toggle, setLeft, setRight }] = useToggle("left", "right");

  return (
    <div>
      <div>Current Vlue: {String(state)}</div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gridColumnGap: "30px",
        }}
      >
        <Button type="dashed" onClick={() => toggle()}>
          Toggle
        </Button>
        <Button type="dashed" onClick={() => setLeft()}>
          setLeft
        </Button>
        <Button type="dashed" onClick={() => setRight()}>
          setRight
        </Button>
      </div>
    </div>
  );
}
