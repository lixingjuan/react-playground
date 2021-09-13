import { List, Card } from "antd";
import useToggle from "./components/useToggle";
// import DemoTwo from "./components/useToggle";

const data = [
  {
    title: "useToggle",
    CompElement: useToggle,
  },
  // {
  //   title: "useDebounceEffect",
  //   CompElement: DemoTwo,
  // },
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
