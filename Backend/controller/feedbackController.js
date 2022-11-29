
const feedbackform=require("../model/Feedback")

// send feedback
const send_feedback=async (req,res)=>{
    const details=new feedbackform({
        email:req.body.email,
        rating:req.body.rating,
        comments:req.body.comments
    });
    try {
        const savedetails=await details.save();
        res.json(savedetails);
    }
    catch(err){
        res.status(400).send(err);
    }
}


// shows feedback
const show_feedback =async (req,res)=>{
    try {
        const feedbackdata=await feedbackform.find().limit(5);
        // console.log("user " +user);
        if(feedbackdata.length!=0){
            res.status(200).json(feedbackdata)
        }
        else{
            console.log("No feedback found");
            res.status(404).json({'notfound':'page not found'})
        }
        // res.status(200).json(user)
    }
    catch(err){
        res.status(400).json({"error_occured":err})
    }
}





// export 

module.exports={
    send_feedback,
    show_feedback,
   
}