const express=require('express');

const router=express.Router();

router.use((req,res,next)=>{
    console.log(req.method+' '+req.path+' '+req.ip);
    next();
});

router.get("/",(req,res)=>{
    res.send("Dogs Home Page");
});

router.get("/about",(req,res)=>{
    res.send("About Dogs");
});

module.exports=router;