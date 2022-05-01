import { NavLink } from "react-router-dom";
import { useMemo, useState } from "react";
import { Button, Menu } from "antd";
import { useHistory } from "react-router";
import styled from "styled-components";

import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";

const MenuStyle = styled.div`
  display: flex;
  max-width: 150px;
  flex-direction: column;
`;

function MenuComp(props: any) {
  const { routes } = props;

  const [collapsed, setCollapsed] = useState(false);

  const menuProps = useMemo(
    () => ({
      items: routes.map((it: any) => ({
        ...it,
        key: it.path,
        label: <NavLink to={it.path}>{it.name}</NavLink>,
        children: it.routes
          ? (it.routes || []).map((inner: any) => ({
              ...inner,
              key: inner.path,
            label: <NavLink to={`${it.path}${inner.path}`}>{inner.name}</NavLink>,
            }))
          : undefined,
      })),
      defaultSelectedKeys: [routes?.[0]?.desc],
    }),
    [routes]
  );

  return (
    <MenuStyle>
      <Button type="primary" onClick={() => setCollapsed((pre) => !pre)}>
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>
      <Menu
        {...menuProps}
        mode="inline"
        inlineCollapsed={collapsed}
        onSelect={(val) => {
          console.log({ val });
        }}
      />
    </MenuStyle>
  );
}

export default MenuComp;
