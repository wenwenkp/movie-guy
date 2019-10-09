  
const express = require('express');
const router = express.Router();
const moviesCtrl = require('../../controllers/movies');


router.use(require('../../config/auth'));
// router.get('/', ordersCtrl.index);
// router.post('/', ordersCtrl.create);
router.put('/add/:id', moviesCtrl.addMovie);
router.put('/remove', moviesCtrl.removeMovie);

/*----- Helper Functions -----*/
function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({ msg: 'Not Authorized' });
}

module.exports = router;