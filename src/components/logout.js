import React, {useEffect} from 'react'
import axiosWithAuth from '../Utils/axiosWithAuth'

const Logout = () => {
   useEffect(() => {
      if(localStorage.getItem('token')){
         axiosWithAuth()
            .post('/logout')
            .then(res => {
               localStorage.removeItem('token', res.data.token)
               window.location.pathname = '/'
            })
            .catch(err => {
               console.log(err)
            })
      }
      else{ window.location.pathname = '/'}
   }, [])

   return(
      <h2>LOGGING OUT.</h2>
   )
}

export default Logout