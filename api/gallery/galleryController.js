const gallery = require('./gallery.js');
const authorization = require("../../middleware-jwt.js")

var express = require('express');
var router = express.Router();

router.use(function (req, res, next) {
  console.log('Time:', Date.now());
  next();
});

router.post('/add',authorization.auth, gallery.add);
router.post('/delete',authorization.auth, gallery.delete);
router.get('/view', gallery.view);

module.exports = router;
