import { CART_ROUTE } from "_constants";
import { request } from "utils";

const createCart = (data) => {
  return request.post(CART_ROUTE, data);
};

const getCart = (id) => {
  return request.get(`${CART_ROUTE}/${id}`);
};

export const cartService = {
  createCart,
  getCart,
};
