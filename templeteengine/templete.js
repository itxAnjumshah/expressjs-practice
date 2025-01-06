const express=require("express");

const app=express();

app.set('view engine', 'ejs')

app.get('/welcome',(req,res)=>{
    res.render('welcome')
})
app.listen(5000,()=>{
    console.log("server is  runnig ")
})