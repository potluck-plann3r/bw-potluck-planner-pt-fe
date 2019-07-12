import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Login from './components/Login/Login'

function App() {
  return (
    <Router>
      <Route path='/' component={Login} />
    </Router>
  );
}

export default App;
