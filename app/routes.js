const express=require('express');
const path=require('path');

const router=express.Router();

router.use((req,res,next)=>{
    console.log(req.method+' '+req.path+' '+req.ip);
    next();
});

/*We use the path module available in Node.js as it helps in providing platform-specific
path-separators/delimeters accoding to the OS/platform it is currently being run on.
For windows: Path Separators can be both / or \ but for Linux: It is /.
However, in windows system, the path module only adds \ not /.*/

/*The path.join() method joins all given path segments together using the platform-specific 
separator as a delimiter, then normalizes the resulting path.*/
router.get("/",(req,res)=>{
    //res.sendFile(path.join(__dirname,"../views/index.html"));
    //Express loads ejs internally in views folder by default i.e. "D:\BHAI\Backend Web Development\Express Beginner\Standard way of using Express\modular-routing-and-ejs\views", so we don't actually have to do ../pages or /pages
    //If we do /pages then it would mean go to root directory again and try to find pages folder (which is not in the root directory)
    /*
    We could do:
    res.render('pages/index');
    But,We use join as it puts platform-specific separator
    */
   res.render(path.join('pages','/home'));
});

router.get("/about",(req,res)=>{
    //Fake Database just for the purpose of this exercise
    var teamArray=[
        {name: 'Saroj', email: 'saroz.shah@gmail.com', avatar: 'http://place-puppy.com/300x300'},
        {name: 'Rahul', email: 'rs9841@gmail.com', avatar: 'http://place-puppy.com/301x301'},
        {name: 'Anmol', email: 'anmolrayamajhi69@gmail.com', avatar: 'http://place-puppy.com/302x302'}
    ];
    res.render(path.join('pages','/about'), {team: teamArray});
});

router.get("/contact",(req,res)=>{
    res.render(path.join('pages','/contact'));
});

router.post("/contact",(req,res)=>{
    res.send("Thank you for contacting us, "+req.body.name+". We'll soon contact you asap. Be sure to check your mail: "+req.body.email+".");
});

module.exports=router;