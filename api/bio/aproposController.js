const apropos = require('./bio.js')
const authorization = require("../../middleware-jwt.js")

var express = require('express');
var router = express.Router();

router.use(function (req, res, next) {
  console.log('Time:', Date.now());
  next();
});

router.get('/', apropos.view);
router.put('/',authorization.auth, apropos.modify);

module.exports = router;
