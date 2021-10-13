import React, { useState } from "react";
// import { useDebounce } from "ahooks";
import useDebounce from "./code";

export default function Demo() {
  const [value, setValue] = useState<string>("");

  // 被防抖过的值
  const debouncedValue = useDebounce<string>(value, {
    wait: 1000,
    leading: true,
  });

  return (
    <div>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Typed value"
        style={{ width: 280 }}
      />
      <p style={{ marginTop: 16 }}>DebouncedValue: {debouncedValue}</p>
    </div>
  );
}
