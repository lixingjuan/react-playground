import { useEffect } from "react";
/**
 * @desc
 */
export default function Demo() {
  useEffect(() => {
    console.log("do nothing");
    return () => {
      console.log("处理卸载要做的事情");
    };
  }, []);
}
