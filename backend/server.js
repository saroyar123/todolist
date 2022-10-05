const express=require("express");
const { login, register } = require("./controller/login");
const {databaseconnect}=require("./database/moncon");
const User=require("./model/user")

databaseconnect();

const app=express();
app.use(express.json());

const heading=`<h1>hello</h1>`;
 
app.get("/",(req,res)=>{
  res.send(heading);
})

app.get("/login",login);
app.post("/register",register);

app.listen(4000,()=>{
    console.log("server is running at port 4000")
})