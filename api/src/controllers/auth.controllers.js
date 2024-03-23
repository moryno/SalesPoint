import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  try {
    const hashPassword = bcrypt.hashSync(req.body.password, 10);
    const newUser = new User({
      ...req.body,
      password: hashPassword,
    });

    const user = await newUser.save();
    res.status(201).send(`User ${user.fullName} sucessfully.`);
  } catch (error) {
    res.status(500).send("Creating user failed.");
  }
};

export const login = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) return res.status(404).send("User not found!");

    const isPassword = bcrypt.compareSync(req.body.password, user.password);
    if (!isPassword) return res.status(400).send("Wrong username or password!");

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
export const logout = async (req, res) => {
  try {
    const newUser = new User({
      fullName: "Susan Kamau",
      username: "susankamau",
      email: "susankamau@gmail.com",
      password: "123456",
      country: "Kenya",
    });

    await newUser.save();
    res.status(201).send("User created sucessfully.");
  } catch (error) {
    res.status(500).send("Creating user failed.");
  }
};
