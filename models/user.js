const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
  username: String
});

const compUserSchema = new Schema({
  username: String,
  os: String
});
mongoose.model("users", userSchema);
mongoose.model("usersComp", compUserSchema);
