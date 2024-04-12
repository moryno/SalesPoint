import React from "react";
import { Navigate } from "react-router-dom";
import { authRoutes } from "./AuthRoute";
import { homeRoutes } from "./HomeRoute";
import { chatRoutes } from "./ChatRoutes";
import { productRoutes } from "./ProductRoute";
import { HOME_ROUTE, LOGIN_ROUTE } from "_constants";

const authorizedStructure = {
  fallbackPath: LOGIN_ROUTE,
  routes: [...chatRoutes],
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
  routes: [...homeRoutes, ...productRoutes],
};

export {
  authorizedStructure,
  unAuthorizedStructure,
  anonymousStructure,
  alwaysStructure,
};