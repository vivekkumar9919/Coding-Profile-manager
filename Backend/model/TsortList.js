const mongoose=require('mongoose');

const TsortlistSchema=new mongoose.Schema({
   username:String,
   status:String,
   email:String,
   date:{type: Date, default: Date.now}
});

// export schema
module.exports=mongoose.model("SortlistStudent",TsortlistSchema);