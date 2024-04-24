import { ORDERS_API } from "_constants";
import { request } from "utils";

const createOrders = (productId) => {
  return request.post(`${ORDERS_API}/${productId}`);
};
const updateOrders = (data) => {
  return request.put(ORDERS_API, data);
};

const getOrders = () => {
  return request.get(ORDERS_API);
};

export const orderService = {
  getOrders,
  createOrders,
  updateOrders
};
