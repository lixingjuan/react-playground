import React from "react";
import Form from "./components/Form";
import Tree from "./components/Tree";

export default function index() {
  return (
    <div>
      <h1>Tree</h1>
      <Tree />

      <h1>Form</h1>
      <Form />
    </div>
  );
}
