const router =require('express').Router();
const AllContestController=require('../controller/AllContestController');

// user login 
router.get("/upcoming",AllContestController.contestdata)


module.exports=router;