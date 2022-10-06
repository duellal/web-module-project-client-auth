import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute'

import Login from './components/login'
import FriendsList from './components/friendsList'
import AddFriend from './components/addFriends'
import Logout from './components/logout'

function App() {
  return (
      <div className="App">
        <nav>
          <h2>FRIENDS DATABASE</h2>
              <Link to='/login'>LOGIN.</Link>
              <Link to='/friends'>FRIENDLIST.</Link>
              <Link to='/friends/add'>ADDFRIEND.</Link>
              <Link to='/logout' onClick={() => {Logout}}>LOGOUT.</Link>
          </nav>

        <Switch>
          <Route path='/logout' component={Logout}/>
          <PrivateRoute path='/friends/add' component={AddFriend} />
          <PrivateRoute path='/friends' component={FriendsList} />
          <Route path='/login' component={Login}/>
          <Route path='/' component={Login}/>
        </Switch>
      </div>
  );
}

export default App;
