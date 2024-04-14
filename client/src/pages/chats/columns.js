import moment from "moment";
import React from "react";

export const chatColumns = [
  {
    title: "Sender",
    dataIndex: "sender",
    key: "sender",
    width: "20%",
  },
  {
    title: "Last Message",
    dataIndex: "lastMessage",
    key: "lastMessage",
  },
  {
    title: "Date",
    dataIndex: "updatedAt",
    key: "updatedAt",
    render: (text, row) => <span>{moment(text).fromNow()}</span>,
    width: "15%",
  },

  {
    title: "Action",
    dataIndex: "action",
    key: "action",
    width: "10%",
    align: "center",
  },
];
