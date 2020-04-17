const categories = require('./category.js');
const authorization = require("../../middleware-jwt.js")

var express = require('express');
var router = express.Router();

router.use(function (req, res, next) {
  console.log('Time:', Date.now());
  next();
});

router.post('/add',authorization.auth,categories.add);
router.post('/delete',authorization.auth, categories.delete);
router.get('/view',categories.view);
router.post('/modify',authorization.auth, categories.modify);

module.exports = router;
