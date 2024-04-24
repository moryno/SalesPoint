import React, { lazy } from "react";
import { PAYMENT_ROUTE, SUCCESS_ROUTE } from "_constants";

const Pay = lazy(() => import("pages/stripe"));
const Success = lazy(() => import("pages/success"));

export const paymentRoutes = [
    { path: `${PAYMENT_ROUTE}/:id`, element: <Pay /> },
    { path: SUCCESS_ROUTE, element: <Success /> }
];
