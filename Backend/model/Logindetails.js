const mongoose=require('mongoose');

const loginSchema=new mongoose.Schema({
   name:String,
   email:{type: String, required: true, index:true ,unique:true },
   password:{type: String ,required :true},
   gender:String,
});

// export schema
module.exports=mongoose.model("logindata1",loginSchema);