import React, { useEffect, useState } from 'react'
import './Bookmark.css'

export default function Bookmark() {

  const [get,setGet]=useState( JSON.parse(localStorage.getItem('bookmark')))

  return (
    <div className='main'>
       <nav class="navbar navbar-expand-lg navbar-light">
  <div class="container">
    <a class="navbar-brand" href="/">Home</a>
    <a class="navbar-brand" href="/Bookmark">Bookmarks</a>
  </div>
</nav>
<div className='yes'>
  {get.map((data,key)=>(
    <div class="card mt-5">
  <div class="card-header">
    Quote
  </div>
  <div class="card-body">
    <blockquote class="blockquote mb-0 text-white">
      <p>{data.content}</p>
      <footer class="blockquote-footer text-white mt-5 text-center">{data.author}</footer>
    </blockquote>
  </div>
</div>
  ))}
</div>
   </div>
 )
}
