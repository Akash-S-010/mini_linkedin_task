import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
        validate: {
            validator: (v) => v.length <= 1000,
            message: "Characters must be 1000 or less",
        }
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
}, {
    timestamps: true,
});

export default mongoose.model("Post", PostSchema);
