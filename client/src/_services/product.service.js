import { PRODUCTS_API } from "_constants";
import { request } from "utils";

const createProduct = (data) => {
  return request.post(PRODUCTS_API, data);
};
const deleteProduct = (id) => {
  return request.delete(`${PRODUCTS_API}/${id}`);
};
const editProduct = (id, data) => {
  return request.put(`${PRODUCTS_API}/${id}`, data);
};
const getProducts = (params, min, max, sort) => {
  return request.get(
    `${PRODUCTS_API}${params}&min=${min ? min : 0}&max=${
      max ? max : Infinity
    }&sort=${sort}`
  );
};
const getProduct = (id) => {
  return request.get(`${PRODUCTS_API}/${id}`);
};

export const productService = {
  createProduct,
  deleteProduct,
  editProduct,
  getProducts,
  getProduct,
};
