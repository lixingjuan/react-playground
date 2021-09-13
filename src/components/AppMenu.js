import React from "react";
import { NavLink } from "react-router-dom";
import { Menu } from "antd";

function IndexPage(props) {
  const { routes } = props;

  return (
    <Menu
      style={{ width: 256, height: "100vh" }}
      defaultSelectedKeys={["Home"]}
      mode={"inline"}
    >
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
