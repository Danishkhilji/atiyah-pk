const mongoose = require("mongoose");

const { Schema } = mongoose;

const campaignSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
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
  endosment: {
    type: Number,
  },
  amountCollected: {
    type: Number,
  },

  donations: [{
    type: Schema.Types.ObjectId,
    ref: 'Donation',
  }],
  startDate: {
    type: Date,
    default: Date.now,
  },
  endDate: {
    type: Date,
  },
  status: {
    type: String,
    enum: ['active', 'completed', 'block'],
    default: "active",
  },
  block: {
    type: Boolean,
    default: false,
  },
  comments: [{
    type: Schema.Types.ObjectId,
    ref: "Comment",
    default: [],
  }],
});

const campaignModel = mongoose.model("Campaigns", campaignSchema);

module.exports = campaignModel;
