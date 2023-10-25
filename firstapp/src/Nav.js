import React from 'react'
import './Nav.css'
export default function Nav() {
  return (
    <div className='bb'>
  <nav class="navbar navbar-expand-lg navbar-light bg ">
  <a class="navbar-brand text-white" href="#">VK POLIS</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse " id="navbarNavAltMarkup">
    <div class="navbar-nav mx-auto">
      <a class="nav-link active text-white" href="#">Home <span class="sr-only">(current)</span></a>
      <a class="nav-link text-white" href="/Login">login</a>
      <a class="nav-link text-white" href="/">signup</a>
      <a class="nav-link text-white" href='/users'>user</a>
    </div>
  </div>
</nav>

    </div>
  )
}
