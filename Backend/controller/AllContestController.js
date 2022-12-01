const fetch =  (...args) =>
import('node-fetch').then(({ default: fetch }) => fetch(...args));

// user login
const contestdata =async (req,res)=>{
     
    // try {
    //     const res = await fetch('https://competeapi.vercel.app/contests/upcoming');
    //     const data = await res.json();
    //     console.log(data);
    //     res.status(200).json(data)
    // }
        
    // catch(err){
    //     res.status(400).json({"error_occured":err})
    // }   
    
     await fetch('https://competeapi.vercel.app/contests/upcoming')
     .then(async (response)=>{
        const data = await response.json();
        console.log(data);
        res.status(200).json(data)
     })
     .catch((err)=>{
        res.status(400).json({"error_occured":err})
     })
    
    
}


// export 

module.exports={
    contestdata
   
}

// const fetch =  (...args) =>
// import('node-fetch').then(({ default: fetch }) => fetch(...args));


// async function fun() {

//     const res = await fetch('https://competeapi.vercel.app/contests/upcoming');
//     const data = await res.json();
//     console.log(data);
// }

// fun();