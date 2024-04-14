import { CHATS_API } from "_constants";
import { request } from "utils";

const createChat = (data) => {
  return request.post(CHATS_API, data);
};

const getChats = (conversationId) => {
  return request.get(`${CHATS_API}/${conversationId}`);
};

export const chatService = {
  getChats,
  createChat,
};
