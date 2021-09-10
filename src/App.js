import "./App.css";
import FancyInput from "./components/FancyInput";
import TestTabs from "./components/TestTabs";
import TestDateRange from "./components/TestDateRange";
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
      <TestDateRange />
    </div>
  );
}

export default App;
