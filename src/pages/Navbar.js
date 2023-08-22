import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();

  if (location.pathname === '/login') {
    return (
      <div>
        <div>
          <Link to="/login"></Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className='three'>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      <div>
        <Link to="/login">Signin</Link>
      </div>
    </div>
  );
}

export default Navbar;
