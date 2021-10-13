/**
 * @desc 即输出一个引用地址稳定的防抖函数
 */
import { useCallback, useMemo, useRef } from "react";
import debounce from "lodash/debounce";
// import { useRef } from "react";
import { useUnmount } from "ahooks";
import { DebouncedFunc } from "lodash";

type Fn = (...args: any) => any;

// TODO 此处返回类型怎么写
export function useDebounceFn<T extends Fn>(fn: T, options: any) {
  const fnRef = useRef<T>(fn);
  fnRef.current = fn;

  const wait = options?.wait ?? 1000;

  const debounced = useMemo(
    () =>
      debounce<T>(
        ((...args: any[]) => fnRef.current(...args)) as T,
        wait,
        options
      ),
    []
  );

  console.log({ debounced });

  useUnmount(() => {
    debounced.cancel();
  });

  return {
    run: debounced,
    cancel: debounced.cancel,
    flush: debounced.flush,
  };
}
