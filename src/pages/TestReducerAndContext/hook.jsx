import { createContext } from "react";

export function reducer(state, action) {
  switch (action.type) {
    case "addColors":
      return { likeColors: [...state.likeColors, action.payload] };
    default:
      throw new Error();
  }
}

export const initContextValue = {
  likeColors: ["pink"],
};

export const IndexContext = createContext(initContextValue);
