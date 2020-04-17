const account = require('./lib.js');
const authorization = require("../../middleware-jwt.js")

var express = require('express');
var router = express.Router();

router.use(function (req, res, next) {
  console.log('Time:', Date.now());
  next();
});

router.post('/login', account.login);
//router.post('/signup',account.signup);
router.post('/auth', account.auth)
router.post('/logout', account.logout)

module.exports = router;
