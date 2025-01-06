const express=require("express")

const  app=express();

app.get('',(req,respo)=>{
    respo.send("hello from server")

})

app.get('/contact',(req,respo)=>{
    respo.send("hello from server contact")

})

app.listen(2000 ,()=>{
    console.log("app is runninig on port 2000")

})

