const express = require("express")
const router =express.Router()

router.get('/', (req, res) => {
    return res.render('home')
})


router.post("/",(req,res)=>{
    const {url} =req.body;
    console.log("Revised URL:",url);

    return res.send(`URL recived :${url}`)
})

router.get('/signup',(req,res)=>{
    return res.render('signup')
})


router.get('/login',(req,res)=>{
    return res.render('login')
})

module.exports=router



