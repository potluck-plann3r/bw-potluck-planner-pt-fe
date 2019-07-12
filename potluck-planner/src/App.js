import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Login from './components/Login/Login'
import Registration from './components/Login/Registration'

function App() {
  return (
    <Router>
      <Route path='/' component={Registration} />
    </Router>
  );
}

export default App;
