// models/Card.js

const mongoose = require('mongoose');

// Define the schema for a playing card
const cardSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true, // e.g., Ace, 2, 3, King
  },
  suit: {
    type: String,
    required: true, // Spades, Hearts, Diamonds, Clubs
  },
  value: {
    type: Number,
    required: true, // 1 to 13
  },
  collected: {
    type: Boolean,
    default: false, // true if user has the card
  },
}, {
  timestamps: true, // automatically add createdAt and updatedAt
});

// Create the model from the schema
const Card = mongoose.model('Card', cardSchema);

module.exports = Card;
