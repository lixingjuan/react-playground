import { NavLink } from "react-router-dom";
import { Button, Menu } from "antd";
import { useHistory } from "react-router";
import { useBoolean } from "ahooks";
import styled from "styled-components";

const MenuStyle = styled.div`
  display: flex;
  flex-direction: column;
`;

function MenuComp(props) {
  const { routes } = props;

  const [collapsed, { toggle: setCollapsed }] = useBoolean(false);
  const {
    location: { pathname },
  } = useHistory();

  const defaultSelectedKeys =
    routes.find((it) => it.path === pathname)?.desc || "Home";

  return (
    <MenuStyle>
      <Button onClick={setCollapsed}>collapsed</Button>
      collapsed{`${collapsed}`}
      <Menu
        mode={"inline"}
        style={{ height: "100vh" }}
        defaultSelectedKeys={defaultSelectedKeys}
        inlineCollapsed={collapsed}
      >
        {routes.map((it) => (
          <Menu.Item key={it.desc}>
            <NavLink to={it.path} activeClassName="hurray">
              {it.desc}
            </NavLink>
          </Menu.Item>
        ))}
      </Menu>
    </MenuStyle>
  );
}

export default MenuComp;
