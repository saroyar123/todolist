import React from 'react'
import { Button, Typography } from "@mui/material"
import { Link } from "react-router-dom";
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { userLogin,userAuth, userLoad } from '../../Action/user';
import "./Login.css"

export const Login = () => {

  const [email, setName] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const submitHandlar = async (e) => {
    e.preventDefault();
    await dispatch(userLogin(email, password));
    await dispatch( userLoad());
    dispatch(userAuth());
   
  }

  return (
    <div>
      <form onSubmit={submitHandlar} className="formClass">
        <input type="text" placeholder='email' value={email} onChange={(e) => setName(e.target.value)} />
        <input type="text" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} />
        <Button type='submit' className='button' variant="contained">login</Button>
        <Link to={"/register"} className="link"><Typography>create user</Typography></Link>
      </form>

    </div>
  )
}
