const images = require('./images.js');
const authorization = require("../../middleware-jwt.js")

var express = require('express');
var router = express.Router();

router.use(function (req, res, next) {
  console.log('Time:', Date.now());
  next();
});

router.post('/',authorization.auth, images.add);
router.delete('/',authorization.auth, images.delete);
router.get('/', images.view);

module.exports = router;
