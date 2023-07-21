const mongoose = require("mongoose");

const { Schema } = mongoose;

const commentSchema = new Schema({
  campaign: {
    type: Schema.Types.ObjectId,
    ref: "Campaigns",
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
