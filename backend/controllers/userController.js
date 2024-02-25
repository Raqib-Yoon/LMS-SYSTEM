import User from "../models/User.js";
import Course from "../models/Course.js";
import { sendEmail } from "../utils/sendEmail.js";
import cloudinary from "cloudinary";
import getDataUri from "../utils/dataUri.js";
import bCrypt from "bcrypt";
import generateToken from "../utils/generateToken.js";
import verifyToken from "../utils/verifyToken.js";
import getTokenFromHeader from "../utils/getTokenFromHeader.js";

// import { Stats } from "../models/Stats.js";

export const register = async (req, res) => {
  const file = req.file;
  console.log(file)
  const { name, email, password } = req.body;
  //   check if user exist
  const isUserExist = await User.findOne({ email });
  if (isUserExist) {
    return res.status(400).json({
      error: "User already exists.",
    });
  }

  // const fileUri = getDataUri(file);
  //upload file on cloudinary
  // const myCloud = await cloudinary.v2.uploader.upload(fileUri.content);

  //   hash the passwords
  const salt = await bCrypt.genSalt(10);
  const hashPassword = await bCrypt.hash(password, salt);
  // save the user

  const newUser = await User.create({
    name,
    email,
    password: hashPassword,

    // avatar: {
    //   public_id: myCloud.public_id,
    //   url: myCloud.secure_url,
    // },
  });
  return res.status(201).json({
    user: newUser,
    message: "User Registered Successfull",
  });
};

// login

export const login = async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);
  // check if user is register in our database
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).json({
      error: "Invalid login details",
    });
  }
  // check if passwords match

  const isMatch = await bCrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).json({
      error: "Email and password do not match",
    });
  }

  user.password = undefined;
  res.json({
    user,
    token: generateToken(user._id),
    message: "Successfull login",
  });
};

export const logout = async (req, res) => {};

export const getMyProfile = async (req, res) => {
  const token = getTokenFromHeader(req);
  console.log(token);
  const userId = verifyToken(token);
  console.log(userId);

  const user = await User.findById(userId.id).select({
    password: 0,
  });
  if (!user) {
    return res.status(400).json({
      error: "User not found.",
    });
  }
  res.json({ user, message: "user profile" });
};

export const changePassword = async (req, res) => {
  const { oldPassword, newPassword } = req.body;

  if (!oldPassword || !newPassword) {
    return res.status(400).json({ error: "Please fill all fields" });
  }
  const user = await User.findById(req.user._id).select("+password");

  const oldPasswordMatch = await bCrypt.compare(oldPassword, user.password);

  if (!oldPasswordMatch) {
    return res.status(400).json({
      error: "Incorrect old password",
    });
  }
  user.password = newPassword;
  await user.save();
  res.status(200).json({
    success: true,
    message: "Password changed successfully",
  });
};

export const updateProfile = async (req, res) => {
  const { name, email } = req.body;

  const isUserExist = await User.findOne({ email });

  if (isUserExist) {
    return res.status(400).json({
      error: "You can't use this email",
    });
  }

  const user = await User.findById(req.userAuthId);

  if (name) user.name = name;
  if (email) user.email = email;

  await user.save();

  res.status(200).json({
    success: true,
    message: "Profile updated successfully",
    user,
  });
};

export const updateProfilePicture = async (req, res) => {
  const file = req.file;
  if (!file) {
    return res.status(400).json({
      message: "Please select an image",
    });
  }

  const user = await User.findById(req.userAuthId);

  const fileUri = getDataUri(file);
  //upload file on cloudinary
  const myCloud = await cloudinary.v2.uploader.upload(fileUri.content);

  await cloudinary.v2.uploader.destroy(user.avatar.public_id);

  user.avatar = {
    public_id: myCloud.public_id,
    url: myCloud.secure_url,
  };
  await user.save();
  res.status(200).json({
    success: true,
    message: "Profile picture updated successfully",
  });
};

export const forgetPassword = async (req, res) => {
  const { email } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    return res.status(400).json({
      error: "User not found",
    });
  }
  const newToken = await user.generateToken(user._id);
  await user.save();

  //send token via email
  const url = `${process.env.FRONTEND_URL}/resetpassword/${newToken}`;

  const message = `Click on the link to reset your password. ${url}. If you have not requested then please ignore`;

  await sendEmail(user.email, "Reset Password", message);

  res.status(200).json({
    success: true,
    message:
      "If your email address exists in our database, you will receive a password recovery link at your email address in a few minutes.",
  });
};

export const resetPassword = async (req, res) => {
  const { token } = req.params;
  const id = verifyToken(token);

  const foundUser = await User.findById(id);

  if (!foundUser) {
    return res.status(400).json({
      error: "Token is invalid or has been expired",
    });
  }

  const salt = bCrypt.genSalt(12);
  const hashPassword = await bCrypt.hash(req.body.password, salt);
  foundUser.password = hashPassword;
  await foundUser.save();

  res.status(200).json({
    success: true,
    message: "Password changed successfully",
  });
};

export const addToPlaylist = async (req, res) => {
  const user = await User.findById(req.userAuthId);
  const course = await Course.findById(req.body.id);
  if (!course) {
    return res.status(400).json({
      error: "Invalid course id",
    });
  }

  const itemAlreadyExists = user.playlist.find((item) => {
    if (item.course.toString() === course._id.toString()) {
      return true;
    }
  });

  if (itemAlreadyExists) {
    return res.status(400).json({
      error: "Course already added to playlist",
    });
  }

  user.playlist.push({
    course: course._id,
    poster: course.poster.url,
  });
  await user.save();

  res.status(200).json({
    success: true,
    message: "Added to playlist",
  });
};

export const removeFromPlaylist = async (req, res) => {
  const user = await User.findById(req.userAuthId);
  const course = await Course.findById(req.query.id);
  if (!course) {
    return res.status(400).json({
      error: "Invalid course id",
    });
  }

  const newPlaylist = user.playlist.filter((item) => {
    if (item.course.toString() !== course._id.toString()) return item;
  });

  user.playlist = newPlaylist;

  await user.save();

  res.status(200).json({
    success: true,
    message: "Course removed from playlist",
  });
};

export const getAllUsers = async (req, res) => {
  const users = await User.find({});
  res.status(200).json({
    users,
    success: true,
    users,
  });
};

export const updateUserRole = async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);
  if (!user) {
    return res.status(400).json({
      error: "User not found",
    });
  }
  if (user.role === "admin") {
    user.role = "user";
  } else {
    user.role = "admin";
  }

  await user.save();

  res.status(200).json({
    user,
    success: true,
    message: "Role updated",
  });
};

export const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findByIdAndDelete(id);

    if (!user) throw new Error();

    // await cloudinary.v2.uploader.destroy(user.avatar.public_id);
    //cancel subscription
    res.status(200).json({
      success: true,
      message: "User deleted successfully",
      user,
    });
  } catch (error) {
    return res.status(404).json({
      error: "User not found",
    });
  }
};

export const deleteMyProfile = async (req, res) => {
  const user = await User.findById(req.userAuthId);
  await cloudinary.v2.uploader.destroy(user.avatar.public_id);
  //cancel subscription
  await user.deleteOne();

  res.status(200).json({
    success: true,
    message: "User deleted successfully",
  });
};

//creating a watcher for stats because of realtime data when ever change in the user model then callback function runs
// User.watch().on("change", async () => {
//   const stat = await Stats?.find({}).sort({ createdAt: "desc" }).limit(1);

//   const subscribedUsers = await User.find({ "subscription.status": "active" });

//   stat[0].users = await User.countDocuments();
//   stat[0].subscriptions = subscribedUsers.length;
//   stat[0].createdAt = new Date(Date.now());

//   await stat[0].save();
// });
