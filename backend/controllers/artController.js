// backend/controllers/artController.js
const Art = require('../models/Art'); 


exports.getAllArt = async (req, res) => {
  try {
    const art = await Art.find();
    res.json(art);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createArt = async (req, res) => {
  const { title, description, imageUrl } = req.body;
  try {
    const newArt = new Art({ title, description, imageUrl });
    await newArt.save();
    res.status(201).json(newArt);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getArtById = async (req, res) => {
  try {
    const art = await Art.findById(req.params.id);
    if (art) {
      res.json(art);
    } else {
      res.status(404).json({ message: 'Art not found' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
