import React from 'react'
import {Route, Redirect, Navigate} from 'react-router-dom'

// PrivateRoute with Redirect not working with v6 - need to find another solution. There are two other "solutions" below, but are not currently working. 

// const PrivateRoute = ({component: Component, ...rest}) => {
//    return <Route {...rest} render={(props) => {
//       if(localStorage.getItem('token')){
//          return <Component {...props}/>
//       }
//       else{
//          return <Redirect to='/login'/>
//       }
//    }}/>
// }

const PrivateRoute = ({component: Component, ...rest}) => {
   return <Route 
            {...rest} 
            render={(props) => {
               if(localStorage.getItem('token')){
                  return <Component {...props}/>
               }
               else{
                  return <Navigate to='/login'/>
               }
            }}
         />
}

// const PrivateRoute = () => {
//   localStorage.getItem('token') ? <Outlet/> : <Navigate to='/login'/>
//                }

export default PrivateRoute