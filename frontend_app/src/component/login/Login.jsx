import React from 'react'
import { Button, Typography } from "@mui/material"
import { Link } from "react-router-dom";
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { userLogin } from '../../Action/user';
import { loadUser } from '../../Reducer/user';

export const Login = () => {

  const [email, setName] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const submitHandlar = async (e) => {
    e.preventDefault();
    await dispatch(userLogin(email, password));
    dispatch(loadUser());
  }

  return (
    <div>
      <form onSubmit={submitHandlar}>
        <input type="text" placeholder='email' value={email} onChange={(e) => setName(e.target.value)} />
        <input type="text" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} />
        <Button type='submit'>login</Button>
        <Link to={"/register"}><Typography>create user</Typography></Link>
      </form>

    </div>
  )
}
