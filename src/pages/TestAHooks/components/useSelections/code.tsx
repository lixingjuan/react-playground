/* eslint-disable no-shadow */
import { useState, useMemo } from "react";

export default function useSelections<T>(
  items: T[],
  defaultSelected: T[] = []
) {
  /* 初始化时候被选中的元素 */
  const [selected, setSelected] = useState<T[]>(defaultSelected);

  /* 被选中的元素进行去重 */
  const selectedSet = useMemo(() => new Set<T>(selected), [selected]);

  /* 单选操作 */
  const singleActions = useMemo(() => {
    /* 函数，用于判断当前item的选中状态 */
    const isSelected = (item: T) => selectedSet.has(item);

    const select = (item: T) => {
      selectedSet.add(item);
      return setSelected(Array.from(selectedSet));
    };

    const unSelect = (item: T) => {
      selectedSet.delete(item);
      return setSelected(Array.from(selectedSet));
    };

    const toggle = (item: T) => {
      if (isSelected(item)) {
        unSelect(item);
      } else {
        select(item);
      }
    };

    return { isSelected, select, unSelect, toggle };
  }, [selectedSet]);

  /* 全选操作 */
  const allActions = useMemo(() => {
    /* 选中全部=> 遍历list, 将其加入set */
    const selectAll = () => {
      items.forEach((o) => {
        selectedSet.add(o);
      });
      setSelected(Array.from(selectedSet));
    };

    /* 选中全部=> 遍历list, 将其从set移除 */
    const unSelectAll = () => {
      items.forEach((o) => {
        selectedSet.delete(o);
      });
      setSelected(Array.from(selectedSet));
    };

    /* 没有选中的元素，当前list的所有元素都不在 set 中 */
    const noneSelected = items.every((o) => !selectedSet.has(o));

    /* 所有都已经选中，当前list的所有元素都在 set 中 */
    const allSelected = items.every((o) => selectedSet.has(o)) && !noneSelected;

    /* 部分选中 */
    const partiallySelected = !noneSelected && !allSelected;

    /* 切换选中状态 */
    const toggleAll = () => (allSelected ? unSelectAll() : selectAll());

    return {
      selectAll,
      unSelectAll,
      noneSelected,
      allSelected,
      partiallySelected,
      toggleAll,
    };
  }, [selectedSet, items]);

  return {
    selected,
    setSelected,
    ...singleActions,
    ...allActions,
  } as const;
}
