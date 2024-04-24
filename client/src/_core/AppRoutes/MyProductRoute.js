import React, { lazy } from "react";
import { MY_PRODUCT_ROUTE } from "_constants";

const MyProduct = lazy(() => import("pages/my-products"));

export const myProductRoutes = [
  { path: MY_PRODUCT_ROUTE, element: <MyProduct /> },
];
