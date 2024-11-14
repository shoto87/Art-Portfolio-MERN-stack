// models/Art.js
const mongoose = require('mongoose');

const ArtSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  imageUrl: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Art', ArtSchema);
