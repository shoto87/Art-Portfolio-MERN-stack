// backend/routes/artRoutes.js
const express = require('express');
const router = express.Router();
const { getAllArt, createArt, getArtById } = require('../controllers/artController');

router.get('/', getAllArt);
router.post('/', createArt);
router.get('/:id', getArtById);

module.exports = router;
