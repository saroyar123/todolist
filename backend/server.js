const express=require("express");
const { Authitication } = require("./config/auth");
const { login, register, logout, deleteAccount, addTasks, deleteTask, getUserData } = require("./controller/userFuntions");
const {databaseconnect}=require("./database/moncon");
const User=require("./model/user");
const cookieparser=require("cookie-parser");
// const dotenv=require("dotenv");
if(process.env.NODE_ENV!=="production")
{
    require("dotenv").config({path:"./config/config.env"});
}

databaseconnect();

const app=express();
app.use(express.json());
app.use(cookieparser());


const heading=`<h1>hello</h1>`;
 
app.get("/",Authitication,(req,res)=>{
  res.send(heading);
})

app.get("/login",login);
app.post("/register",register);
app.get("/logout",Authitication,logout);
app.get("/deleteAccount",Authitication,deleteAccount);
app.post("/addTask",Authitication,addTasks);
app.delete("/deleteTask/:id",Authitication,deleteTask);
app.get("/getUserData",Authitication,getUserData);

app.listen(process.env.PORT,()=>{
    console.log("server is running at port 4000")
})