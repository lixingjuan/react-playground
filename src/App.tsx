// import React, { Suspense } from "react";
// import "./App.css";
// import { Switch, Route } from "react-router";
// import styled from "styled-components";

// import AppMenu from "./components/Menu";
// // import NewMenu from "./components/NewMenu";
// import routes from "./router";

// const AppStyled = styled.div`
//   display: flex;
//   .content {
//     flex: 2;
//     padding: 50px;
//   }
// `;

// function App() {
//   return (
//     <AppStyled className="App">

//       <AppMenu routes={routes} />

//       <div className="content">
//         <Suspense fallback={<div>Loading...</div>}>
//           <Switch>
//             {routes.map((it) => (
//               <Route
//                 exact
//                 key={it.path}
//                 path={it.path}
//                 component={it.component}
//               />
//             ))}
//           </Switch>
//         </Suspense>
//       </div>
//     </AppStyled>
//   );
// }

// export default App;

import React from "react";
import { useBoolean } from "ahooks";
import { Button, Modal } from "antd";

const Demo = () => {
  const [visible, { setFalse, setTrue }] = useBoolean(false);

  return (
    <div>
      <Button onClick={setTrue}>Open</Button>
      <Modal visible={visible} onCancel={setFalse}>
        hello
      </Modal>
    </div>
  );
};

export default Demo;
