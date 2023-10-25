import React, { useState } from 'react'
import './Task.css'

export default function Task({todoValue}) {
  const [store,setStore] = useState(JSON.parse(localStorage.getItem('todo'))||[])

  const remove = (value)=>{

    const filterData = store.filter((data,key)=>{
      return key != value
    })
    localStorage.setItem('todo',JSON.stringify(filterData));
    window.location.reload()
  }
  return (
   <div>
   {todoValue.map((values,key)=>(

     <div class="card mt-3">
     <div class="card-body delete">
      <h6>Task-{key+1}</h6>
    <label>{values.title}</label>
    <label>{values.status}</label>
    <div className='icon'>
    <a href="#" class="card-link"><i class="bi bi-trash " onClick={()=>{remove(key)}}></i></a>
    <a href="#" class="card-link"><i class="bi bi-pencil-square"></i></a>
    </div>
  </div>
</div> 
 ))}
 </div>


  )
}
