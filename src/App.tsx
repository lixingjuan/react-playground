import "./App.css";
import { Row, Col } from "antd";
import { Switch, Route } from "react-router";

import AppMenu from "./components/Menu";
import NewMenu from "./components/NewMenu";
import routes from "./router";

function App() {
  return (
    <Row className="App">
      <Col span={2}>
        {/* <AppMenu routes={routes} /> */}
        <NewMenu />
      </Col>

      <Col span={20} push={2}>
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
