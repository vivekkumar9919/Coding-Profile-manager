
const addquestion=require("../model/SaddQuestion")

// add question
const questionadd =async (req,res)=>{
    const questioninfo=new addquestion({
        email:req.body.email,
        question_Description:req.body.question_Description,
        platform:req.body.platform,
        note:req.body.note,
        topic:req.body.topic,
        question_link:req.body.question_link,
        need_pratice:req.body.need_pratice

    });
    try {
        const savequestion=await questioninfo.save();
        res.json(savequestion);
    }
    catch(err){
        res.status(400).send(err);
    }
}


// show friend
const show_question =async (req,res)=>{
    try {
        const user=await addquestion.find({email:req.params.email})
        console.log("user " +user);
        if(user.length!=0){
            console.log("Showing question")
            res.status(200).json(user)
        }
        else{
            console.log("No question found");
            res.status(404).json({'notfound':'question not found'})
        }
        // res.status(200).json(user)
    }
    catch(err){
        res.status(400).json({"error_occured":err})
    }
}

// delete accout
const delete_question=async (req,res)=>{
    try {
       const deletequestion=await addquestion.findOneAndDelete({_id:req.params.id})
       res.json(deletequestion)
    }
    catch(err){
        res.json({message:err});
    }
}

// update question
const question_update = async (req, res) => {
    try {
        const Question_updated = {
            email:req.body.email,
            question_Description:req.body.question_Description,
            platform:req.body.platform,
            note:req.body.note,
            topic:req.body.topic,
            question_link:req.body.question_link,
            need_pratice:req.body.need_pratice
        };
    
        const updated = await addquestion.findByIdAndUpdate(
          { _id: req.params.id },
          Question_updated
        );
        res.json(updated);
      } catch (error) {
        res.json({ message: error });
  
      }
    }
// export 

module.exports={
    questionadd,
    show_question,
    delete_question,
    question_update,
}