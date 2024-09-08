import React from 'react';
import { Link } from 'react-router-dom';  // Import Link for routing
import './Navbar.css';  
import logo from '../components/logo.png'; 
import cart from '../components/cart.png';
import threedot from '../components/threedot.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-main">
        
        <div className="threedot">
          <img src={threedot} alt="threedot" />
        </div>

        <div className="logo">
          <ul>
            <img src={logo} alt="Price Peek Logo" />
          </ul>
        </div>

        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/RegisterLogin">Sign Up</Link></li> {/* Link to Register_Login */}
        </ul>

        <div className="search-bar">
          <input type="text" placeholder="Search Common Products" />
          <button>Search</button>
        </div>

        <div className="cart-icon">
          <img src={cart} alt="Cart" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
