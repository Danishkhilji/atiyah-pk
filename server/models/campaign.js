const mongoose = require("mongoose");
const { Schema } = mongoose;

const campaignSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    // required: true,
  },
  city: {
    type: String,
    required: true,
  },
  postalCode: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  fundraiseFor: {
    type: String,
    required: true,
  },
  campaign: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  amountNeeded: {
    type: Number,
    required: true,
  },
  amountCollected: {
    type: Number,
    default: 0
  },
  accountTitle: {
    type: String,
    required: true,
  },
  accountNumber: {
    type: String,
    required: true,
  },
  donations: [
    {
      type: Schema.Types.ObjectId,
      ref: "Donation",
    },
  ],
  startDate: {
    type: Date,
    default: Date.now,
  },
  endDate: {
    type: Date,
  },
  status: {
    type: String,
    enum: ["active", "completed", "block"],
    default: "active",
  },
  block: {
    type: Boolean,
    default: false,
  },
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: "Comment",
      default: [],
    },
  ],
  endosment:{
    type: Number,
    default: 0,
  },
  ImageURL:{
    type: String,
  },
});

const campaignModel = mongoose.model("Campaigns", campaignSchema);

module.exports = campaignModel;

