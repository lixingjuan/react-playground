import "./index.css";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import "codemirror/lib/codemirror.css";
import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";

import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
