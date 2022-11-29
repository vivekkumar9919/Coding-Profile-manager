
const addfrienddetails=require("../model/SaddFriend")

// add friends
const friendadd =async (req,res)=>{
    const details=new addfrienddetails({
        email:req.body.email,
        platform:req.body.platform,
        username:req.body.username
    });
    try {
        const savefriend=await details.save();
        res.json(savefriend);
    }
    catch(err){
        res.status(400).send(err);
    }
}


// show friend
const showfriend =async (req,res)=>{
    try {
        const user=await addfrienddetails.find({email:req.params.email})
        if(user.length!=0){
            console.log("Showing friend")
            res.status(200).json(user)
        }
        else{
            console.log("No friend found");
            res.status(404).json({'notfound':'friend not found'})
        }
        // res.status(200).json(user)
    }
    catch(err){
        res.status(400).json({"error_occured":err})
    }
}

// delete accout
const delete_friend=async (req,res)=>{
    try {
       const deleteuser=await addfrienddetails.findOneAndDelete({email:req.params.email,username:req.params.username,platform:req.params.platform})
       res.json(deleteuser)
    }
    catch(err){
        res.json({message:err});
    }
}



// export 

module.exports={
    friendadd,
    showfriend,
    delete_friend,
}