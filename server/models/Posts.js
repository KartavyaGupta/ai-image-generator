// models/Posts.js
import mongoose from "mongoose";

const PostSchema = new mongoose.Schema(
  {
    author: { type: String, required: true },
    prompt: { type: String, required: true },
    photo: { type: String, required: true },
  },
  { timestamps: true } // optional but handy
);

export default mongoose.model("Post", PostSchema);
