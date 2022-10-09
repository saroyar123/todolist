import React from 'react'
import {Avatar} from "@mui/material"
import { Task } from '../task/Task'

export const User = () => {
  return (
    <div className='user'>
        <div className='header'>
          <Avatar/>
          <h1>name</h1>
        </div>
        <div className='taskCreate'>
          <form className='task'>
            <input type="text" placeholder='title'/>
            <textarea placeholder='description'/>
          </form>
        </div>
        <div className="taskShow">
          <Task/>
        </div>
    </div>
  )
}
