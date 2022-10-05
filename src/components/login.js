import React, {useState} from 'react'
import axios from 'axios'

import axiosWithAuth from '../Utils/axiosWithAuth'

function Login(){
   const [credentials, setCredentials] = useState({
      username: 'Bloom', 
      password: 'Tech'
   })

   const handleChange = (e) => {
      const {name, value} = e.target
      setCredentials({
         ...credentials, 
         [name]: value
      })
   }

   const handleSubmit = (e) => {
      e.preventDefault()

      axios
         .post('http://localhost:9000/api/login', credentials)
         .then(res => {
            localStorage.setItem('token', res.data.token)
            //Redirecting to Friends List
            window.location.pathname = '/friends'
         })
         .catch(err => {
            console.log(err)
         })
   }

   return(
      <div>
         <h2> LOGIN </h2>
         <form>
            <label>USERNAME</label>
            <input
               type='text'
               name='username'
               value={credentials.username}
               onChange={handleChange}
               />
            <label> PASSWORD </label>
            <input 
               type='text'
               name='password'
               value={credentials.password}
               onChange={handleChange}
            />
            <button onClick={handleSubmit}>Submit</button>
         </form>
      </div>
   )
}

export default Login