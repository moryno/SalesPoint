import React, { lazy } from "react";
import { ORDER_ROUTE } from "_constants";

const Orders = lazy(() => import("pages/orders"));

export const orderRoutes = [{ path: ORDER_ROUTE, element: <Orders /> }];
