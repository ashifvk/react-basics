import React, { useEffect, useState } from 'react'
import './Users.css'
import Nav from './Nav'
import axios from 'axios'

export default function Users() {

  const [state, setState] = useState([])
  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/getregister').then((response) => {
      console.log(response);
      setState(response.data.data)
      
    }).catch((error)=>{console.log(error);})
  }, [])
  console.log(state);






  return (
    <div className='one'>
      <Nav />
      <table class="table table-striped table text-white">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Contact</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>



          {state?.map((data,key)=>(
          <tr>
            <th scope="row">{key+1}</th>
            <td>{data.name}</td>
            <td>{data.contact}</td>
            <td>{data.email}</td>
          </tr>

          ))}

        </tbody>
      </table>

    </div>
  )
}
