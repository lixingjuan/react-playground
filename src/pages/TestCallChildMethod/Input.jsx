import { forwardRef, useImperativeHandle, useRef } from "react";

function FancyInput(props, ref) {
  const inputRef = useRef();
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    },
  }));
  return <input ref={inputRef} />;
}

export default forwardRef(FancyInput);
