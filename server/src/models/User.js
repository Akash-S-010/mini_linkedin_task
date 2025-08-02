import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
   bio: {
    type: String,
    default: "",
    validate: {
      validator: function (v) {
        return v.length <= 300;
      },
      message: props => `Bio must be 300 characters or less.`,
    },
  },
}, {
  timestamps: true,
});

export default mongoose.model("User", UserSchema);