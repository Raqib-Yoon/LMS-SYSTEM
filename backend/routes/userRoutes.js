import express from "express";
const router = express.Router();

import {
  addToPlaylist,
  changePassword,
  deleteMyProfile,
  deleteUser,
  forgetPassword,
  getAllUsers,
  getMyProfile,
  login,
  logout,
  register,
  removeFromPlaylist,
  resetPassword,
  updateProfile,
  updateProfilePicture,
  updateUserRole,
} from "../controllers/userController.js";
import isAdmin from "../middlewares/isAdmin.js";
import isLoggedIn from "../middlewares/isLoggedIn.js";
import {
  userLoginValidator,
  userRegisterValidator,
} from "../validators/validator.js";
import { runValidation } from "../validators/index.js";

import singleUpload from "../middlewares/multer.js";

//to regiter
router.post(
  "/users/register",
  userRegisterValidator,
  runValidation,
  singleUpload,
  register
);

//to login
router.post("/users/login", userLoginValidator, runValidation, login);

//logout
router.get("/users/logout", isLoggedIn, logout);

//get my profile
router.get("/users/profile", isLoggedIn, getMyProfile);

//delete my profile
router.delete("/users/profile", isLoggedIn, deleteMyProfile);

//changePassword
router.put("/users/changepassword", isLoggedIn, changePassword);

//update profile
router.put("/users/updateprofile", isLoggedIn, updateProfile);

//update profile picture
router.put(
  "/users/updateprofilepicture",
  isLoggedIn,
  singleUpload,
  updateProfilePicture
);

//forget password
router.post("/users/forgetpassword", forgetPassword);

//reset password
router.put("/users/resetpassword/:token", resetPassword);

//add to playlist
router.post("/users/addtoplaylist", isLoggedIn, addToPlaylist);

//remove from playlist
router.delete("/users/removeFromPlaylist", isLoggedIn, removeFromPlaylist);

////////////Admin Routes////////////////////

//get all users
router.get("/admin/users", isLoggedIn, isAdmin, getAllUsers);
//update user role
router.put("/admin/user/:id", isLoggedIn, isAdmin, updateUserRole);
router.delete("/admin/user/:id", isLoggedIn, isAdmin, deleteUser);

export default router;
