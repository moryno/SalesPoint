import jwt from "jsonwebtoken";
import responseError from "../utils/responseError.js";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.accessToken;
  if (!token)
    return res.status(401).json({ error: "You are not authenticated!" });

  jwt.verify(token, process.env.JWT_KEY, async (err, payload) => {
    if (err) return next(responseError(403, "Token is invalid!"));

    req.userId = payload.id;
    req.isSeller = payload.isSeller;
    next();
  });
};
