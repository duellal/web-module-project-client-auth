import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';

import PrivateRoute from './components/PrivateRoute'
import Login from './components/login'
import FriendsList from './components/friendsList'

function App() {
  return (
      <div className="App">
        <nav>
          <h2>FRIENDS DATABASE</h2>
              <Link to='/login'>LOGIN.</Link>
              <Link to='/friends'>FRIENDLIST.</Link>
              <Link to='/friends/add'>ADDFRIEND.</Link>
              <Link to='/logout'>LOGOUT.</Link>
          </nav>

        <Routes>
          {/* <Route path tp='/friends/add' element={null}/> */}
          <Route 
            path='/friends' 
            element={<PrivateRoute/>}>
          <Route element={<FriendsList/>}/> 
          </Route>
          
          <Route path='/login' element={<Login/>}/>
          <Route path='/' element={<Login/>}/>
        </Routes>
      </div>
  );
}

export default App;
