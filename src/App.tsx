import "./App.css";
import { Row, Col } from "antd";
import { Switch, Route } from "react-router";

import AppMenu from "./components/Menu";
import NewMenu from "./components/NewMenu";
import routes from "./router";

function App() {
  return (
    <div className="App">
      <div className="header-container">
        <NewMenu />
      </div>

      <div className="page-container">
        <Switch>
          {routes.map((it) => (
            <Route
              exact
              key={it.path}
              path={it.path}
              component={it.component}
            />
          ))}
        </Switch>
      </div>
    </div>
  );
}

export default App;
