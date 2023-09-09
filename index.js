import express from "express";
import bodyParser from "body-parser";

const app=express();
const port=3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"));

let homeList=[];
let workList=[];


app.get("/",(req,res)=>{
    res.render("index.ejs",{homeList});
});
app.get("/work",(req,res)=>{
    res.render("work.ejs",{workList});
});

app.post("/add",(req,res)=>{
    var key = Object.keys(req.body)[0];
    var task=req.body[key];
    if(key==="hList"){
        if(task!=""){homeList.push(task);}
        res.redirect("/");
    }else{
        if(task!=""){workList.push(task);}
        res.redirect("/work");
    }
    
})
app.listen(port,(req,res)=>{
    console.log(`Server running on ${port}`);
})