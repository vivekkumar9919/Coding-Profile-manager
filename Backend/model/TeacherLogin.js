const mongoose=require('mongoose');

const teacherloginSchema=new mongoose.Schema({
   name:String,
   email:{type: String, required: true, index:true ,unique:true },
   password:String,
   jobid:String,
   gender:String,
});

// export schema
module.exports=mongoose.model("logindata2",teacherloginSchema);