import React, { useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Table } from "antd";
import "./Orders.scss";
import { orderColumns } from "./columns";
import { useAuthUser, useGetAll } from "_hooks";
import { AffiliateQueryEnums, CHAT_ROUTE } from "_constants";
import { conversationService, orderService } from "_services";

const Orders = () => {
  const { getOrders } = orderService;
  const { user } = useAuthUser();
  const navigate = useNavigate();
  const { isLoading, data } = useGetAll(getOrders, AffiliateQueryEnums.ORDERS);

  const handleContact = useCallback(
    async (order) => {
      const sellerId = order.sellerId;
      const buyerId = order.buyerId;
      const conversationId = sellerId + buyerId;

      try {
        const res = await conversationService.getConversation(conversationId);
        navigate(`${CHAT_ROUTE}/${res.data.id}`);
      } catch (err) {
        if (err.response.status === 404) {
          const res = await conversationService.createConversation({
            to: user?.isSeller ? buyerId : sellerId,
          });
          navigate(`${CHAT_ROUTE}/${res.data.id}`);
        }
      }
    },
    [navigate, user?.isSeller]
  );

  const columns = useMemo(
    () => [
      ...orderColumns.map((column) => {
        if (column.dataIndex === "contact") {
          return {
            ...column,
            render: (_, row) => (
              <img
                className="message"
                src="./img/message.png"
                alt="message"
                onClick={() => handleContact(row)}
              />
            ),
          };
        }
        if (column.dataIndex === "image") {
          return {
            ...column,
            render: (_, row) => (
              <img className="image" src={row.image} alt="order" />
            ),
          };
        } else {
          return column;
        }
      }),
    ],
    [handleContact]
  );

  return (
    <div className="orders">
      <div className="container">
        <div className="title">
          <h1>Orders</h1>
        </div>
        <Table
          loading={isLoading}
          dataSource={data?.data}
          columns={columns}
          rowKey={(record) => record?._id}
        />
        ;
      </div>
    </div>
  );
};

export default Orders;
