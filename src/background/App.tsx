import React, { useEffect } from "react";
import demo from "./utils";

const Background = () => {
  useEffect(() => {
    demo();
  }, []);

  return <div>hello</div>;
};

export default Background;
