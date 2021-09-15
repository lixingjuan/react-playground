import React, { useState } from "react";
import { useDrop } from "ahooks";
import useDrag from "./code";

function BoxDiv(props: any) {
  return (
    <div
      {...props}
      style={{
        border: "1px solid #e8e8e8",
        padding: 16,
        width: 80,
        textAlign: "center",
        marginRight: 16,
      }}
    >
      {props.children}
    </div>
  );
}

export default function UseDragPage() {
  const [dragging, setDragging] = useState<string | null>(null);

  const getDragProps = useDrag({
    onDragStart: (data) => {
      debugger;
      setDragging(data);
    },
    onDragEnd: () => {
      setDragging(null);
    },
  });

  const [props, { isHovering }] = useDrop({
    onText: (text, e) => {
      console.log(e);
      alert(`'text: ${text}' dropped`);
    },
    onFiles: (files, e) => {
      console.log(e, files);
      alert(`${files.length} file dropped`);
    },
    onUri: (uri, e) => {
      console.log(e);
      alert(`uri: ${uri} dropped`);
    },
    onDom: (content: string, e) => {
      alert(`custom: ${content} dropped`);
    },
  });

  return (
    <div>
      <div
        style={{
          border: "1px dashed #e8e8e8",
          padding: 16,
          textAlign: "center",
        }}
        {...props}
        draggable={true}
        onDragStart={(e) => {
          console.log(e);
        }}
      >
        {isHovering ? "release here" : "drop here"}
      </div>

      <div style={{ display: "flex", marginTop: 8 }}>
        {Array.from(Array(5)).map((e, i) => (
          <BoxDiv {...getDragProps(`box${i}`)}>box{i}</BoxDiv>
        ))}
      </div>

      <div style={{ marginTop: 8 }}>
        {dragging ? <>dragging {dragging}</> : "not dragging"}
      </div>
    </div>
  );
}
