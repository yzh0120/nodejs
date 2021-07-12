var express = require('express');
var router = express.Router();


router.post("/pager", (req, res) => {
  require('./pager.js')(req, res)
})



//暴露接口
module.exports = router;
