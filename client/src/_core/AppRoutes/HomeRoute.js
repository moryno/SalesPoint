import React, { lazy } from "react";
import { HOME_ROUTE } from "_constants";

const Home = lazy(() => import("pages/home"));

export const homeRoutes = [{ path: HOME_ROUTE, element: <Home /> }];
