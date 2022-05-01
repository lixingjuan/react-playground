import routes from "./router";
import { Route, NavLink } from "react-router-dom";
import styled from "styled-components";
import "./App.css";

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
      {routes.map(({ path, name }) => (
        <li>
          <NavLink key={path} to={path} activeClassName="active-nav-link" className="nav-link">
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

    {routes.map(({ path, component }) => (
      <Route key={path} path={path} component={component} />
    ))}
  </StyleApp>
);

export default App;
