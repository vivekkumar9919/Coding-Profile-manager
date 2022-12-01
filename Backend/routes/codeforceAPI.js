const router =require('express').Router();
const codeforcesAPIController=require('../controller/codeforcesAPIController');

// user login 
router.get("/user/:username",codeforcesAPIController.codeforcesdata)


module.exports=router;