import { useToggle, useUnmount } from "ahooks";
import { message } from "antd";

const MyComponent = () => {
  useUnmount(() => {
    message.info("unmount");
  });

  return <div>Hello World</div>;
};

export default function Demo() {
  const [state, { toggle }] = useToggle(true);

  return (
    <>
      <button type="button" onClick={() => toggle()}>
        {state ? "unmount" : "mount"}
      </button>
      {state && <MyComponent />}
    </>
  );
}
