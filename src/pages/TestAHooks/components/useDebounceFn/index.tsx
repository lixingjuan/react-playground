import { useState } from "react";
import { useDebounceFn } from "./code";
// import { useDebounceFn } from "ahooks";
import debounce from "lodash/debounce";

export default function Demo() {
  const [value, setValue] = useState(0);

  // const run = debounce(() => {
  //   setValue((pre) => {
  //     console.log(pre + 1);
  //     return pre + 1;
  //   });
  // }, 1000);

  const { run } = useDebounceFn(
    () => {
      setValue(value + 1);
    },
    {
      wait: 500,
    }
  );

  return (
    <div>
      <p style={{ marginTop: 16 }}> Clicked count: {value} </p>
      <button type="button" onClick={run}>
        Click fast!
      </button>
    </div>
  );
}
