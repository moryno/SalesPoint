import { LOGIN_API, LOGOUT_API, REGISTER_API } from "_constants";
import { request } from "utils";

const register = (data) => {
  return request.post(REGISTER_API, data);
};
const login = (data) => {
  return request.post(LOGIN_API, data);
};
const logout = () => {
  return request.post(LOGOUT_API);
};

export const authService = { login, register, logout };
