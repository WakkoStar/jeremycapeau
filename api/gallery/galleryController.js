const gallery = require('./gallery.js');
const authorization = require("../../middleware-jwt.js")

var express = require('express');
var router = express.Router();

router.use(function (req, res, next) {
  console.log('Time:', Date.now());
  next();
});

router.post('/',authorization.auth, gallery.add);
router.delete('/',authorization.auth, gallery.delete);
router.put('/',authorization.auth, gallery.move)
router.get('/', gallery.view);

module.exports = router;
