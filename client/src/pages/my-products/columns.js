import React from "react";

export const productColumns = [
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
    render: (text) => <span>Ksh {text}</span>
  },
  {
    title: "Sales",
    dataIndex: "sales",
    key: "sales",
  },
  {
    title: "Action",
    dataIndex: "action",
    key: "action",
    align: "center",
    width: "8%"
  },
];
