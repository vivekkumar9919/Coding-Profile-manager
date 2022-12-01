const router =require('express').Router();
const codechefAPIController=require('../controller/codechefAPIController');

// user login 
router.get("/user/:username",codechefAPIController.codechefdata)


module.exports=router;