const express=require('express');
const path=require('path');
//Using express-ejs-layouts which allows us to use a base layout so that we don't have to repeat our html code a bunch of times.
//We also use ejs as the templating language so that we can pass data to our views easily.
const expressLayouts=require('express-ejs-layouts');
const app=express();

//Use ejs and express-ejs-layouts
app.set('view engine', 'ejs');
//This should always come before we use our router as we want to first look into the layout.ejs then afterwards go into the pages section
//Express looks for layouts at  "D:\BHAI\Backend Web Development\Express Beginner\Standard way of using Express\modular-routing-and-ejs\views", so make sure layout.ejs is inside views and not inside another folder in views like /views/layouts/layout.ejs
//And name should also be layout.ejs not layouts.ejs
//But we can change it. By using: res.render(path.join('pages','/index'), {layout: 'layouts.ejs'}); in the routes.js module/file. For each individual page, we can define a custom layout file.
/*
We could also set a custom layout using just one line of code
app.set('layout', 'layouts'); this uses layouts.ejs not layout.ejs
OR, to use layout stored in a separate file, we use
app.set('layout', 'layouts/myLayout'); this uses myLayout.ejs stored in layouts folder in views directory i.e /views/layouts/myLayout
*/
app.use(expressLayouts);

//Routes
const router=require('./app/routes');
const dogs=require("./app/routes2");

//Mounts all of the Route handlers of routes.js on "/" endpoint
app.use("/",router);

//Mounts all of the Route handlers of routes2.js on "/dogs" endpoint i.e. "/dogs/about" endpoint sends "About Dogs" Response
app.use("/dogs",dogs);

//Send Static Files
app.use("/public",express.static(path.join(__dirname,"public")));

app.listen(3000,()=>{
    console.log('App is Listening on Port 3000');
});