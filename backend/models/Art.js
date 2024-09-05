// backend/models/Art.js
const mongoose = require('mongoose');

const ArtSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
});

module.exports = mongoose.model('Art', ArtSchema);
