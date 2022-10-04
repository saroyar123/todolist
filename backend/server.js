const express=require("express");
const { login } = require("./controller/login");
const {databaseconnect}=require("./database/moncon");
const User=require("./model/user")

databaseconnect();

const app=express();
app.use(express.json());

const heading=`<h1>hello</h1>`;
 
app.get("/",(req,res)=>{
  res.send(heading);
})

app.post("/login",login
// async(req,res)=>{
//     const name=req.body.name;
//         const password=req.body.password;

//         const user=await User.create({name:name,password:password});
//         await user.save();

//         res.status(200).json({
//             success:true,
//             message:"you are login"
//         })
// }
);

app.listen(4000,()=>{
    console.log("server is running at port 4000")
})