import React from "react"; // ES6
import { ResizableBox } from "react-resizable";

export default class Example extends React.Component {
  render() {
    return (
      <ResizableBox
        width={200}
        height={200}
        minConstraints={[100, 100]}
        maxConstraints={[300, 300]}
        style={{ border: "red solid 1px" }}
        handle={(handleAxis, ref) => (
          <span className={`foo handle-${handleAxis}`}>handle</span>
        )}
      >
        <span>ResizableBox</span>
      </ResizableBox>
    );
  }
}
