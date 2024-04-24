import React from "react";

export const cartColumns = [
  {
    title: "Image",
    dataIndex: "cover",
    key: "cover",
  },
  {
    title: "Title",
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
  {
    title: "Subtotal",
    dataIndex: "subtotal",
    key: "subtotal",
  },
  {
    title: "",
    dataIndex: "action",
    key: "action",
    align: "center",
    width: "5%",
  },
];
