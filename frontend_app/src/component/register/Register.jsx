import { Button } from '@mui/material';
import React, { useState } from 'react'
// import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadUser, userRegister } from '../../Action/user';

function Register() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const submitHandel = async (e) => {
    e.preventDefault();
    await dispatch(userRegister(name, email, password));
    dispatch(loadUser());

  }

  return (
    <div>
      <form onSubmit={submitHandel}>
        <input type="text" placeholder='name' value={name} onChange={(e) => setName(e.target.value)} />
        <input type="email" placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} />
        <Button type='submit'>Register</Button>
      </form>
    </div>
  )
}

export default Register