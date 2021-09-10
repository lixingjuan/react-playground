/** Copyright © 2013-2020 DataYes, All Rights Reserved. */

import React, { useState } from "react";

import "./index.css";

function IndexPage() {
  const [value, setValue] = useState();

  return (
    <div>
      <ul className="list">
        <li className="a">第一个</li>
        <li className="b">第二个</li>
        <li className="c">第三个</li>
      </ul>
    </div>
  );
}

export default IndexPage;
