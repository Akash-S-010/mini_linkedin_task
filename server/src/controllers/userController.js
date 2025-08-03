import User from "../models/User.js";
import bcryptjs from "bcryptjs";
import generateToken from "../utils/token.js";

// User Signup
export const signup = async (req, res) => {
    try {
        const { name, email, password, bio } = req.body;
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        // hash password
        const hashedPassword = await bcryptjs.hash(password, 10);

        const newUser = new User({
            name,
            email,
            password: hashedPassword,
            bio,
        });

        await newUser.save();
        
        // Return user without password
        const userWithoutPassword = await User.findById(newUser._id).select("-password");
        return res.status(201).json({ 
            message: "Signup successful", 
            user: userWithoutPassword 
        });
    } catch (error) {
        console.log("Error signing up user:", error);
        return res.status(500).json({ message: "Server error" });
    }
};


// User Login
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        const isPasswordValid = await bcryptjs.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        const token = generateToken(user._id);

        res.cookie("token", token, {
            sameSite: process.env.NODE_ENV === "production" ? "None" : "Lax",
            secure: process.env.NODE_ENV === "production",
            httpOnly: true,
            maxAge: 7 * 24 * 60 * 60 * 1000,
        });

        // Return user without password
        const userWithoutPassword = await User.findById(user._id).select("-password");
        return res.status(200).json({ message: "Login successful", userData: userWithoutPassword });
    } catch (error) {
        console.log("Error logging in user:", error);
        return res.status(500).json({ message: "Server error" });
    }
};


// check requesting user
export const checkUser = async (req, res) => {
    try {
        const user = await User.findById(req.userId).select("-password");

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        return res.status(200).json(user);
    } catch (error) {
        console.log("Error checking user:", error);
        return res.status(500).json({ message: "Server error" });
    }
};

// user Logout
export const logout = async (req, res) => {
    try {
        res.clearCookie("token");
        return res.status(200).json({ message: "Logout successful" });
    } catch (error) {
        console.log("Error logging out user:", error);
        return res.status(500).json({ message: "Server error" });
    }
};

// Update user profile
export const updateProfile = async (req, res) => {
    try {
        const { name, bio } = req.body;
        
        const user = await User.findById(req.userId);
        
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Update fields if provided
        if (name) user.name = name;
        if (bio !== undefined) user.bio = bio;

        await user.save();

        // Return user without password
        const userWithoutPassword = await User.findById(req.userId).select("-password");
        
        return res.status(200).json({ 
            message: "Profile updated successfully", 
            user: userWithoutPassword 
        });
    } catch (error) {
        console.log("Error updating profile:", error);
        return res.status(500).json({ message: "Server error" });
    }
};

// Get user profile with posts
export const getUserProfile = async (req, res) => {
    try {
        const user = await User.findById(req.userId).select("-password");
        
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Get user's posts
        const Post = (await import("../models/Post.js")).default;
        const posts = await Post.find({ author: req.userId })
            .populate("author", "name") // populate author name
            .sort({ createdAt: -1 });

        return res.status(200).json({ user, posts });
    } catch (error) {
        console.log("Error getting user profile:", error);
        return res.status(500).json({ message: "Server error" });
    }
};

