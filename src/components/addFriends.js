import React, {useState} from 'react'
import axiosWithAuth from '../Utils/axiosWithAuth'

const AddFriend = () => {
   const [newFriend, setNewFriend] = useState({
      name: '', 
      age: '', 
      email: ''
   })

   const handleChange = (e) => {
      const {name, value} = e.target
      setNewFriend({
         ...newFriend, 
         [name]: value
      })
   }

   const handleSubmit = (e) => {
      e.preventDefault()

      axiosWithAuth()
         .post('/friends', newFriend)
         .then(res => {
            window.location.pathname = '/friends'
         })
         .catch(err => {
            console.log(err)
         })
   }

   return (
      <div>
         <h2>ADD A FRIEND</h2>
         <form>
            <label>FRIEND NAME</label>
            <input
               type='text'
               name='name'
               value={newFriend.name}
               onChange={handleChange}
            />
            <label>FRIEND AGE</label>
            <input
               type='text'
               name='age'
               value={newFriend.age}
               onChange={handleChange}
            />
            <label>FRIEND EMAIL</label>
            <input
               type='text'
               name='email'
               value={newFriend.email}
               onChange={handleChange}
            />
            <button onClick={handleSubmit}>SUBMIT</button>
         </form>
      </div>
   )
}

export default AddFriend