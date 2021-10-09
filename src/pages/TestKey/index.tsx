import React, { useState } from "react";
import { Button, Tag, Card, Row } from "antd";
/* @ts-ignore */
import { nanoid } from "nanoid";

const arr = () => [
  { key: 1, id: "first line" },
  { key: 1, id: "second line" },
];

let todoCounter = 1;

export default function Index() {
  const [tempArr, setTempArr] = useState<{ key: number; id: string }[]>(arr());

  const addItem = () => {
    const id = +new Date();
    setTempArr((pre) => [
      {
        key: 1,
        id: `${id} line`,
      },
      ...pre,
    ]);
  };

  const addItemNanoid = () => {
    // const id = +new Date();
    setTempArr((pre) => [
      {
        key: 1,
        id: `${nanoid()}`,
      },
      ...pre,
    ]);
  };

  return (
    <Row>
      <Button onClick={addItem}>Add Item</Button>

      <Card
        title={
          <h2>
            use index
            <Tag>Bad</Tag>
          </h2>
        }
      >
        <ul>
          {tempArr.map((it) => (
            <li key={it.key}>
              {it.id}
              <input />
            </li>
          ))}
        </ul>
      </Card>

      <Card>
        <h2>use id</h2>
        <ul>
          {tempArr.map((it) => (
            <li key={it.id}>
              {it.id}
              <input />
            </li>
          ))}
        </ul>
      </Card>

      <Card title={<h2>use global id ++ ??</h2>}>
        <ul>
          {tempArr.map((it) => (
            <li key={todoCounter++}>
              {it.id}
              <input />
            </li>
          ))}
        </ul>
      </Card>

      <Card
        title={
          <h2>
            nanoid
            <Tag color="orange"> much better</Tag>
            <Button onClick={addItemNanoid}>Add Item</Button>
          </h2>
        }
      >
        <ul>
          {tempArr.map((it) => (
            <li key={todoCounter++}>
              {it.id}
              <input />
            </li>
          ))}
        </ul>
      </Card>
    </Row>
  );
}
