import "./App.css";
import { Row, Col } from "antd";
import { Switch, Route } from "react-router";
import routes from "./router";

import AppMenu from "./components/Menu";

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
