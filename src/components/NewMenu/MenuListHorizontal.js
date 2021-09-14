import React, { useState, useCallback, useRef, useEffect } from "react";
import { bgColorsBody, MenuListArr } from "./constants";
import "./MenuListHorizontal.css";

export default function MenuList() {
  const [activeIndex, setactiveIndex] = useState(0);
  const MenuRef = useRef(null);
  const MenuBorderRef = useRef(null);

  useEffect(() => {
    document.body.style.backgroundColor = bgColorsBody[activeIndex];
  }, [activeIndex]);

  /**
   * 菜单偏移
   */
  const offsetMenuBorder = useCallback((index) => {
    const menuBorder = MenuBorderRef.current;
    const activeElement = MenuRef.current.children[index];

    const offsetActiveItem = activeElement.getBoundingClientRect();

    const left =
      Math.floor(
        offsetActiveItem.left -
          MenuRef.current.offsetLeft -
          (menuBorder.offsetLeft - offsetActiveItem.height) / 2
      ) + "px";

    menuBorder.style.transform = `translate3d(${left}, 100px , 0) rotate(180deg)`;
    // menuBorder.style.transform = `translate3d(${left}, 0 , 0) rotate(90deg) translateY(50%)`;
  }, []);

  /**
   * item的click事件
   */
  const clickItem = (index) => {
    setactiveIndex(index);
    offsetMenuBorder && offsetMenuBorder(index);
  };

  return (
    <menu className="menu" ref={MenuRef}>
      {MenuListArr.map((it, index) => (
        <button
          key={it.color}
          onClick={() => clickItem(index)}
          style={{ "--bgColorItem": it.color }}
          className={`menu__item ${index === activeIndex ? "active" : ""}`}
        >
          {it.svg}
        </button>
      ))}
      <div className="menu__border" ref={MenuBorderRef}></div>
    </menu>
  );
}
