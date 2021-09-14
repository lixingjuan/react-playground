import useSWR from "swr";
/* @ts-ignore-next-line */
const fetcher = (...args: any): any => {
  return new Promise((resove, reject) => {
    setTimeout(() => {
      reject(Error("22"));
    }, 5000);
  });
};

export default function Profile() {
  const { data, error } = useSWR("/api/user/1", fetcher);
  console.log({ data });
  console.log({ error });

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  // 渲染数据
  return <div>DemoRequestError, hello {data.name}!</div>;
}
