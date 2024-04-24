import React from "react";
import { Navigate } from "react-router-dom";
import { authRoutes } from "./AuthRoute";
import { homeRoutes } from "./HomeRoute";
import { chatRoutes } from "./ChatRoutes";
import { productRoutes } from "./ProductRoute";
import { orderRoutes } from "./OrderRoute";
import { cartRoutes } from "./CartRoute";
import { HOME_ROUTE, LOGIN_ROUTE } from "_constants";
import { paymentRoutes } from "./PaymentRoute";
import { myProductRoutes } from "./MyProductRoute";

const authorizedStructure = {
  fallbackPath: LOGIN_ROUTE,
  routes: [...chatRoutes, ...orderRoutes, ...paymentRoutes, ...myProductRoutes],
};

const unAuthorizedStructure = {
  fallbackPath: HOME_ROUTE /*replace with profile route*/,
  redirectPath: "",
  routes: [...authRoutes],
};

const anonymousStructure = {
  routes: {
    path: HOME_ROUTE,
    element: <Navigate to={HOME_ROUTE} />,
  },
};

const alwaysStructure = {
  routes: [...homeRoutes, ...productRoutes, ...cartRoutes],
};

export {
  authorizedStructure,
  unAuthorizedStructure,
  anonymousStructure,
  alwaysStructure,
};
