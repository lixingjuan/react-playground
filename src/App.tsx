import "./App.css";
// import "./antd.css";
import { Row, Col } from "antd";
import { Switch, Route } from "react-router";

import AppMenu from "./components/Menu";
// import NewMenu from "./components/NewMenu";
import routes from "./router";

function App() {
  return (
    <Row className="App">
      <Col span={4}>
        <AppMenu routes={routes} />
      </Col>

      <Col span={20}>
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
      </Col>
    </Row>
  );
}

export default App;
