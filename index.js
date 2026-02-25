const express=require("express")
const app=express()
const path=require("path")
const cookieParse=require('cookie-parser')
const staticurl=require('./Routes/staticurl');
const urlRoute=require('./Routes/url')
const userroute=require('./Routes/user')
const URL = require("./models/urls");
const {restrictTOloggedinuserOnly} = require("./middlewares/auth")


const port=8000
const {connectToMongodb}=require('./coneection');
const cookieParser = require("cookie-parser");
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser())
 

// this is the middelware that help to exprees to read the data from the html f
// form submissions

app.set("view engine","ejs")

// it says the computer that i am using the view engine ejs
app.set("views",path.resolve("./views"))

// and here using path here it says that all views are store in views


// app.get("/test",async(req,res)=>{
//     const allUrls =await URL.find({});
//     return res.render('home',
//       {  urls:allUrls})
// })


app.use('/',staticurl)
app.use('/user',userroute)
app.use("/url",restrictTOloggedinuserOnly,urlRoute)

 

 
  


connectToMongodb('mongodb://127.0.0.1:27017/UrlShortner').then(()=>console.log("mongodb connected"))
 

app.listen(port,()=>console.log("the server is runing on port 8000"))