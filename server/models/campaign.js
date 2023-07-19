const mongoose = require("mongoose");

const { Schema } = mongoose;

const campaignSchema = new Schema({
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
  donors: [{
    type: Schema.Types.ObjectId,
    ref: 'User',
  }],
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
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
});

const campaignModel = mongoose.model("Campaigns", campaignSchema);

module.exports = campaignModel;
