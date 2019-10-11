  
const express = require('express');
const router = express.Router();
const moviesCtrl = require('../../controllers/movies');

// routes to update myMovie state in App
router.use(require('../../config/auth'));
router.get('/get/:id', moviesCtrl.getMovie);
router.put('/add/:id', moviesCtrl.addMovie);
router.put('/remove/:id', moviesCtrl.removeMovie);

module.exports = router;