const express = require('express');
const router = express.Router();
const userCtrl = require('../../controllers/users');

// user signup/login route
router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);

module.exports = router;