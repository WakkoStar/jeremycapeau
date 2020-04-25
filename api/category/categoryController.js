const categories = require('./category.js');
const authorization = require("../../middleware-jwt.js")

var express = require('express');
var router = express.Router();

router.use(function (req, res, next) {
  console.log('Time:', Date.now());
  next();
});

router.post('/',authorization.auth,categories.add);
router.delete('/',authorization.auth, categories.delete);
router.get('/',categories.view);
router.put('/',authorization.auth, categories.modify);

module.exports = router;
