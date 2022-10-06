const mongoose = require("mongoose");

const taskSchema=new mongoose.Schema({
   title:{
      type:String,
   },
   description:{
      type:String,
   },
   deadline:{
      type:Date,
      default:new Date(Date.now()+24*60*60*1000)
   }
});

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  todolist:[taskSchema]
});

module.exports = mongoose.model("User", UserSchema);
