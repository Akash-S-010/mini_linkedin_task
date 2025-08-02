import User from "../models/User.js";
import bcryptjs from "bcryptjs";
import generateToken from "../utils/Token.js";

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
        return res.status(201).json({ message: "Signup successful" });
    } catch (error) {
        console.log("Error signing up user:", error);
        return res.status(500).json({ message: "Server error" });
    }
};


// User Login
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email }).select("-password");

        if (!user) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        const token = generateToken(user._id);

        res.cookie("token", token, {
            sameSite: NODE_ENV === "production" ? "None" : "Lax",
            secure: NODE_ENV === "production",
            httpOnly: true,
            maxAge: 7 * 24 * 60 * 60 * 1000,
        });

        return res.status(200).json({ message: "Login successful", userData: user });
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

