const { default: axios } = require("axios");

// user login
const codechefdata =async (req,res)=>{
          console.log(req.params.username)
        await axios.get('https://competeapi.vercel.app/user/codechef/'+req.params.username)
       .then((response)=>{
        res.status(200).json(response.data);
       })
        
    .catch((err)=>{
        res.status(400).json({"error_occured":err})
    })
       
    
}


// export 

module.exports={
    codechefdata
   
}