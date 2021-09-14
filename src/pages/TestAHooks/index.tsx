import { List, Card } from "antd";
import useToggle from "./components/useToggle";
import useCountDown from "./components/useCountDown";
// import DemoTwo from "./components/useToggle";
import { HeartTwoTone } from "@ant-design/icons";

const data = [
  {
    title: "useToggle",
    CompElement: useToggle,
  },
  {
    title: "useCountDown",
    CompElement: useCountDown,
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
      style={{ marginTop: "50px" }}
      dataSource={data}
      renderItem={({ title, CompElement }) => (
        <List.Item>
          <Card
            style={{
              borderColor: "#7fcbfa",
            }}
            title={
              <>
                <HeartTwoTone twoToneColor="#eb2f96" />
                <span>{title}</span>
              </>
            }
          >
            <CompElement />
          </Card>
        </List.Item>
      )}
    />
  );
}