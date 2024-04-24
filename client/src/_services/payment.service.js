import { PAYMENT_API } from "_constants";
import { request } from "utils";

const createPayment = (productId) => {
  return request.post(`${PAYMENT_API}/${productId}`);
};

export const paymentService = {
  createPayment,
};
