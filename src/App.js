import "./App.css";
import FancyInput from "./components/FancyInput";
import { useRef } from "react";

function App() {
  const inputRef = useRef(null);

  return (
    <div className="App">
      <button onClick={() => inputRef.current.focus()}>
        调用组件的focus方法
      </button>
      <FancyInput ref={inputRef} />
    </div>
  );
}

export default App;
