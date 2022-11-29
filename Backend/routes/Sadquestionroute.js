const router =require('express').Router();
const addquestionController=require('../controller/SAddQuestionController');


// adding question
router.post("/",addquestionController.questionadd)



// showing question list
router.get("/showing_question/:email",addquestionController.show_question)


// delete  questions account
router.delete("/delete_questions/:id",addquestionController.delete_question)

// update question
router.put("/Update_question/:id",addquestionController.question_update)


module.exports=router;