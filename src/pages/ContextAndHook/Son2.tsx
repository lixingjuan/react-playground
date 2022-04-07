import React from "react";
// import useColorContext from "./hooks";

import { useContext } from "react";
import { ColorContext } from "./context";

const useColorContext = () => {
  const context = useContext(ColorContext);
  console.log({ context });
  const { colors, setColors } = context;

  const addColor = () => setColors((pre: any) => [...pre, Math.random().toFixed(2)]);

  return {
    colors,
    addColor,
    setColors,
  };
};

const Demo = () => {
  const { colors: contextColors } = useContext(ColorContext);

  const { colors: hookColors } = useColorContext();

  return (
    <h2>
      <div>Son2 context: {contextColors.join(",")}</div>
      <div>Son2 hook: {hookColors.join(",")}</div>
    </h2>
  );
};

export default Demo;
