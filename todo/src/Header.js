import React, { useEffect, useState } from 'react'
import './Header.css'
import Task from './Task'
import Addtask from './Addtask'
export default function Header() {

  const [get,setGet]=useState([])

  useEffect(() => {
    const value = JSON.parse(localStorage.getItem('todo'));
    setGet(value)
  },[]) 
  

  return (
    <>
      <div className='center mt-3'>
        <center><h3>TODO LIST</h3></center>
        <div className='firstrow'>
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
            Add Task
          </button>
          <select class=" dropdown" name='All'>
            <option selected>All</option>
            <option>complete</option>
            <option>incomplete</option>
          </select>
        </div>
        <Task todoValue={get}/>
      </div>

{/*////////////////// modal/////////////// */}
<Addtask/>

     
    </>
  )
}
