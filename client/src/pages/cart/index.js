import React, { useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Table } from "antd";
import "./Cart.scss";
import { cartColumns } from "./columns";
import { Link } from "react-router-dom";
import { useAuthUser, useCreateService } from "_hooks";
import {
  AffiliateQueryEnums,
  LOGIN_ROUTE,
  PAYMENT_ROUTE,
  PRODUCT_ROUTE,
} from "_constants";
import { cartService } from "_services";
import { deleteCart, removeProduct } from "_redux/slices/cartSlice";

const Cart = () => {
  const { products, total } = useSelector((state) => state.cart);
  const { createCart } = cartService;
  const { user, isAuthenticated } = useAuthUser();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleRemoveCart = useCallback(
    (cart) => {
      if (cart) {
        dispatch(removeProduct(cart));
      }
    },
    [dispatch]
  );

  const columns = useMemo(
    () => [
      ...cartColumns.map((column) => {
        if (column.dataIndex === "subtotal") {
          return {
            ...column,
            render: (_, row) => <span>Ksh. {row.price * row.quantity}</span>,
          };
        }
        if (column.dataIndex === "action") {
          return {
            ...column,
            render: (_, row) => (
              <img
                className="delete"
                src="./img/delete.png"
                alt="delete"
                onClick={() => handleRemoveCart(row)}
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
    [handleRemoveCart]
  );

  const handleCheckout = useCallback(async () => {
    if (isAuthenticated) {
      const params = {
        userId: user?._id,
        products: products?.map((product) => ({
          productId: product._id,
          quantity: product.quantity,
        })),
      };
      const response = await createCart(params);
      if (response.status === 200 && response.statusText === "OK") {
        dispatch(deleteCart());
        navigate(`${PAYMENT_ROUTE}/${response.data._id}`);
      }
    } else {
      navigate(LOGIN_ROUTE);
    }
  }, [createCart, dispatch, isAuthenticated, navigate, products, user?._id]);

  return (
    <main className="cart">
      <div className="container">
        {products?.length > 0 ? (
          <>
            <div className="left">
              <Table
                dataSource={products}
                columns={columns}
                rowKey={(record) => record?._id}
                pagination={false}
              />
            </div>
            <div className="summaryContainer">
              <h2 className="summaryTitle">ORDER SUMMARY</h2>
              <div className="summaryItem">
                <span>Subtotal</span>
                <span>Ksh. {total}</span>
              </div>
              <div className="summaryItem">
                <span>Estimated Transport</span>
                <span>Ksh. 400</span>
              </div>
              <div className="summaryItem">
                <span>Transport Discount</span>
                <span>Ksh. -400</span>
              </div>
              <div className="summaryItem">
                <span className="total">Total</span>
                <span className="total">Ksh. {total}</span>
              </div>
              <button onClick={handleCheckout} className="button link">
                CHECKOUT NOW
              </button>
            </div>
          </>
        ) : (
          <div className="redirectContainer">
            <div>Your cart is currently empty.</div>
            <Link to={PRODUCT_ROUTE} className="button link return">
              Return to shop
            </Link>
          </div>
        )}
      </div>
    </main>
  );
};

export default Cart;
