import React from 'react';
import './NavBar.scss';
import { Link } from 'react-router-dom';

function NavBar(props) {
  return (
    <header>
      <h1 className="logo">PotLuck</h1>
      <nav>
        <a>
          <button ref={props.containerRef} onClick={props.onClick}>
            <Link to="/register">Register</Link>
          </button>
        </a>
        <a>
          <button ref={props.containerRef} onClick={props.onClick}>
            <Link to="/login">Login</Link>
          </button>
        </a>
      </nav>
    </header>
  );
}

export default NavBar;
