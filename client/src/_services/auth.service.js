import { LOGIN_API, REGISTER_API } from "_constants";
import { request } from "utils";

const register = (data) => {
  return request.post(REGISTER_API, data);
};
const login = (data) => {
  return request.post(LOGIN_API, data);
};

export const authService = { login, register };
