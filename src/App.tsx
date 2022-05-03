import routes from "./router";
import { Route, NavLink, Switch } from "react-router-dom";
import styled from "styled-components";
import "./App.css";
import Home from "./pages/Home/index";
import TestAntd from "./pages/TestAntd";

const StyleApp = styled.div`
  ul#menu {
    background-color: #f7f7f7;
    margin: 0px;
    padding: 10px 20px;
    display: grid;
    grid-template-columns: repeat(10, auto);
  }

  hr {
    margin-top: 0;
  }
`;
const App = () => (
  <StyleApp>
    <ul id="menu">
      {routes.map(({ path, name, exact }) => (
        <li>
          <NavLink key={path} to={path} activeClassName="active-nav-link" className="nav-link" exact={exact}>
            {name}
          </NavLink>
        </li>
      ))}
    </ul>

    <hr
      style={{
        borderWidth: "2px",
      }}
    />

    <Switch>
      {routes.map(({ path, component, exact = false }) => (
        <Route key={path} path={path} component={component} exact={exact} />
      ))}
    </Switch>
  </StyleApp>
);

export default App;
