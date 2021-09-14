import { List, Card } from "antd";
import useToggle from "./components/useToggle";
import useSelections from "./components/useSelections";
import useCount from "./components/useCount";
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
  {
    title: "useCount",
    CompElement: useCount,
  },
  {
    title: "useSelections",
    CompElement: useSelections,
  },
];

export default function Demo() {
  return (
    <div>
      <h2>ahooks源码学习</h2>
      <span>源码真的过于精致了！</span>

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
    </div>
  );
}
