import Post from "../models/Post.js";
import User from "../models/User.js";


// Create Post (Protected)
export const createPost = async (req, res) => {
    try {
        const { content } = req.body;

        if (!content || content.trim() === "") {
            return res.status(400).json({ message: "Post content is required" });
        }

        const newPost = new Post({
            content,
            author: req.userId,
        });

        await newPost.save();

        res.status(201).json({ message: "Post created", post: newPost });
    } catch (err) {
        console.error("Error in createPost", err);
        res.status(500).json({ message: "Server error" });
    }
};



// Get All Posts (Public Feed)
export const getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find()
            .populate("author", "name") // populate only name
            .sort({ createdAt: -1 });

        res.status(200).json(posts);
    } catch (err) {
        console.error("Error in getAllPosts", err);
        res.status(500).json({ message: "Server error" });
    }
};



// Get Posts by User (Profile Page)
export const getMyProfileAndPosts = async (req, res) => {
    try {
        const user = await User.findById(req.userId).select("-password");
        if (!user) return res.status(404).json({ message: "User not found" });

        const posts = await Post.find({ author: req.userId }).sort({ createdAt: -1 });

        res.status(200).json({ user, posts });
    } catch (error) {
        console.error("Get profile error:", error);
        res.status(500).json({ message: "Server error" });
    }
};
