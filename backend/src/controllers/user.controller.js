import httpStatus from "http-status";
import { User } from "../modules/users.model.js";
import bcrypt, { hash } from "bcrypt";
import { json } from "express";
import crypto from "crypto";
import cookieParser from "cookie-parser";
import jwt from "jsonwebtoken";

const login = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    console.log("please provide correct info");
    return res.status(400).json({ message: "Please provide correct Info " });
  }
  console.log("datas are recived");
  try {
    const user = await User.findOne({ username });
    if (!user) {
      console.log("user not found");
      return res.status(500).json({ message: "User not found! " });
    }

    const isValid = await bcrypt.compare(password, user.password);
    if (isValid) {
      let cookieToken = jwt.sign(
        { username: username },
        process.env.SECRET_KEY
      );
      user.token = cookieToken; // update the User data with Token field
      await user.save(); // then save the data to the database

      res.cookie("token", cookieToken, {

        httpOnly: true,
        secure: false,
        sameSite: "Lax",

      });

      return res.status(httpStatus.OK).json({ token: cookieToken });
    } else if (!isValid) {
      return res.status(401).json({ message: "Invalid Credentials " });
    }
  } catch (e) {
    return res.status(500).json({ message: `Check your credentials again ` });
  }
};

const register = async (req, res) => {
  const { name, username, password } = req.body;
  console.log(req.body);
  try {
    const exist = await User.findOne({ username });
    if (exist) {
      console.log("user already exists");
      return res
        .status(httpStatus.FOUND)
        .json({ message: "User already exists Please Log in " });
    }

    const hashPass = await bcrypt.hash(password, 10);
    const newUser = new User({
      name: name,
      username: username,
      password: hashPass,
    });

    await newUser.save();

    res.status(httpStatus.CREATED).json({ message: "userRegesterd" });
  } catch (err) {
    res.json({ message: "something went wrong ", err });
  }
};

export { login, register };
