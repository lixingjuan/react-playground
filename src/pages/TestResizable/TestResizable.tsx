import React, { useState } from "react";
import { Resizable } from "react-resizable";

/* Resizable 需要自己根据回调赋值新的宽度 */
export default function Example() {
  const [width, setWidth] = useState(200);
  const [height, setHeight] = useState(200);

  const onResize = (event: any, { element, size, handle }: any) => {
    const { width: newWidth, height: newHeight } = size;
    setWidth(newWidth);
    setHeight(newHeight);
  };

  return (
    <Resizable
      height={height}
      width={width}
      /* @ts-ignore */
      onResize={onResize}
      /* @ts-ignore */
      style={{ border: "red solid 1px" }}
      /* @ts-ignore */
      handle={(handleAxis, ref) => (
        <span className={`foo handle-${handleAxis}`}>handle</span>
      )}
    >
      <div
        className="box"
        style={{
          width: width + "px",
          height: height + "px",
        }}
      >
        <span>Resizable</span>
      </div>
    </Resizable>
  );
}
// class Example extends React.Component {
//   state = {
//     width: 200,
//     height: 200,
//   };

//   onResize = (event, { element, size, handle }) => {
//     this.setState({ width: size.width, height: size.height });
//   };

//   render() {
//     return (
//       <Resizable
//         height={this.state.height}
//         width={this.state.width}
//         onResize={this.onResize}
//         style={{ border: "red solid 1px" }}
//         handle={(handleAxis, ref) => (
//           <span className={`foo handle-${handleAxis}`}>handle</span>
//         )}
//       >
//         <div
//           className="box"
//           style={{
//             width: this.state.width + "px",
//             height: this.state.height + "px",
//           }}
//         >
//           <span>Contents</span>
//         </div>
//       </Resizable>
//     );
//   }
// }
