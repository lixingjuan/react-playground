import React from "react";
import TestManual from "./TestManual";
import TestPollingInterval from "./TestPollingInterval";
import TestParallel from "./TestParallel";
import TestSerial from "./TestSerial";
import "./style.css";

export default function Index() {
  return (
    <div>
      <ol>
        <li>
          <TestManual />
        </li>
        <li>
          <TestPollingInterval />
        </li>
        <li>
          <TestParallel />
        </li>
        <li>
          <TestSerial />
        </li>
        {/* <li></li>
        <li></li>
        <li></li> */}
      </ol>
    </div>
  );
}
