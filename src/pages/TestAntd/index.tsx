import { Route } from "react-router";
import { NavLink } from "react-router-dom";
import Form from "./components/Form";
import Tree from "./components/Tree";

const ComponetMap: Record<"form" | "tree", any> = {
  form: {
    component: Form,
  },
  tree: {
    component: Tree,
  },
};

// const ComponetMap: Map<"form" | "tree", any> = new Map([
//   ["form", () => Form()],
//   ["tree", () => Tree()],
// ]);

const Topics = (props: any) => {
  const { match } = props;

  return (
    <div>
      <h2>Antd</h2>
      <ul>
        {Object.keys(ComponetMap).map((it) => (
          <li key={it}>
            <NavLink to={`${match.url}/${it}`} activeClassName="active-nav-link" className="nav-link">
              {it}
            </NavLink>
          </li>
        ))}
      </ul>

      <hr />

      {Object.entries(ComponetMap).map(([key, { component }]) => (
        <Route path={`${match.url}/${key}`} component={component} />
      ))}

      <Route exact path={match.url} render={() => <h3>Please select a topic.</h3>} />
    </div>
  );
};

export default Topics;
