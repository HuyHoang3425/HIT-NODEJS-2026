import mongoose, { Schema, model } from "mongoose";

import slug from "mongoose-slug-updater";
mongoose.plugin(slug);

const userModel = new Schema({
  username: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  avatar: String,
  slug: {
    type: String,
    slug: "username",
  },
  status: {
    type: String,
    enum: ["active", "inactive"],
    default: "active",
  },
});

export default model("User", userModel);
