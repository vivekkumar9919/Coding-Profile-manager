const router =require('express').Router();
const loginController=require('../controller/loginController');


// user registration
router.post("/register",loginController.user_register)



// user login 
router.get("/login/:email",loginController.user_login)


// delete account
router.delete("/delete/:email",loginController.delete_account)


module.exports=router;