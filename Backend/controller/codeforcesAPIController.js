const fetch =  (...args) =>
import('node-fetch').then(({ default: fetch }) => fetch(...args));

// user login
const codeforcesdata =async (req,res)=>{
         
    // try {
    //     const res = await fetch('https://competeapi.vercel.app/user/codeforces/'+req.params.username);
    //     const data = await res.json();
    //     console.log(data[0]);
    //     res.status(200).json(data[0]);
    // }
        
    // catch(err){
    //     res.status(400).json({"error_occured":err})
    // }

     await fetch('https://competeapi.vercel.app/user/codeforces/'+req.params.username)
    .then(async (response)=>{
        const data = await response.json();
        console.log(data[0]);
        res.status(200).json(data[0]);
    })
    .catch((err)=>{
        res.status(400).json({"error_occured":err})
    })
  
    
}


// export 

module.exports={
    codeforcesdata
   
}





