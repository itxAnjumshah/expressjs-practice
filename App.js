const express=require("express");

const app=express();

app.get( "", (req,resp)=>{
    resp.send("Good eveninig from express s")


})
app.listen(2000);