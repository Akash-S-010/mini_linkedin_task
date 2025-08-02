import express from "express";
import "dotenv/config";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectDB from "./src/config/db.js";
import userRoutes from "./src/routes/userRoutes.js";
import postRoutes from "./src/routes/postRoutes.js";


const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors({ 
    origin: "http://localhost:5173",
    credentials: true,
}));

app.use(express.json());
app.use(cookieParser());


// test route
app.use("/api/status", (req, res) => {
    res.send("Server is running");
});


// api routes
app.use("/api/user", userRoutes);
app.use("/api/post", postRoutes);


// Run server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    connectDB();
});