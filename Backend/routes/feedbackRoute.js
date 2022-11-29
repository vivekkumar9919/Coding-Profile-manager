const router =require('express').Router();
const feedbackcontroller=require('../controller/feedbackController');


// send feedback
router.post("/send_feedback",feedbackcontroller.send_feedback)



// show feedback
router.get("/show_feedback",feedbackcontroller.show_feedback)




module.exports=router;