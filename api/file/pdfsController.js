const pdfs = require('./pdfs.js');
const authorization = require("../../middleware-jwt.js")

var express = require('express');
var router = express.Router();

router.use(function (req, res, next) {
  console.log('Time:', Date.now());
  next();
});

router.post('/add',authorization.auth, pdfs.add);
router.post('/delete',authorization.auth, pdfs.delete);
router.get('/view',pdfs.view);

module.exports = router;
