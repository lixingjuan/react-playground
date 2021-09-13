import { List, Card } from "antd";
import DemoOne from "./DemoOne";
import DemoTwo from "./DemoTwo";

const data = [
  {
    title: "以下组件会在5秒后显示， hello world!",
    CompElement: DemoOne,
  },
  {
    title: "以下组件会在5秒后显示， Request Error!",
    CompElement: DemoTwo,
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
        <List.Item>
          <Card title={title}>
            <CompElement />
          </Card>
        </List.Item>
      )}
    />
  );
}
