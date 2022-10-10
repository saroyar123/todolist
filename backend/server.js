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

const router=express.Router();



router.post("/login",login);
router.post("/register",register);
router.get("/logout",Authitication,logout);
router.get("/deleteAccount",Authitication,deleteAccount);
router.post("/addTask",Authitication,addTasks);
router.delete("/deleteTask/:id",Authitication,deleteTask);
router.get("/getUserData",Authitication,getUserData);

app.use("/api",router);

app.listen(process.env.PORT,()=>{
    console.log("server is running at port 4000")
})