const mongoose=require('mongoose');

const SfriendSchema=new mongoose.Schema({
   username:String,
   platform:String,
   email:String,
});

// export schema
module.exports=mongoose.model("AddFriendData",SfriendSchema);