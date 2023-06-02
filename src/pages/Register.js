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
            <h1>Create Account at BENO</h1>
          <form>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" />

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

            <input type="submit" value='REGISTER' />
          </form>   
          <div className='already'>
            <h4>Already have an Account?<Link to="/login">Login</Link></h4>
          </div>
        </div>
        <img src= {pic1} alt=" " />
      </div>
    </body>
  );
}

export default Contact;
