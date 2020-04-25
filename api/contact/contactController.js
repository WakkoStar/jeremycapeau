const contact = require('./contact.js');
const authorization = require("../../middleware-jwt.js")

var express = require('express');
var router = express.Router();

router.use(function (req, res, next) {
  console.log('Time:', Date.now());
  next();
});

router.post('/',authorization.auth, contact.add);
router.get('/', contact.view);
router.put('/',authorization.auth, contact.modify)
router.delete('/',authorization.auth, contact.delete)

module.exports = router;
