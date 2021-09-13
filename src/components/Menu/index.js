import React from "react";
import { NavLink } from "react-router-dom";
import { Menu } from "antd";
import { useHistory } from "react-router";
function IndexPage(props) {
  const { routes } = props;
  const {
    location: { pathname },
  } = useHistory();

  const defaultSelectedKeys =
    routes.find((it) => it.path === pathname).desc || "Home";

  return (
    <Menu
      mode={"inline"}
      style={{ width: 256, height: "100vh" }}
      defaultSelectedKeys={defaultSelectedKeys}
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
