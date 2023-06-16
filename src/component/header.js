import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaTwitter, FaGithub, FaEnvelope, FaBars } from 'react-icons/fa';
import Swal from 'sweetalert2';
// import logo from '../Documents/benologo-removebg.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef(null);
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    Swal.fire({
      title: 'Are you sure you want to logout?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'Cancel',
    }).then((result) => {
      if (result.isConfirmed) {
        // Perform logout
        localStorage.removeItem('token');
        Swal.fire({
          title: 'Logged out successfully!',
          icon: 'success',
        }).then(() => {
          navigate('/');
        });
      }
    });
  };

  const handleMenuItemClick = () => {
    if (window.innerWidth <= 768) {
      closeMenu();
    }
  };

  return (
    <nav className="navbar">
      <div className="logo">
        {/* <img src={logo} alt=" " /> */}
        <h1>BENO</h1>
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
            <Link
              to="/"
              className={`link ${location.pathname === '/' ? 'active' : ''}`}
              onClick={handleMenuItemClick}
            >
              Home
            </Link>
          </li>
          {/* <li>
            <Link
              to="/work"
              className={`link ${location.pathname === '/work' ? 'active' : ''}`}
              onClick={handleMenuItemClick}
            >
              Work
            </Link>
          </li> */}
          <li>
            <Link
              to="/blog"
              className={`link ${location.pathname === '/blog' ? 'active' : ''}`}
              onClick={handleMenuItemClick}
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              to="/skills"
              className={`link ${location.pathname === '/skills' ? 'active' : ''}`}
              onClick={handleMenuItemClick}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={`link ${location.pathname === '/about' ? 'active' : ''}`}
              onClick={handleMenuItemClick}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={`link ${location.pathname === '/contact' ? 'active' : ''}`}
              onClick={handleMenuItemClick}
            >
              Contact
            </Link>
          </li>
          {token && (
            <li>
              <div className="dropdown" ref={dropdownRef}>
                <span className="dropdown-toggle" onClick={toggleDropdown}>
                  Profile
                </span>
                <ul className={`dropdown-menu ${isDropdownOpen ? 'active' : ''}`}>
                  <li>
                    <Link
                      to="/links"
                      className="link"
                      onClick={() => {
                        handleMenuItemClick();
                        closeMenu();
                      }}
                    >
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/write"
                      className="link"
                      onClick={() => {
                        handleMenuItemClick();
                        closeMenu();
                      }}
                    >
                      Create Post
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="change-pass"
                      className="link"
                      onClick={() => {
                        handleMenuItemClick();
                        closeMenu();
                      }}
                    >
                      Change Password
                    </Link>
                  </li>
                  <li className="link" onClick={handleLogout}>
                    Logout
                  </li>
                </ul>
              </div>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
