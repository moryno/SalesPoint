import React, { lazy } from "react";
import { CART_ROUTE } from "_constants";

const Cart = lazy(() => import("pages/cart"));

export const cartRoutes = [{ path: CART_ROUTE, element: <Cart /> }];
