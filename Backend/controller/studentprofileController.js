
const profiledetails=require("../model/StudentProfile")

// make profile
const makeprofile =async (req,res)=>{
    const details=new profiledetails({
        email:req.body.email,
        name:req.body.name,
        gender:req.body.gender,
        codechef:req.body.codechef,
        codeforces:req.body.codeforces,
        leetcode:req.body.leetcode,
        codechefurl:req.body.codechefurl,
        codeforcesurl:req.body.codeforcesurl,
        leetcodeurl:req.body.leetcodeurl,
        language:req.body.language,
        address:req.body.address,
        mobile:req.body.mobile,
        skill:req.body.skill,
        profession:req.body.profession,
        designation:req.body.designation,
    });
    try {
        const savefriend=await details.save();
        res.json(savefriend);
    }
    catch(err){
        res.status(400).send(err);
    }
}


// show profile
const showprofile =async (req,res)=>{
    try {
        const user=await profiledetails.find({email:req.params.email})
        if(user.length!=0){
            console.log("Showing profile")
            res.status(200).json(user)
        }
        else{
            console.log("No profile found");
            res.status(404).json({'notfound':'friend not found'})
        }
        // res.status(200).json(user)
    }
    catch(err){
        res.status(400).json({"error_occured":err})
    }
}

// delete accout
const delete_profile=async (req,res)=>{
    try {
       const deleteprofile=await profiledetails.findOneAndDelete({email:req.params.email})
       res.json(deleteprofile)
    }
    catch(err){
        res.json({message:err});
    }
}



// update profile

const update_profile = async (req, res) => {
    try {
        const updateddata = {
            name:req.body.name,
            gender:req.body.gender,
            codechef:req.body.codechef,
            codeforces:req.body.codeforces,
            leetcode:req.body.leetcode,
            codechefurl:req.body.codechefurl,
            codeforcesurl:req.body.codeforcesurl,
            leetcodeurl:req.body.leetcodeurl,
            language:req.body.language,
            address:req.body.address,
            mobile:req.body.mobile,
            skill:req.body.skill,
            profession:req.body.profession,
            designation:req.body.designation,
        };
    
        const updatedprofile = await profiledetails.findOneAndUpdate(
            {email:req.params.email},
            updateddata
        );
        res.json(updatedprofile);
      } catch (error) {
        res.json({ message: error });
      }
}



// export 

module.exports={
    makeprofile,
    showprofile,
    delete_profile,
    update_profile
}