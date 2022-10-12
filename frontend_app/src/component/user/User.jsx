import React from 'react'
import {Avatar, Button} from "@mui/material"
import { Task } from '../task/Task'
import { useDispatch, useSelector } from 'react-redux'
import { addTask, loadUser } from '../../Action/user'
import { useState } from 'react'

export const User = () => {

  const dispatch=useDispatch();

  const [title,setTitle]=useState("");
  const [description,setDescription]=useState("");

  const {name}=useSelector((state)=>state.loadUser.user);
  const submithandlar=async(e)=>{
    e.preventDefault();
    await dispatch(addTask(title,description));
    dispatch(loadUser());
  }

  const {todolist}=useSelector((state)=>state.loadUser.user)


  return (
    <div className='user'>
        <div className='header'>
          <Avatar/>
          <h1>{name}</h1>
        </div>
        <div className='taskCreate'>
          <form className='task' onSubmit={submithandlar}>
            <input type="text" placeholder='title' value={title} onChange={(e)=>setTitle(e.target.value)}/>
            <textarea placeholder='description' value={description} onChange={(e)=>setDescription(e.target.value)}/>
            <Button type='submit'>add</Button>
          </form>
        </div>
        <div className="taskShow">
          {
            todolist && todolist.length > 0?(
              todolist.map((task)=>(
                <Task
                key={task._id}
                title={task.title}
                description={task.description}
                />  
              ))
            ):(
              <h2>you have to task to do</h2>
            )
          }
        </div>
    </div>
  )
}
