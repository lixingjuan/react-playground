import React from "react";
// import { useToggle } from "ahooks";
import useToggle from "./code";

export default function TestAHooksToggle() {
  const [state, { toggle }] = useToggle("left");

  return (
    <div>
      <p>Current Boolean: {String(state)}</p>
      <p>
        <button onClick={() => toggle()}>Toggle</button>
      </p>
    </div>
  );
}
