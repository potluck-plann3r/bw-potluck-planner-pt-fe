import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import UserDashboard from './components/DashBoard/UserDashboard';
import PrivateRoute from './components/Login/PrivateRoute';
import NavBar from './components/NavBar';
import './App.scss';
import FrontPage from './components/FrontPage';
const WithAuth = PrivateRoute(UserDashboard);

class App extends React.Component {
  render() {
    return (
      <Router>
        <Route path="/home" component={FrontPage} />
        <Route path="/login" component={FrontPage} />
        <Route path="/protected" component={FrontPage} />
        <Route
          exact
          to="/protected"
          render={props => <WithAuth {...props} />}
        />
      </Router>
    );
  }
}

const test = () => {
  return (
    <div>
      <h1>Not AUTH</h1>
    </div>
  );
};

export default App;
