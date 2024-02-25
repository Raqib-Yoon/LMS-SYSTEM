import User from "../models/User.js";

const isAdmin = async (req, res, next) => {
  const user = await User.findById(req.userAuthId);
  if (!user?.role === "admin") {
    return res.status(400).json({
      error: "Access denied. Admin only.",
    });
  }
  return next();
};

export default isAdmin;
