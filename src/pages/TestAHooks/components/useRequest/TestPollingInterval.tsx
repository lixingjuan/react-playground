import Mock from "mockjs";
import { useRequest } from "ahooks";

function getUsername(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Mock.mock("@name"));
    }, 0);
  });
}

export default function TestPollingInterval() {
  const { data, loading, run, cancel } = useRequest(getUsername, {
    pollingInterval: 5000,
    pollingWhenHidden: false,
  });

  return (
    <>
      <h2>每5秒产生一个新名字</h2>
      <p>Username: {loading ? "loading" : data}</p>
      <button type="button" onClick={run}>
        start
      </button>
      <button type="button" onClick={cancel} style={{ marginLeft: 8 }}>
        stop
      </button>
    </>
  );
}
