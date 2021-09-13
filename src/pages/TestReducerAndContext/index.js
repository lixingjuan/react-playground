import React, { useReducer } from "react";

import SonComp from "./Son";

import { IndexContext, initContextValue, reducer } from "./hook";

function IndexPage() {
  /* 2. 将context的值作为reducer的初始值，如果不使用reducer, 则直接将该值赋给 IndexContext 的 value 即可  */
  const [state, dispatch] = useReducer(reducer, initContextValue);

  return (
    <IndexContext.Provider value={{ state, dispatch }}>
      <SonComp />
    </IndexContext.Provider>
  );
}

export default IndexPage;
