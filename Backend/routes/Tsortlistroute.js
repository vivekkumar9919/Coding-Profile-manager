const router =require('express').Router();
const TsorlistController=require('../controller/TsortlistController');


// saving the list of student
router.post("/savelist",TsorlistController.addstudent)



// showing the list of selected and non selected list
router.get("/all_student/:email",TsorlistController.showallstudent)

// showing the list of selected 
router.get("/selected_student/:email/:status",TsorlistController.selectedstudent)


// delete  friend account
router.delete("/delete_student/:email/:username",TsorlistController.delete_student)


module.exports=router;