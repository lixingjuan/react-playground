import { useContext } from "react";
import { ColorContext } from "./context";

const useColorContext = () => useContext(ColorContext);

export default useColorContext;
