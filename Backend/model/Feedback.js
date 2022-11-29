const mongoose=require('mongoose');

const feedbackSchema=new mongoose.Schema({
   email:{type: String, required: true, index:true ,unique:true },
   rating:Number,
   comments:String,
});

// export schema
module.exports=mongoose.model("Feedback",feedbackSchema);