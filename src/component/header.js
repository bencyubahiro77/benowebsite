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
        // Make API request to logout endpoint if necessary
        // Example: axios.get('http://localhost:5000/user/logout')
        // .then(() => {
        //   // Logout successful, proceed with navigation
        //   navigate('/');
        // })
        // .catch((error) => {
        //   console.error(error);
        // });

        // Simulating logout without backend API request
        Swal.fire({
          title: 'Logged out successfully!',
          icon: 'success',
        }).then(() => {
          navigate('/');
        });
      }
    });
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
          {token && (
            <li>
              <div className="dropdown" ref={dropdownRef}>
                <span className="dropdown-toggle" onClick={toggleDropdown}>
                  Profile
                </span>
                <ul className={`dropdown-menu ${isDropdownOpen ? 'active' : ''}`}>
                  <li>
                  
                    <Link to="/links" className="link" onClick={closeMenu}>
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link to="/write" className="link" onClick={closeMenu}>
                      Create Post
                    </Link>
                  </li>
                  <li>
                    <Link to="change-pass" className="link" onClick={closeMenu}>
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
