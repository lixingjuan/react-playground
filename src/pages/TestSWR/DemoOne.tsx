import useSWR from "swr";
/* @ts-ignore-next-line */
const fetcher = (...args: any): any => {
  console.log({ args });
  return new Promise((resove, reject) => {
    setTimeout(() => {
      resove({
        name: "hello world!",
      });
    }, 5000);
  });
};

function Profile() {
  const { data, error } = useSWR("/api/user/123", fetcher);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  // 渲染数据
  return <div>hello {data.name}!</div>;
}

export default Profile;
