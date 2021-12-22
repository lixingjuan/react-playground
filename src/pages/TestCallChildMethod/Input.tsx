import { forwardRef, useImperativeHandle, useRef, useEffect } from "react";

const FancyInput = (props: any, ref: any) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    console.log("child");
  }, []);
  const toFocusInput = () => {
    console.log("a");
    inputRef?.current?.focus();
  };

  useImperativeHandle(ref, () => ({
    focus: toFocusInput,
  }));

  return <input ref={inputRef} />;
};

export default forwardRef(FancyInput);
