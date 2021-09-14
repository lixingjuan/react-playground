import useSWR from "swr";

/* @ts-ignore-next-line */
const fetcher = (...args: any): any => {
  return new Promise((resove, reject) => {
    setTimeout(() => {
      resove({
        name: Number(Math.random() * 100).toFixed(0),
      });
    }, 4000);
  });
};

export default function DemoRequestReQuery() {
  const { data, error } = useSWR("/api/user/2", fetcher, {
    refreshInterval: 5000,
  });

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  // 渲染数据
  return <div>DemoRequestReQuery, hello {data.name}!</div>;
}
