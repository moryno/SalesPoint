import React from "react";
import { Tag } from "antd";

export const orderColumns = [
  {
    title: "Image",
    dataIndex: "image",
    key: "image",
  },
  {
    title: "Order",
    dataIndex: "title",
    key: "title",
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
  },
  {
    title: "Status",
    dataIndex: "isCompleted",
    key: "isCompleted",
    render: (_, { isCompleted }) => (
      <Tag
        color={isCompleted === false ? "geekblue" : "green"}
        key={isCompleted}
      >
        {isCompleted === true ? "Completed" : "Pending"}
      </Tag>
    ),
  },
  {
    title: "Contact",
    dataIndex: "contact",
    key: "contact",
  },
];
