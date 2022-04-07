import { useState } from "react";
import { ColorContext } from "./context";
import Son from "./Son";
import Son2 from "./Son2";

const useOperation = () => {
  const [colors, setColors] = useState<number[]>([]);

  const addColor = () => setColors((pre: any) => [...pre, Math.random().toFixed(2)]);

  return {
    colors,
    setColors,
    addColor,
  };
};

const Demo = () => {
  const [colors, setColors] = useState([]);

  return (
    <ColorContext.Provider value={{ colors, setColors }}>
      <Son />
      <Son2 />
    </ColorContext.Provider>
  );
};

export default Demo;
