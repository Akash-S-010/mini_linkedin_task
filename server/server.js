import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "./src/config/db.js";
import userRoutes from "./src/routes/userRoutes.js";


const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

// test route
app.use("/api/status", (req, res) => {
    res.send("Server is running");
});


// api routes
app.use("/api/user", userRoutes);


// Run server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    connectDB();
});