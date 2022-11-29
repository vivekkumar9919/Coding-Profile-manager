const router =require('express').Router();
const TloginController=require('../controller/TloginController');


// user registration
router.post("/register",TloginController.user_register)



// user login 
router.get("/login/:email",TloginController.user_login)


// delete account
router.delete("/delete/:email",TloginController.delete_account)


module.exports=router;