const pdfs = require('./pdfs.js');
const authorization = require("../../middleware-jwt.js")

var express = require('express');
var router = express.Router();

router.use(function (req, res, next) {
  console.log('Time:', Date.now());
  next();
});

router.post('/',authorization.auth, pdfs.add);
router.delete('/',authorization.auth, pdfs.delete);
router.get('/',pdfs.view);

module.exports = router;
