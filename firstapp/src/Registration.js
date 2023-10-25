import React, { useState } from 'react'
import './Registration.css';
import Nav from './Nav';
import axios from 'axios'

export default function Registration() {

const [input,setInput] = useState({
  fullname :'',
  contact :'',
  email :'',
  username:'',
  password:''
})

const inputChange = (event)=>{
  const {name,value} = event.target
  setInput({...input,[name]:value})

}
  const submit = ()=>{
  
    axios.post('http://127.0.0.1:8000/api/registerdata',input).then((response)=>{
console.log(response);
setInput(response.data)
    }).catch((error)=>{console.log(error);
    })
    window.location.reload()
  }

  return (
<div className='full'>
  <Nav/>
    <div className='back'>
        <h2 className='reg text-center'>Register Your details</h2><br></br>
       
        <div className='div1'>
        <label>Name</label>
   <input className='name'  type='text' name='name' onChange={inputChange}></input><br></br>
   <label>Phone number</label>
   <input type='tel' name='contact'onChange={inputChange}></input><br></br>
   <label>Email</label>
   <input type='email' name='email'onChange={inputChange}></input><br></br>
   <label>Username</label>
   <input type='text' name='username' onChange={inputChange}></input><br></br>
   <label>password</label>
   <input type='text' name='password' onChange={inputChange}></input><br></br>
   {/* <input type='text'placeholder='Confirm password'></input><br></br> */}
   <input type='button' className='bt' value='sign up' onClick={submit}></input>
   </div>


    </div>
    </div>
  )
}
