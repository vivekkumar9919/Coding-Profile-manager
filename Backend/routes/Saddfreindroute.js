const router =require('express').Router();
const friendController=require('../controller/SaddfriendController');


// adding friends
router.post("/add_friend",friendController.friendadd)



// showing friends list
router.get("/showing_friend/:email",friendController.showfriend)


// delete  friend account
router.delete("/delete_friend/:email/:username/:platform",friendController.delete_friend)


module.exports=router;