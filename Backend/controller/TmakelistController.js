

const addlistdetails=require("../model/Tmakelist")

// add friends
const addstudent =async (req,res)=>{
    const details=new addlistdetails({
        email:req.body.email,
        platform:req.body.platform,
        username:req.body.username
    });
    try {
        const savestudent=await details.save();
        res.json(savestudent);
    }
    catch(err){
        res.status(400).send(err);
    }
}


// show friend
const showstudent =async (req,res)=>{
    try {
        const user=await addlistdetails.find({email:req.params.email})
        if(user.length!=0){
            console.log("Showing student")
            res.status(200).json(user)
        }
        else{
            console.log("No Student found");
            res.status(404).json({'notfound':'Student not found'})
        }
        // res.status(200).json(user)
    }
    catch(err){
        res.status(400).json({"error_occured":err})
    }
}

// delete accout
const delete_student=async (req,res)=>{
    try {
       const deleteuser=await addlistdetails.findOneAndDelete({email:req.params.email,username:req.params.username,platform:req.params.platform})
       res.json(deleteuser)
    }
    catch(err){
        res.json({message:err});
    }
}



// export 

module.exports={
    addstudent,
    showstudent,
    delete_student,
}