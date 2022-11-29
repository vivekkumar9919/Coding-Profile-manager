
const TeacherLogin=require("../model/TeacherLogin")

// user registration
const user_register=async (req,res)=>{
    const details=new TeacherLogin({
        email:req.body.email,
        name:req.body.name,
        password:req.body.password,
        jobid:req.body.jobid,
        gender:req.body.gender
    });
    try {
        const savedetails=await details.save();
        res.json(savedetails);
    }
    catch(err){
        res.status(400).send(err);
    }
}


// user login
const user_login =async (req,res)=>{
    try {
        const user=await TeacherLogin.find({email:req.params.email})
        // console.log("user " +user);
        if(user.length!=0){
            console.log("logedin")
            res.status(200).json(user)
        }
        else{
            console.log("user not found");
            res.status(404).json({'notfound':'page not found'})
        }
        // res.status(200).json(user)
    }
    catch(err){
        res.status(400).json({"error_occured":err})
    }
}

// delete accout
const delete_account=async (req,res)=>{
    try {
       const deleteuser=await TeacherLogin.findOneAndDelete({email:req.params.email})
       res.json(deleteuser)
    }
    catch(err){
        res.json({message:err});
    }
}



// export 

module.exports={
    user_register,
    user_login,
    delete_account,
}