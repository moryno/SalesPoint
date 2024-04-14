import { CONVERSATIONS_API } from "_constants";
import { request } from "utils";

const createConversation = (data) => {
  return request.post(CONVERSATIONS_API, data);
};
const editConversation = (conversationId) => {
  return request.put(`${CONVERSATIONS_API}/${conversationId}`);
};

const getConversations = () => {
  return request.get(CONVERSATIONS_API);
};
const getConversation = (conversationId) => {
  return request.get(`${CONVERSATIONS_API}/${conversationId}`);
};

export const conversationService = {
  getConversations,
  getConversation,
  createConversation,
  editConversation,
};
