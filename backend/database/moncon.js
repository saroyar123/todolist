const mongoose=require("mongoose");
const uri="mongodb://localhost:27017/todolist";

exports.databaseconnect=()=>{
    mongoose.connect(uri,()=>{
        console.log("mosgoose connect to database");
    })
}

