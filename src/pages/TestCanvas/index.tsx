import { List, Card } from "antd";
import usePersistFn from "./components/no-name";

// import DemoTwo from "./components/useToggle";
import { HeartTwoTone } from "@ant-design/icons";

const data = [
  {
    title: "usePersistFn",
    CompElement: usePersistFn,
  },
];

export default function Demo() {
  return (
    <div>
      <h2>测试canvas</h2>

      <hr />
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
