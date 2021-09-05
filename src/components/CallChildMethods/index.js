import { useRef } from "react";
import FancyInput from "./components/FancyInput";

function CallChildMethods() {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.focus();
  };

  return (
    <div className="CallChildMethods">
      <button onClick={handleClick}>调用组件的focus方法</button>
      <FancyInput ref={inputRef} />
    </div>
  );
}

export default CallChildMethods;
