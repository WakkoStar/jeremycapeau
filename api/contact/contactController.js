const contact = require('./contact.js');
const authorization = require("../../middleware-jwt.js")

var express = require('express');
var router = express.Router();

router.use(function (req, res, next) {
  console.log('Time:', Date.now());
  next();
});

router.post('/add',authorization.auth, contact.add);
router.get('/view', contact.view);
router.post('/modify',authorization.auth, contact.modify)
router.post('/delete',authorization.auth, contact.delete)

module.exports = router;
