import { useState, useEffect } from "react";
import { useDebounceFn } from "ahooks";
/**
 * @des 其实是吧value更新过程给防抖了
 */
export default function A<T>(value: T, options?: any) {
  const [debounced, setDebounced] = useState(value);

  const { run } = useDebounceFn(() => setDebounced(value), {
    wait: 1000,
  });

  useEffect(() => {
    run();
  }, [value]);

  return debounced;
}
