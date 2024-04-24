import React from "react";
import { Tag } from "antd";

export const orderColumns = [
  {
    title: "Order",
    dataIndex: "_id",
    key: "_id",
  },
  {
    title: "Amount",
    dataIndex: "amount",
    key: "amount",
    render: (text) => <span>Ksh {text}</span>,
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
export const expandedOrderColumns = [
  {
    title: "Image",
    dataIndex: "image",
    key: "image",
  },
  {
    title: "Product",
    dataIndex: "title",
    key: "title",
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
    render: (text) => <span>Ksh {text}</span>,
  },
  {
    title: "Quantity",
    dataIndex: "quantity",
    key: "quantity",
  },
];
