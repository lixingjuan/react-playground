import React from "react";
// import useColorContext from "./hooks";

import { useContext } from "react";
import { ColorContext } from "./context";

const useColorContext = () => {
  const { colors, setColors } = useContext(ColorContext);

  const addColor = () => setColors((pre: any) => [...pre, Math.random().toFixed(2)]);

  return {
    colors,
    addColor,
    setColors,
  };
};

const Demo = () => {
  const { colors, addColor } = useColorContext();

  return (
    <div>
      <button onClick={addColor}>add</button>
      {colors.join(",")}
    </div>
  );
};

export default Demo;
