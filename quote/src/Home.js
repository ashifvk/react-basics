import React, { useEffect, useState } from 'react'
import './Home.css'
import axios from 'axios'

export default function Home() {

  const [state,inputState] = useState({})
  const [state2,inputState2] = useState(JSON.parse(localStorage.getItem('bookmark'))||[])

  const submit = ()=>{
  
    axios.get('https://api.quotable.io/random').then((response)=>{
console.log(response);
inputState(response.data)
    }).catch((error)=>{console.log(error);
    })
  }

  const book =()=>{
   inputState2([...state2,state])
  }
  useEffect(() => {
  
    localStorage.setItem('bookmark', JSON.stringify(state2));
    console.log(state2);
  }, [state2]);

  return (
    <div className='main'>
        <nav class="navbar navbar-expand-lg navbar-light">
  <div class="container">
    <a class="navbar-brand" href="/">Home</a>
    <a class="navbar-brand" href="/Bookmark">Bookmarks</a>
  </div>
</nav>
<div className='yes'>
<div class="card">
  <div class="card-header">
    <a href='#' class="card-link text-white" onClick={book}><i class="bi bi-bookmarks"></i></a>
  
  </div>
  <div class="card-body">
    <blockquote class="blockquote mb-0 text-white">
      <p>{state.content}</p>
      <footer class="blockquote-footer text-white mt-5 text-center">{state.author} </footer>
    </blockquote>
  </div>
</div>
</div>
<center> <button class="bg-cyan-500 hover:bg-cyan-600 ... mt-5 bt" onClick={submit}>Next Quote</button></center>

      
    </div>
  )
}
