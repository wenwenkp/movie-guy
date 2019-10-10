  
const express = require('express');
const router = express.Router();
const moviesCtrl = require('../../controllers/movies');

// routes to update myMovie state in App
router.use(require('../../config/auth'));
router.get('/get', moviesCtrl.getMovie);
router.put('/add', moviesCtrl.addMovie);
router.put('/remove', moviesCtrl.removeMovie);

module.exports = router;