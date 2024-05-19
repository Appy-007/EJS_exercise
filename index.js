import express from "express";
import bodyParser from "body-parser";
const app=express();
app.use(bodyParser.urlencoded({extended:true}));
const port=7000;
const date = new Date();

app.get("/", (req,res)=>{
    const data={
        title :"EJS tags",
        seconds: date.getSeconds(),
        items: ["apple","banana","cherry"],
        htmlContent : "<em>This is em text </em>",
    };
    res.render("index.ejs",data);
})

app.get("/forms",(req,res)=>{
    res.render("form.ejs");
})

app.post("/forms/submit",(req,res)=>{
    const letters=req.body["fName"].length + req.body["lName"].length;
    res.render("form.ejs",{numberofletters:letters});
})


app.listen(port,(req,res)=>{
    console.log(`Server listening at port ${port}`);
})