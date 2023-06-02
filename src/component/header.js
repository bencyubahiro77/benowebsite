import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaTwitter, FaGithub, FaEnvelope, FaBars } from 'react-icons/fa';
import logo from '../Documents/benologo-removebg.png'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
      <img src={logo} alt=" " />
      </div>
      <div className="icons">
        <Link to="/twitter" className="icon">
          <FaTwitter />
        </Link>
        <Link to="https://github.com/bencyubahiro77" className="icon">
          <FaGithub />
        </Link>
        <a href="mailto:bencyubahiro77@gmail.com" className="icon">
          <FaEnvelope />
        </a>
      </div>
      <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <FaBars />
      </div>
      <div className={`menu ${isMenuOpen ? 'active' : ''}`}>
        <ul>
          <li>
            <Link to="/" className={`link ${location.pathname === '/' ? 'active' : ''}`}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/work" className={`link ${location.pathname === '/work' ? 'active' : ''}`}>
              Work
            </Link>
          </li>
          <li>
            <Link to="/blog" className={`link ${location.pathname === '/blog' ? 'active' : ''}`}>
              Blog
            </Link>
          </li>
          <li>
            <Link to="/skills" className={`link ${location.pathname === '/skills' ? 'active' : ''}`}>
              Skills
            </Link>
          </li>
          <li>
            <Link to="/about" className={`link ${location.pathname === '/about' ? 'active' : ''}`}>
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className={`link ${location.pathname === '/contact' ? 'active' : ''}`}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
