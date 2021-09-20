import React, { useState, useRef, useMemo, useEffect } from "react";
import useCreation from "./code";

class Foo {
  constructor() {
    this.data = Math.random();
  }

  data: number;
}

export default function Demo() {
  const creationData = useCreation(() => new Foo(), []);
  const refData = useRef(new Foo());
  const memoData = useMemo(() => new Foo(), []);
  const [, setFlag] = useState({});

  useEffect(() => {
    console.log("creationData.data改变");
  }, [creationData.data]);

  useEffect(() => {
    console.log("refData.current.data改变");
  }, [refData.current.data]);

  useEffect(() => {
    console.log("memoData.data改变");
  }, [memoData.data]);

  return (
    <>
      <p>creationData{creationData.data}</p>
      <p>refData.data{refData.current.data}</p>
      <p>memoData.data{memoData.data}</p>
      <button
        type="button"
        onClick={() => {
          setFlag({});
        }}
      >
        Rerender
      </button>
    </>
  );
}
