import { BrowserRouter as Router, NavLink } from "react-router-dom";

const RouteConfigExample = ({ routes }: any) => {
  console.log({ routes });

  return (
    <Router>
      <ul>
        {routes.map((it) => (
          <li key={it.path}>
            <NavLink
              to={it.path}
              activeStyle={{
                fontWeight: "bold",
                color: "red",
              }}
            >
              {it.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </Router>
  );
};

export default RouteConfigExample;
