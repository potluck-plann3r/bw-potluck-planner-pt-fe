import React from 'react';
import './NavBar.scss';
import { Link } from 'react-router-dom';

function NavBar(props) {
  return (
    <header>
      <h1 className="logo">PotLuck</h1>
      <nav>
        <button ref={props.containerRef} onClick={props.onClick}>
          <Link to="/register">Register</Link>
        </button>

        <button ref={props.containerRef} onClick={props.onClick}>
          <Link to="/login">Login</Link>
        </button>
      </nav>
    </header>
  );
}

export default NavBar;
