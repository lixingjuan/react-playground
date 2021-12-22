import FancyInput from "./Input";
import { useEffect, useRef } from "react";

function TestFancyInput() {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    inputRef?.current?.focus();
  };

  useEffect(() => {
    console.log("father");
  }, []);

  return (
    <div>
      <button onClick={handleClick}>调用组件的focus方法</button>
      <FancyInput ref={inputRef} />

      <code>'aaa'</code>
    </div>
  );
}

export default TestFancyInput;
