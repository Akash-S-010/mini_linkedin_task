import express from "express";
import { createPost, getAllPosts, getMyProfileAndPosts } from "../controllers/postController.js";
import checkAuth from "../middlewares/checkAuth.js";

const router = express.Router();

router.post("/", checkAuth, createPost);
router.get("/", getAllPosts);
router.get("/me", checkAuth, getMyProfileAndPosts);

export default router