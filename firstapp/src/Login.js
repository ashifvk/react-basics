import React, { useState } from 'react'
import './Login.css';
import Nav from './Nav';
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Login() {
const navigate = useNavigate()
const [input,setInput] = useState({
  username:'',
  password:''
})


const inputChange = (event)=>{

const {name,value} = event.target

setInput({...input,[name]:value})
}

const submit = ()=>{
  
  axios.post('http://127.0.0.1:8000/api/LoginUserAPIView',input).then((response)=>{
console.log(response);
localStorage.setItem('user_id', JSON.stringify(response.data.data.user_id))
localStorage.setItem('login_id', JSON.stringify(response.data.data.login_id))
localStorage.setItem('username', JSON.stringify(response.data.data.username))
navigate('/')
  }).catch((error)=>{console.log(error.response.data.data);
    toast.success(error.response.data.data, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });
  })
}

  return (
    <>
     <Nav/>
  
    <div className='main'>
     
    <div className='box'>
      <h2>Login</h2>
     <ToastContainer/>
      <input type="text" name='username' className='mt-2' onChange={inputChange}></input><br></br><br></br>
    
      <input type="password"  name='password' onChange={inputChange}></input><br></br><br></br>
      <input type='button' onClick={submit} className='btn' value='sign in'></input>
    </div>
    </div>
    </>
  )
}

