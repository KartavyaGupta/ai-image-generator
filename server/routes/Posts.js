// routes/Posts.js
import express from "express";
import { createPost, getAllPosts } from "../controllers/Posts.js";

const router = express.Router();

router.get("/", getAllPosts);
router.post("/", createPost);


export default router; // ✅ export the instance you just created
