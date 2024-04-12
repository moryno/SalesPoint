import React, { lazy } from "react";
import { PRODUCT_ROUTE } from "_constants";

const Products = lazy(() => import("pages/products"));
const Product = lazy(() => import("pages/product"));

export const productRoutes = [
  { path: PRODUCT_ROUTE, element: <Products /> },
  { path: `${PRODUCT_ROUTE}/:id`, element: <Product /> },
];
