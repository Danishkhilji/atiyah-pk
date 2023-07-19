const mongoose = require("mongoose");

const { Schema } = mongoose;

const donationSchema = new Schema({
  campaign: {
    type: Schema.Types.ObjectId,
    ref: "Campaign",
    required: true,
  },
  donor: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  cardNumber: {
    type: String,
    required: true,
  },
  cardHolderName: {
    type: String,
    required: true,
  },
});

const Donation = mongoose.model("Donation", donationSchema);

module.exports = Donation;
