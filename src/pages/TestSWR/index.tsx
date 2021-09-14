import { List, Card } from "antd";

import DemoRequestSuccess from "./DemoRequestSuccess";
import DemoRequestError from "./DemoRequestError";
import { PandaIcon, HeartIcon } from "./Icons";

const data = [
  {
    title: "以下组件会在5秒后显示， hello world!",
    CompElement: DemoRequestSuccess,
  },
  {
    title: "以下组件会在5秒后显示， Request Error!",
    CompElement: DemoRequestError,
  },
];

export default function Demo() {
  return (
    <List
      grid={{
        gutter: 16,
        xs: 1,
        sm: 2,
        md: 4,
        lg: 4,
        xl: 6,
        xxl: 3,
      }}
      dataSource={data}
      renderItem={({ title, CompElement }) => (
        <List.Item key={title}>
          <Card
            title={
              <span>
                <HeartIcon />
                {title}
              </span>
            }
          >
            <PandaIcon />
            <CompElement />
          </Card>
        </List.Item>
      )}
    />
  );
}
