import mongoose from "mongoose";
const schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter your name"],
    },
    email: {
      type: String,
      required: [true, "Please enter your email"],
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["admin", "user"], //enum means it has only these predefined values
      default: "user",
    },
    avatar: {
      type: String,
      required: true,
    },
    playlist: [
      {
        course: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Course",
        },
        poster: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

//we are creating a all user methods below
const User = mongoose.model("User", schema);
export default User;
