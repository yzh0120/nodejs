var express = require('express');
var router = express.Router();

var loginA = require('./login.js')
router.post("/userLogin", (req,res)=>{
	loginA(req,res)
})

var getUser = require('./getUser.js')
router.post("/getUser", (req,res)=>{
	getUser(req,res)
})
///////////////////////////////
var loginA = require('./login.js')
router.get("/userLogin", (req,res)=>{
	loginA(req,res)
})

var getUser = require('./getUser.js')
router.get("/getUser", (req,res)=>{
	getUser(req,res)
})

//暴露接口
module.exports = router;   