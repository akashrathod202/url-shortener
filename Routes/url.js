const express=require('express')
const {handleshorturlgenrater,handlegetmethod}=require('../controller/url')
const router=express.Router();

router.post('/',handleshorturlgenrater)

router.get("/:shortId",handlegetmethod);



module.exports=router;