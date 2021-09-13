import React from "react";
import { useToggle } from "ahooks";

export default function TestAHooksToggle() {
  const [state, { toggle }] = useToggle();

  return (
    <div>
      <p>Current Boolean: {String(state)}</p>
      <p>
        <button onClick={() => toggle()}>Toggle</button>
      </p>
    </div>
  );
}
