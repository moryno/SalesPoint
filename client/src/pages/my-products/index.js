import React, { useCallback, useMemo } from "react";
import { Link } from "react-router-dom";
import { useAuthUser, useCreateService, useGetProducts } from "_hooks";
import { Table } from "antd";
import "./index.scss"
import { productColumns } from "./columns";
import { AffiliateQueryEnums, PRODUCT_ROUTE } from "_constants";
import { productService } from "_services";

const MyProducts = () => {
    const { user } = useAuthUser();
    const mutation = useCreateService(productService.deleteProduct ,AffiliateQueryEnums.PRODUCTS)
    const { isLoading, error, data } = useGetProducts(
        `?userId=${user?._id}`,
      );

      const handleDelete = useCallback((productId) => {
        mutation.mutate(productId)
      }, [mutation]);

      const columns = useMemo(
        () => [
          ...productColumns.map((column) => {
            if (column.dataIndex === "action") {
              return {
                ...column,
                render: (_, row) => (
                  <img
                  className="delete"
                  src="./img/delete.png"
                    alt="delete"
                    onClick={() => handleDelete(row?._id)}
                  />
                ),
              };
            }
            if (column.dataIndex === "cover") {
              return {
                ...column,
                render: (_, row) => (
                  <img className="image" src={row.cover} alt="product" />
                ),
              };
            } else {
              return column;
            }
          }),
        ],
        [handleDelete]
      );

  return (
    <div className="myProducts">
    <div className="container">
      <div className="title">
        <h1>My Products</h1>
        {user?.isSeller && (
              <Link to={`${PRODUCT_ROUTE}/new`}>
                <button>New Product</button>
              </Link>
            )}
      </div>
      <Table
        loading={isLoading}
        dataSource={data?.data}
        columns={columns}
        rowKey={(record) => record?._id}
      />
      
    </div>
  </div>
  )
}

export default MyProducts