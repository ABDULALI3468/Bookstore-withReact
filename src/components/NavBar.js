import React from 'react';
import { Link } from 'react-router-dom';
import '../NavBar.css';
import { FaRegUserCircle } from 'react-icons/fa';

const NavBar = () => (
  <>
    <div className="navbar">
      <div className="firstChild">
        <h1 className="firstChildText">Bookstore CMS</h1>
        <Link to="/" className="Link">Book</Link>
        <Link to="/category" className="Link">Category</Link>
      </div>
      <div className="iconDiv">
        <Link className="profile" to="/">
          <FaRegUserCircle className="Icon" />
        </Link>
      </div>
    </div>

  </>
);
export default NavBar;
