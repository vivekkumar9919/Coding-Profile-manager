const router =require('express').Router();
const leetcodeAPIContoller=require('../controller/leetcodeAPIContoller');

// user login 
router.get("/user/:username",leetcodeAPIContoller.leetcodedata)


module.exports=router;