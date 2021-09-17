import { useState } from "react";
import { useRequest } from "ahooks";
import { message, Row } from "antd";

function changeUsername(username: string): Promise<{ success: boolean }> {
  console.log(username);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true });
    }, 1000);
  });
}

export default function Demo() {
  const [state, setState] = useState("");
  const { loading, run } = useRequest(changeUsername, {
    manual: true,
    onSuccess: (result, params) => {
      if (result.success) {
        setState("");
        message.success(`The username was changed to "${params[0]}" !`);
      }
    },
  });

  return (
    <div>
      <h2>手动触发才会触发请求</h2>
      <Row>
        <input
          onChange={(e) => setState(e.target.value)}
          value={state}
          placeholder="Please enter username"
          style={{ width: 240, marginRight: 16 }}
        />
        <button disabled={loading} type="button" onClick={() => run(state)}>
          {loading ? "loading" : "Edit"}
        </button>
      </Row>
    </div>
  );
}
