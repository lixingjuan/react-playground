import React from "react";

type GreetingProps = {
  name: string;
};

/* : React.FC<GreetingProps> */
export const Greeting = ({ name }: GreetingProps) => {
  // name is string!
  return <h1>Hello {name}</h1>;
};

// use it in the app
const App = () => (
  <>
    <Greeting name="Stefan">
      <span>{"I can set this element but it doesn't do anything"}</span>
    </Greeting>
  </>
);
