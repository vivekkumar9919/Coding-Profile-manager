const router =require('express').Router();
const TlistController=require('../controller/TmakelistController');


// adding friends
router.post("/add_student",TlistController.addstudent)



// showing friends list
router.get("/showing_student/:email",TlistController.showstudent)


// delete  friend account
router.delete("/delete_student/:email/:username/:platform",TlistController.delete_student)


module.exports=router;