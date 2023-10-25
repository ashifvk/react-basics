import React, { useEffect, useState } from 'react'
import './Addtask.css'
export default function Addtask() {

const [store,setStore] = useState(JSON.parse(localStorage.getItem('todo'))||[])

const [input,setInput] = useState({
title:'',
status:''
})

const inputchange = (event)=>{
const{name,value} = event.target
setInput({...input,[name]:value})

}

const submit = ()=>{
console.log(input);
setStore([...store,input])
window.location.reload()

console.log(store);
}

useEffect(() => {
  localStorage.setItem('todo', JSON.stringify(store));
}, [store]);

  return (

<>
{/* <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
            Add Task
          </button> */}
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Add TODO</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">

              <form>
                <div class="form-group">
                  <label for="exampleFormControlInput1">Title</label>
                  <input type="email" class="form-control" id="exampleFormControlInput1" name='title' onChange={inputchange} required></input>
                </div>
                <div class="form-group">
                  <label for="exampleFormControlSelect1">Status</label>
                  <select class="form-control" id="exampleFormControlSelect1" name='status' onChange={inputchange} required>
                    <option selected value='' disabled>choose...</option>
                    <option value='incomplete'>incomplete</option>
                    <option value='complete'>complete</option>
                  </select>
                </div>
              </form>

            </div>
            <div class="modal-footer ml-auto">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
              <button type="button" class="btn btn-primary" onClick={submit}>Add</button>
            </div>
          </div>
        </div>
      </div>
     



</>

  )
}
