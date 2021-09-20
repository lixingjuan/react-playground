import { List, Card } from "antd";
import useCreation from "./components/useCreation";
import useDebounce from "./components/useDebounce";
import useRequest from "./components/useRequest";
import useDrag from "./components/useDrag";
import useToggle from "./components/useToggle";
import useSelections from "./components/useSelections";
import useCount from "./components/useCount";
import useCountDown from "./components/useCountDown";
// import DemoTwo from "./components/useToggle";
import { HeartTwoTone } from "@ant-design/icons";

const data = [
  {
    title: "useCreation",
    CompElement: useCreation,
  },
  {
    title: "useDebounce",
    CompElement: useDebounce,
  },
  {
    title: "useRequest",
    CompElement: useRequest,
  },
  {
    title: "useDrag",
    CompElement: useDrag,
  },
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
      <h3>源码真的过于精致了！</h3>
      <div className="card-wrapper">
        {data.map(({ title, CompElement }) => (
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
        ))}
      </div>
    </div>
  );
}
