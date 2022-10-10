import './App.css';
import { User } from './component/user/User';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom' 
import { Login } from './component/login/Login';
import Register from './component/register/Register';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { loadUser } from './Action/user';

function App() {
  const dispatch=useDispatch();

  

  useEffect(()=>{
     dispatch(loadUser());
  },[dispatch])

  const {isAuthitication}=useSelector((state)=>state.loadUser);
  console.log(isAuthitication);
  

  return (
    <Router>
      <Routes>
        <Route path='/' element={isAuthitication?<User/>:<Login/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
      </Routes> 
    </Router>
  );
}

export default App;
