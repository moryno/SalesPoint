import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import responseError from "../utils/responseError.js";

export const register = async (req, res, next) => {
  try {
    const hashPassword = bcrypt.hashSync(req.body.password, 10);
    const newUser = new User({
      ...req.body,
      password: hashPassword,
    });

    const user = await newUser.save();
    res.status(201).send(`Created user ${user.fullName} sucessfully.`);
  } catch (error) {
    return next(error);
  }
};

export const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) return next(responseError(404, "User not found!"));

    const isPassword = bcrypt.compareSync(req.body.password, user.password);
    if (!isPassword)
      return next(responseError(400, "Wrong username or password!"));

    const token = jwt.sign(
      {
        id: user._id,
        isSeller: user.isSeller,
      },
      process.env.JWT_KEY
    );

    const { password, ...rest } = user._doc;

    res
      .cookie("accessToken", token, {
        httpOnly: true,
      })
      .status(201)
      .send(rest);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const logout = async (req, res, next) => {
  try {
    res
      .clearCookie("accessToken", {
        sameSite: "none",
        secure: true,
      })
      .status(200)
      .send("You have been logged out.");
  } catch (error) {
    next(error);
  }
};
