import { Table } from "antd";

const columns = [
  {
    title: "排名",
    dataIndex: "name",
    key: "name",
    width: 100,
    fixed: "left",
  },
  {
    title: "2022-02-11",
    children: [
      {
        title: "行业配置",
        dataIndex: "age",
        key: "age",
        width: 150,
      },
      {
        title: "配置比例",
        dataIndex: "street",
        key: "street",
        width: 150,
      },
    ],
  },
  {
    title: "Company",
    children: [
      {
        title: "Company Address",
        dataIndex: "companyAddress",
        key: "companyAddress",
        width: 200,
      },
      {
        title: "Company Name",
        dataIndex: "companyName",
        key: "companyName",
      },
    ],
  },
  {
    title: "Gender",
    dataIndex: "gender",
    key: "gender",
    width: 80,
    fixed: "right",
  },
] as any;

const data = [] as any;
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: "John Brown",
    age: i + 1,
    street: "Lake Park",
    building: "C",
    number: 2035,
    companyAddress: "Lake Street 42",
    companyName: "SoftLake Co",
    gender: "M",
  });
}

const Demo = () => {
  return (
    <Table
      bordered
      size="middle"
      columns={columns}
      dataSource={data}
      scroll={{ x: "calc(700px + 50%)", y: 240 }}
    />
  );
};
export default Demo;
