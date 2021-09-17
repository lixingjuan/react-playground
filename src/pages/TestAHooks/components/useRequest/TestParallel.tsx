import { useRequest } from "ahooks";
import { message } from "antd";
import React from "react";

export function deleteUser(userId: string): Promise<{ success: boolean }> {
  console.log(userId);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true });
    }, 1000);
  });
}

export default function TestParallel() {
  const { run, fetches } = useRequest(deleteUser, {
    manual: true,
    fetchKey: (id) => id,
    onSuccess: (result, params) => {
      if (result.success) {
        message.success(`Disabled user ${params[0]}`);
      }
    },
  });

  const users = [
    { id: "1", username: "A" },
    { id: "2", username: "B" },
    { id: "3", username: "C" },
  ];

  const handleClickItem = (id: string) => {
    run(id);
  };

  return (
    <div>
      <h2>测试并行</h2>
      <div>You can click all buttons, each request has its own status.</div>
      <ul>
        {users.map((user) => (
          <li key={user.id} style={{ marginTop: 8 }}>
            <button
              type="button"
              onClick={() => {
                handleClickItem(user.id);
              }}
              disabled={fetches[user.id]?.loading}
            >
              {fetches[user.id]?.loading ? "loading" : `delete ${user.id}`}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
