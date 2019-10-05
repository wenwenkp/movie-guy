const express = require('express');
const router = express.Router();
const User = require('../../models/user')
const userCtrl = require('../../controllers/users');

router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);

module.exports = router;