const mongoose=require('mongoose');

const profileSchema=new mongoose.Schema({
   email:String,
   name:String,
   gender:String,
   codechef:String,
   codeforces:String,
   leetcode:String,
   codechefurl:String,
   codeforcesurl:String,
   leetcodeurl:String,
   language:String,
   address:String,
   mobile:Number,
   skill:String,
   profession:String,
   designation:String,
});

// export schema
module.exports=mongoose.model("StudentProfileData",profileSchema);