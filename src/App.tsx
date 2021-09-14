import "./App.css";
import { Row, Col } from "antd";
import { Switch, Route } from "react-router";

import AppMenu from "./components/Menu";
import NewMenu from "./components/NewMenu";
import routes from "./router";

function App() {
  return (
    <Row className="App">
      <NewMenu />
      {/* <Col span={2}>
        <AppMenu routes={routes} />
      </Col> */}
      <Row className="container">
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
      </Row>
    </Row>
  );
}

export default App;
