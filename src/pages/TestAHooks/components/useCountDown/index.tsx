import React from "react";
import { useCountDown } from "ahooks";

export default function AAA() {
  const [countdown, setTargetDate, formattedRes] = useCountDown({
    targetDate: "2021-12-31 24:00:00",
  });

  const { days, hours, minutes, seconds, milliseconds } = formattedRes;

  return (
    <div>
      <>
        <h2>倒计时(从组件加载到未来)1000秒的毫秒数</h2>
        <div>countdown: {countdown}</div>
      </>

      <>
        <h2>格式化的时间</h2>
        <ul>
          <li>days: {days}</li>
          <li>hours: {hours}</li>
          <li>minutes: {minutes}</li>
          <li>seconds: {seconds}</li>
          <li>milliseconds: {milliseconds}</li>
        </ul>
      </>

      <>
        <h2>手动控制计时器的状态, 设置倒计时5秒</h2>
        <button
          onClick={() => {
            setTargetDate(Date.now() + 5000);
          }}
          disabled={countdown !== 0}
        >
          {countdown === 0
            ? "Start Interval"
            : `Reset After ${Math.round(countdown / 1000)}s`}
        </button>
        <button
          onClick={() => {
            setTargetDate(undefined);
          }}
          style={{ marginLeft: 8 }}
        >
          stop
        </button>
      </>
    </div>
  );
}
