var express = require('express');
var router = express.Router();
const fs = require("fs");
const path = require('path')

/* GET home page. */
router.get('/', function(req, res) {
  // res.set('content-type', 'text/html');
  // res.send(fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf-8'));

  const aa = {
    name: 'aa'
  };

  aa.path = `[name]`;

  res.send(aa);

  res.end();
});

module.exports = router;
