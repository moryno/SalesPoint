import { USERS_API } from "_constants";
import { request } from "utils";

const getUser = (id) => {
  return request.get(`${USERS_API}/${id}`);
};

export const userService = { getUser };
