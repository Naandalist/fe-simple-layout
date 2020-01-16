import React from "react";
import swal from "sweetalert";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Navbar = ({ icon, title }) => {
  return (
    <nav className='navbar bg-primary'>
      <h1
        onClick={() =>
          swal({
            icon: "info",
            title: "You have clicked the icon",
            timer: 2000
          })
        }
      >
        <i className={icon} /> {title}
      </h1>
      <ul>
        <li>
          <Link to='/'>Menu 1</Link>
        </li>
        <li>
          <Link to='/'>Menu 2</Link>
        </li>
        <li>
          <Link to='/'>Menu 3</Link>
        </li>
        <li>
          <Link to='/'>Menu 4</Link>
        </li>
      </ul>
    </nav>
  );
};

Navbar.defaultProps = {
  title: "Front End Logo",
  icon: "fab fa-github"
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export default Navbar;
