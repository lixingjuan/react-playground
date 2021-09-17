import { useRequest } from "ahooks";
import Mock from "mockjs";
import React from "react";

function getUserId(): Promise<number> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(1011);
    }, 1000);
  });
}

function getUsername(id: number): Promise<string> {
  console.log("user id:", id);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Mock.mock("@name"));
    }, 1000);
  });
}

export default function TestSerial() {
  const userIdRequest = useRequest(getUserId) as any;

  const usernameRequest = useRequest(() => getUsername(userIdRequest.data), {
    ready: !!userIdRequest.data,
  });

  return (
    <div>
      <h2>串行请求，依赖请求</h2>
      <p>UserId: {userIdRequest.loading ? "loading" : userIdRequest.data}</p>
      <p>
        Username: {usernameRequest.loading ? "loading" : usernameRequest.data}
      </p>
    </div>
  );
}
