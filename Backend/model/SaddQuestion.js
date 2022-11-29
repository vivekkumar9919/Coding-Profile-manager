const mongoose=require('mongoose');

const SaddQuesSchema=new mongoose.Schema({
   email:String,
   question_Description:String,
   platform:String,
   note:String,
   topic:String,
   question_link:String,
   need_pratice:String
});

// export schema
module.exports=mongoose.model("AddQuestionData",SaddQuesSchema);