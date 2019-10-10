  
const express = require('express');
const router = express.Router();
const moviesCtrl = require('../../controllers/movies');


router.use(require('../../config/auth'));
router.get('/get', moviesCtrl.getMovie);
router.put('/add', moviesCtrl.addMovie);
router.put('/remove', moviesCtrl.removeMovie);

/*----- Helper Functions -----*/
function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({ msg: 'Not Authorized' });
}

module.exports = router;