// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import pic1 from '../images/programming.jpg';
import { FiEye, FiEyeOff } from 'react-icons/fi';

function Contact() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible((prevVisible) => !prevVisible);
  };

  return (
    <body>
      <div className="Register">
        <div className='Rinfo'>
            <h1>Welcome at BENO</h1>
          <form>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />

            <label htmlFor="Password">Password:</label>
            <div className="password-input">
              <input
                type={passwordVisible ? 'text' : 'password'}
                id="password"
                name="password"
              />
              {passwordVisible ? (
                <FiEyeOff className="eye-icon" onClick={togglePasswordVisibility} />
              ) : (
                <FiEye className="eye-icon" onClick={togglePasswordVisibility} />
              )}
            </div>

            <input type="submit" value='SIGN IN' />
          </form>   
          <div className='already'>
            <h4>Don't have an account yet?<Link to="/register">Register</Link></h4>
          </div>
        </div>
        <img src= {pic1} alt=" " />
      </div>
    </body>
  );
}

export default Contact;
