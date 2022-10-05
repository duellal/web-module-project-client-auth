import React, {useState, useEffect} from 'react'
import axios from 'axios'
import axiosWithAuth from '../Utils/axiosWithAuth'

const FriendsList = () => {
   const [friends, setFriends] = useState([])

   useEffect(() => {
      axiosWithAuth()
         .get('/friends')
         .then(res => {
            setFriends(res.data)
            console.log(res.data)
         })
         .catch(err => {
            console.log(err)
         })
   }, [])

   return(
      <div>
         <h2>FRIENDS LIST</h2>
         {friends.map(friend => {
            return(
               <ul key={friend.id}>
                  - {friend.name} - {friend.email}
               </ul>
            )
         })}
      </div>
   )
}

export default FriendsList