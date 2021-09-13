import React from "react";
import FlexibleTable from "../../components/FlexibleTable";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    width: 500,
    render: (text:string) => <span>{text}</span>,
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
    width: 200,
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
    width: 200,
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
    width: 200,
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
    width: 200,
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
    width: 200,
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
    width: 500,
  },
];

const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
  {
    key: "4",
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
  {
    key: "5",
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
  {
    key: "6",
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
];

export default function index() {
  return <FlexibleTable  columns={columns} dataSource={data} />;
}
