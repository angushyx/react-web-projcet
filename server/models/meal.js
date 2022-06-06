const mongoose = require("mongoose");

const mealSchema = new mongoose.Schema({
  id: { type: String },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },

  price: {
    type: Number,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  picture: {
    type: String,
    required: true,
  },
  seller: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  consumer: {
    type: [String],
    default: [],
  },
});

const Meal = mongoose.model("Meal", mealSchema);
module.exports = Meal;
