const router =require('express').Router();
const profileController=require('../controller/studentprofileController');


// make profile
router.post("/make_profile",profileController.makeprofile)

// update profile
router.put("/update/:email",profileController.update_profile)

// showing profile
router.get("/showing_profile/:email",profileController.showprofile)


// delete  profile
router.delete("/delete_profile/:email",profileController.delete_profile)


module.exports=router;