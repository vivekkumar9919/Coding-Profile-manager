

const sortlistdetails=require("../model/TsortList")

// add friends
const addstudent =async (req,res)=>{
    const details=new sortlistdetails({
        email:req.body.email,
        status:req.body.status,
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


// show all student
const showallstudent =async (req,res)=>{
    try {
        const user=await sortlistdetails.find({email:req.params.email})
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
// show selected student
const selectedstudent =async (req,res)=>{
    try {
        const user=await sortlistdetails.find({email:req.params.email ,status:req.params.status})
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
       const deleteuser=await sortlistdetails.findOneAndDelete({email:req.params.email,username:req.params.username})
       res.json(deleteuser)
    }
    catch(err){
        res.json({message:err});
    }
}



// export 

module.exports={
    addstudent,
    showallstudent,
    selectedstudent,
    delete_student,
}