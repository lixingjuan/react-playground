import "./App.css";
import FancyInput from "./components/FancyInput";
import TestTabs from "./components/TestTabs";
import { useRef } from "react";

function App() {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.focus();
  };

  return (
    <div className="App">
      <button onClick={handleClick}>调用组件的focus方法</button>
      <FancyInput ref={inputRef} />
      <TestTabs />
    </div>
  );
}

export default App;
