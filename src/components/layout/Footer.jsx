import React from "react";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <nav className='footer bg-primary'>
      <h1>Footer</h1>
      <ul>
        <li>
          <Link to='/'>
            <i className='fab fa-github' />
          </Link>
        </li>
        <li>
          <Link to='/'>
            <i className='fab fa-github' />
          </Link>
        </li>
        <li>
          <Link to='/'>
            <i className='fab fa-github' />
          </Link>
        </li>
        <li>
          <Link to='/'>
            <i className='fab fa-github' />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Footer;
