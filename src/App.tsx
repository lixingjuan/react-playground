import { Suspense } from "react";
import "./App.css";
import { Switch, Route } from "react-router";
import styled from "styled-components";

import Menu from "./components/Menu";
import routes from "./router";

const AppStyled = styled.div`
  display: flex;
  .content {
    flex: 2;
    padding: 50px;
  }
`;

function App() {
  return (
    <AppStyled className="App">
      <Menu routes={routes} />

      <div className="content">
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            {routes.map((it) => (
              <Route exact key={it.path} path={it.path} component={it.component} />
            ))}
          </Switch>
        </Suspense>
      </div>
    </AppStyled>
  );
}

export default App;
