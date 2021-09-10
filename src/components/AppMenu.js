/** Copyright © 2013-2020 DataYes, All Rights Reserved. */

import React from "react";
import { NavLink } from "react-router-dom";
import { Menu } from "antd";

const listArr = [
  {
    path: "/TestFancyInput",
    desc: "测试时间范围组件",
  },
  {
    path: "/FancyInput",
    desc: "测试父组件调用子组件的方法",
  },
  {
    path: "/TestTabs",
    desc: "测试antd的tab",
  },
];

function IndexPage() {
  return (
    <Menu
      style={{ width: 256, height: "100vh" }}
      // defaultOpenKeys={["sub1"]}
      defaultSelectedKeys={["home"]}
      mode={"inline"}
    >
      <Menu.Item key="home">
        <NavLink to={"/"}>Home</NavLink>
      </Menu.Item>

      {listArr.map((it) => (
        <Menu.Item key={it.desc}>
          <NavLink to={it.path} activeClassName="hurray">
            {it.desc}
          </NavLink>
        </Menu.Item>
      ))}
    </Menu>
  );
}

export default IndexPage;
