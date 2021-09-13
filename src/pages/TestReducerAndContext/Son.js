/** Copyright © 2013-2020 DataYes, All Rights Reserved. */

import React, { useContext } from "react";
import { Button, Tag, List } from "antd";
import { IndexContext } from "./hook";
import { SmileTwoTone } from "@ant-design/icons";

/**
 * @desc 生成一个随机颜色
 */
const generateRandomColor = () => `#${Math.ceil(Math.random() * 10 ** 6)}`;

function Son() {
  const { state, dispatch } = useContext(IndexContext);
  const { likeColors } = state;

  const handleAddColors = () => {
    dispatch({
      type: "addColors",
      payload: generateRandomColor(),
    });
  };

  return (
    <div>
      <Button onClick={handleAddColors}>
        在子组件向颜色数组添加一个随机颜色
      </Button>

      <List>
        <List.Item key="新的颜色列表">
          <Tag color="cyan">颜色列表</Tag>
        </List.Item>

        {likeColors.map((it) => (
          <List.Item key={it}>
            <div>
              <Tag color={it}>{it}</Tag>
              <SmileTwoTone twoToneColor={it} style={{ fontSize: "30px" }} />
            </div>
          </List.Item>
        ))}
      </List>
    </div>
  );
}

export default Son;
