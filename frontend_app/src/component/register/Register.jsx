import { Button } from '@mui/material';
import React, { useState } from 'react'
import { useEffect } from 'react';

function Register() {

    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const  submitHandel=(e)=>{
        e.preventdefault();
        console.log("hehe")
    }

    useEffect(()=>{
        console.log(name);
        console.log(email);
        console.log(password)
},[name,email,password]);


  return (
    <div>
        <form onSubmit={submitHandel}>
          <input type="text" placeholder='name' value={name} onChange={(e)=>setName(e.target.value)}/>
          <input type="email" placeholder='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
          <input type="password" placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
          <Button type='submit'>Register</Button>
        </form>
    </div>
  )
}

export default Register