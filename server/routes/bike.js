const express = require('express');
const router = express.Router();
const bikeController = require('../controllers/bikeController');

/**
 *  App Routes
 */
router.get('/', bikeController.bike);


module.exports = router;