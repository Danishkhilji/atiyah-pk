const mongoose = require("mongoose");

const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
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
  location: {
    type: String, 
  },
  bio: {
    type: String, 
  },
  profession: {
    type: String, 
  },
  
  role: {
    type: String,
    enum: ["admin", "donor", "receiver"],
    required: true,
  },
});

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;
