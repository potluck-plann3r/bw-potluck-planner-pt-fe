import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Login from './components/Login/Login'
import Registration from './components/Login/Registration'
import UserDashboard from './components/DashBoard/UserDashboard'
import PrivateRoute from './components/Login/PrivateRoute'

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {}
  }

  
  
  render(){
    return (
      <Router>
        <Route path='/login' component={Login} />
        <Route path='/register' component={Registration}  />
        <PrivateRoute exact path='/protected' component={UserDashboard} />
      </Router>
    );
  }
  
}

export default App;
