const express = require('express');
const router = express.Router();


/**
 *  /index
 */
router.get('/', (req, res) => {
    res.render('./layouts/index')
});

/**
 *  /about
 */
 router.get('/about', (req, res) => {
    res.render('./layouts/about')
});
module.exports = router;