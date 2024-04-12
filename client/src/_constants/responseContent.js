import {
  PRODUCTS_API,
  ORDERS_API,
  CHATS_API,
  CONVERSATIONS_API,
  LOGIN_API,
  REGISTER_API,
  REVIEWS_API,
} from "./api";

export const successResponseContent = {
  [LOGIN_API]: {
    message: "Account",
    description: "Login was successful",
  },
  [REGISTER_API]: {
    message: "Account",
    description: "Register was successful",
  },
  [PRODUCTS_API]: {
    message: "Success",
    description: "Creating product was successful",
  },
  [ORDERS_API]: {
    message: "Success",
    description: "Creating order was successful",
  },
  [CHATS_API]: {
    message: "Success",
    description: "Creating message was successful",
  },
  [CONVERSATIONS_API]: {
    message: "Success",
    description: "Login was successful",
  },
  [REVIEWS_API]: {
    message: "Success",
    description: "Creating reviews was successful",
  },
};
