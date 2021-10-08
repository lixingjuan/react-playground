import React, { useRef } from "react";
import { Button } from "antd";

export default function NoName() {
  const CanvasRef = useRef(null);

  const handleDraw = () => {
    const drawing = document.getElementById("drawing") as
      | HTMLElement
      | HTMLCanvasElement
      | null;

    if (drawing && "getContext" in drawing) {
      const context = drawing.getContext("2d");
      context!.fillStyle = "rgba(0,0,255,0.5)";
      context?.fillRect(10, 10, 50, 50);
    }
  };

  const handleClear = () => {
    // const context = CanvasRef.current.
  };

  const handleAppend = () => {
    const drawing = document.getElementById("drawing") as
      | HTMLElement
      | HTMLCanvasElement
      | null;

    if (drawing && "getContext" in drawing) {
      const imageUrl = drawing.toDataURL("image/png");
      const image = document.createElement("img");
      image.src = imageUrl;
      document.body.appendChild(image);
    }
  };

  return (
    <div>
      <Button block onClick={handleDraw}>
        (10, 10)开始(50,50)结束 画一个紫色 rect
      </Button>
      <Button block onClick={handleClear}>
        擦掉(30, 30)开始(30,30)结束
      </Button>
      <Button block onClick={handleAppend}>
        把这个紫色 rect, append 到body 的clildList
      </Button>
      <canvas id="drawing" width="200" height="200" ref={CanvasRef}>
        如果浏览器不支持canvas, 则会展示此段文本
      </canvas>
    </div>
  );
}
