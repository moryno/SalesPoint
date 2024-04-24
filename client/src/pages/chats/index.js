import React, { useCallback, useMemo } from "react";
import { Table } from "antd";
import "./Chats.scss";
import { AffiliateQueryEnums, CHATS_API } from "_constants";
import { useAuthUser, useCreateService, useGetAll } from "_hooks";
import { chatColumns } from "./columns";
import { Link } from "react-router-dom";
import { conversationService } from "_services";

const Chats = () => {
  const { user } = useAuthUser();
  const { getConversations, editConversation } = conversationService;
  const { isLoading, data } = useGetAll(
    getConversations,
    AffiliateQueryEnums.CONVERSATIONS
  );
  const mutation = useCreateService(
    editConversation,
    AffiliateQueryEnums.CONVERSATIONS
  );

  const handleRead = useCallback(
    (conversationId) => {
      mutation.mutate(conversationId);
    },
    [mutation]
  );

  const checkReadStatus = useCallback(
    (row) => {
      if (
        (user.isSeller && !row.readBySeller) ||
        (!user.isSeller && !row.readByBuyer)
      ) {
        handleRead(row?.id);
      }
    },
    [handleRead, user.isSeller]
  );

  const columns = useMemo(
    () => [
      ...chatColumns?.map((column) => {
        if (column.dataIndex === "sender") {
          return {
            ...column,
            title: user?.isSeller ? "Buyer" : "Seller",
            render: (_, row) => (
              <span>{user?.isSeller ? row?.buyer : row?.seller}</span>
            ),
          };
        }
        if (column.dataIndex === "lastMessage") {
          return {
            ...column,
            render: (_, row) => (
              <Link
                to={`${CHATS_API}/${row?.id}`}
                onClick={() => checkReadStatus(row)}
                className="link"
              >
                {row?.lastMessage?.substring(0, 100)}...
              </Link>
            ),
          };
        }
        if (column.dataIndex === "action") {
          return {
            ...column,
            render: (_, row) => {
              if (
                (user.isSeller && !row.readBySeller) ||
                (!user.isSeller && !row.readByBuyer)
              ) {
                return (
                  <button onClick={() => handleRead(row.id)}>
                    Mark as Read
                  </button>
                );
              }
            },
          };
        } else {
          return column;
        }
      }),
    ],
    [checkReadStatus, handleRead, user.isSeller]
  );

  return (
    <div className="chats">
      <div className="container">
        <div className="title">
          <h1>Chats</h1>
        </div>
        <Table
          loading={isLoading}
          dataSource={data?.data}
          rowClassName={(record) => {
            const isActive =
              (user?.isSeller && !record.readBySeller) ||
              (!user?.isSeller && !record.readByBuyer);
            return isActive ? "active" : "";
          }}
          columns={columns}
          rowKey={(record) => record?._id}
        />
      </div>
    </div>
  );
};

export default Chats;
