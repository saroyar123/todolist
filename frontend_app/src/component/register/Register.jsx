import { Button} from '@mui/material';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { userLoad, userRegister, userAuth } from '../../Action/user';
import { Link } from "react-router-dom";
import "./Register.css"

function Register() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const submitHandel = async (e) => {
    e.preventDefault();
    await dispatch(userRegister(name, email, password));
    await dispatch(userLoad());
    dispatch(userAuth())


  }

  return (
    <div >
      <form onSubmit={submitHandel} className="formClass">
        <input className='formItem' type="text" placeholder='name' value={name} onChange={(e) => setName(e.target.value)} />
        <input className='formItem' type="email" placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)} />
        <input className='formItem' type="password" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} />
        <Button className='formItem' variant="contained" type='submit'>Register</Button>
        <Link className='formItem link' to={"/"}>login</Link>
      </form>
    </div>
  )
}

export default Register;