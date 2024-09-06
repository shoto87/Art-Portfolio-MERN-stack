// backend/routes/artRoutes.js
// routes/artRoutes.js
const express = require('express');
const router = express.Router();
const Art = require('../models/Art');

// Get all art pieces
router.post('/', async (req, res) => {
    const { title, description, imageUrl } = req.body;
    const newArt = new Art({ title, description, imageUrl });
  
    try {
      const savedArt = await newArt.save();
      res.status(201).json(savedArt);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });
  
router.get('/', async (req, res) => {
  try {
    const artworks = await Art.find();
    res.json(artworks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;

const { getAllArt, createArt, getArtById } = require('../controllers/artController');

router.get('/', getAllArt);
router.post('/', createArt);
router.get('/:id', getArtById);

module.exports = router;
