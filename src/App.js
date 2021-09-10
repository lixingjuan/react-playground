import "./App.css";
import TestFancyInput from "./components/TestFancyInput";
import TestDateRange from "./components/TestDateRange";
import Home from "./pages/Home";
import { Switch, Route } from "react-router";
import AppMenu from "./components/AppMenu";
import { Row, Col } from "antd";

function App() {
  return (
    <Row className="App">
      <Col span={4}>
        <AppMenu />
      </Col>

      <Col span={20}>
        <Switch>
          <Route path="/" component={Home} />
          <Route exact path="/TestFancyInput" component={TestFancyInput} />
          <Route path="/TestDateRange" component={TestDateRange} />
          <Route path="/TestDateRange" component={TestDateRange} />
        </Switch>
      </Col>
    </Row>
  );
}

export default App;
