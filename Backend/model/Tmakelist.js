const mongoose=require('mongoose');

const TlistSchema=new mongoose.Schema({
   username:String,
   platform:String,
   email:String,
});

// export schema
module.exports=mongoose.model("TeacherStudentList",TlistSchema);