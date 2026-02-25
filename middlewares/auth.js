const  {getUser}=require('../service/auth');

async function restrictTOloggedinuserOnly(req,res,next){
    const userUid = req.cookies?.uid;

    if(!userUid) return res.redirect('/login')

    const user = getUser(userUid)

    if(!user) return res.redirect('/login')

    req.user = user;

    console.log("User set in req:", req.user);  // 👈 move here

    next()
}

module.exports={
    restrictTOloggedinuserOnly,
}