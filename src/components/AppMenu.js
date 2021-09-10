/** Copyright © 2013-2020 DataYes, All Rights Reserved. */

import React from "react";
import { NavLink } from "react-router-dom";
import { Menu } from "antd";

function IndexPage(props) {
  const { routes } = props;

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

      {routes.map((it) => (
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
