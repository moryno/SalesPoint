import React, { lazy } from "react";
import { LOGIN_ROUTE, REGISTER_ROUTE } from "_constants";

const Login = lazy(() => import("pages/auth/login"));
const Register = lazy(() => import("pages/auth/register"));

export const authRoutes = [
  { path: LOGIN_ROUTE, element: <Login /> },
  { path: REGISTER_ROUTE, element: <Register /> },
];
