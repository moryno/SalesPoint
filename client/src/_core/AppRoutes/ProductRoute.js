import React, { lazy } from "react";
import { MY_PRODUCT_ROUTE, PRODUCT_ROUTE } from "_constants";

const Products = lazy(() => import("pages/products"));
const Product = lazy(() => import("pages/product"));
const NewProduct = lazy(() => import("pages/new-product"));
const MyProduct = lazy(() => import("pages/my-products"))

export const productRoutes = [
  { path: PRODUCT_ROUTE, element: <Products /> },
  { path: `${PRODUCT_ROUTE}/new`, element: <NewProduct /> },
  { path: `${PRODUCT_ROUTE}/:id`, element: <Product /> },
  { path: MY_PRODUCT_ROUTE, element: <MyProduct /> },
];
