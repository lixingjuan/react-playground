import React, { useState, useCallback, useRef } from "react";
import { message, Row } from "antd";
import { usePersistFn } from "ahooks";

// some expensive component with React.memo
const ExpensiveTree = React.memo<{ [key: string]: any }>(({ showCount }) => {
  const renderCountRef = useRef(0);
  renderCountRef.current += 1;

  return (
    <Row justify="space-between">
      <span>Render Count: {renderCountRef.current}</span>
      <button type="button" onClick={showCount}>
        showParentCount
      </button>
    </Row>
  );
});

export default function Demo() {
  const [count, setCount] = useState(0);

  const showCountPersistFn = usePersistFn(() => {
    message.info(`Parent count is ${count}`);
  });

  const showCountCommon = useCallback(() => {
    message.info(`Parent count is ${count}`);
  }, [count]);

  return (
    <>
      <h2>
        通过 usePersistFn，函数引用永远不会变化，示例中 showCountPersistFn
        是不会变化的，showCountCommon 在 count 变化时变化。
      </h2>

      <button
        type="button"
        onClick={() => {
          setCount((c) => c + 1);
        }}
      >
        Add Count
      </button>
      <p>
        You can click the button to see the number of sub-component renderings
      </p>
      <ol>
        <li style={{ marginTop: 32 }}>
          <h4>Component with persist function:</h4>
          <h4>sub-component will only render once</h4>
          {/* use persist function, ExpensiveTree component will only render once */}
          <ExpensiveTree showCount={showCountPersistFn} />
        </li>
        <li style={{ marginTop: 32 }}>
          <h4>没有使用 usePersistFn function 的 Component:</h4>
          <h4>sub-component will re-render on state change</h4>
          {/* without persist function, ExpensiveTree component will re-render on state change */}
          <ExpensiveTree showCount={showCountCommon} />
        </li>
      </ol>
    </>
  );
}
