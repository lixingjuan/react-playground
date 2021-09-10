import "./App.css";
import { Row, Col } from "antd";
import { Switch, Route } from "react-router";
import routes from "./router";

import AppMenu from "./components/AppMenu";

function App() {
  return (
    <Row className="App">
      <Col span={4}>
        <AppMenu routes={routes} />
      </Col>

      <Col span={20}>
        <Switch>
          {routes.map((it) => (
            <Route path={it.path} component={it.component} key={it.desc} />
          ))}
        </Switch>
      </Col>
    </Row>
  );
}

export default App;
