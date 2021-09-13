import FancyInput from "./Input";
import { useRef } from "react";

function TestFancyInput() {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <button onClick={handleClick}>调用组件的focus方法</button>
      <FancyInput ref={inputRef} />

      <code>'aaa'</code>
    </div>
  );
}

export default TestFancyInput;
