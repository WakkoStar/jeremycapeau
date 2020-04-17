const images = require('./images.js');
const authorization = require("../../middleware-jwt.js")

var express = require('express');
var router = express.Router();

router.use(function (req, res, next) {
  console.log('Time:', Date.now());
  next();
});

router.post('/add',authorization.auth, images.add);
router.post('/delete',authorization.auth, images.delete);
router.get('/view', images.view);

module.exports = router;
