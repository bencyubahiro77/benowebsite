import React from 'react';
import { Link } from 'react-router-dom';
import {  FaGithub, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <div className="footer-icons">
    
        <Link to="https://github.com/bencyubahiro77" className="icon">
          <FaGithub />
        </Link>
        <a href="mailto:bencyubahiro77@gmail.com" className="icon">
          <FaEnvelope />
        </a>
      </div>
      <div className="footer-text">
        <p>Copyright &copy; 2023 BENO | All rights reserved</p>
      </div>
      <ul className="footer-links">
            <li><Link to="/work" className="link" style={{color:"#fff"}}>Work</Link></li>
            <li><Link to="/blog" className="link" style={{color:"#fff"}}>Blog</Link></li>
            <li><Link to="/contact" className="link" style={{color:"#fff"}}>Contact</Link></li>
      </ul>
    </footer>
  );
};

export default Footer;
