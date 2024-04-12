import React, { lazy } from "react";
import { CHAT_ROUTE } from "_constants";

const Chats = lazy(() => import("pages/chats"));
const Chat = lazy(() => import("pages/chat"));

export const chatRoutes = [
  { path: CHAT_ROUTE, element: <Chats /> },
  { path: `${CHAT_ROUTE}/:id`, element: <Chat /> },
];
