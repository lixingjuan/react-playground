import { List, Card } from "antd";

import { PandaIcon, HeartIcon } from "./Icons";
import DemoRequestSuccess from "./DemoRequestSuccess";
import DemoRequestError from "./DemoRequestError";
import DemoRequestReQuery from "./DemoRequestReQuery";

const dataSource = [
  {
    title: "以下组件会在5秒后显示， hello world!",
    CompElement: DemoRequestSuccess,
  },
  {
    title: "以下组件会在5秒后显示， failed to load",
    CompElement: DemoRequestError,
  },
  {
    title: "每5秒重新发起请求, hello 后面的数字会改变",
    CompElement: DemoRequestReQuery,
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
      dataSource={dataSource}
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
