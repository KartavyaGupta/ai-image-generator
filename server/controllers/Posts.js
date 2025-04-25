// controllers/Posts.js
import Post from "../models/Posts.js"; // ✅ add .js
import * as dotenv from "dotenv";
import { createError } from "../error.js"; // (assuming you have this helper)
import { v2 as cloudinary } from "cloudinary";

dotenv.config(); // be sure this runs first

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const getAllPosts = async (req, res, next) => {
  try {
    const posts = await Post.find({});
    return res.status(200).json({ success: true, data: posts });
  } catch (err) {
    // next(createError(500, err.message || "Failed to fetch posts")); // ✅ propagate
  }
};

export const createPost = async (req, res, next) => {
  try {
    const { author, photo, prompt } = req.body;
    const photourl = await cloudinary.uploader.upload(photo);
    const newPost = await Post.create({
      author: author,
      prompt: prompt,
      photo: photourl?.secure_url,
    });
    return res.status(201).json({ success: true, data: newPost });
  } catch (error) {
    console.log(error);
  }
};
