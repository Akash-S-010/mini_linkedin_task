import jwt from "jsonwebtoken";

const checkAuth = (req, res, next) => {
    try {
        const token = req.cookies.token;
        if (!token) {
            return res.status(401).json({ message: "Unauthorized" });
        }

        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.userId = decoded.userId;
            next();
        } catch (err) {
            return res.status(401).json({ message: "Invalid token" });
        }
    } catch (error) {
        console.error("Error in checkAuth middleware", error);
        return res.status(500).json({ message: "Internal server error" });
    }
};

export default checkAuth;