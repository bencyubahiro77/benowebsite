import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import axios from 'axios';
import pic1 from '../images/programming.jpg';

function Contact() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible((prevVisible) => !prevVisible);
  };

  const validateEmail = (email) => {
    // Simple email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    // Password validation regex: 8 characters, 1 uppercase, 1 number, 1 symbol
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    return passwordRegex.test(password);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setIsRegistering(true);

    const { name, email, password } = event.target.elements;

    // Validate email
    if (!validateEmail(email.value)) {
      setEmailError('Invalid email address');
      return;
    } else {
      setEmailError('');
    }

    // Validate password
    if (!validatePassword(password.value)) {
      setPasswordError(
        'Password must be at least 8 characters long and contain at least one uppercase letter, one number, and one symbol'
      );
      return;
    } else {
      setPasswordError('');
    }

    const payload = {
      fullname: name.value,
      email: email.value,
      password: password.value,
    };

    try {
      const response = await axios.post('http://localhost:5000/user/register', payload);

      if (response.status === 201) {
        Swal.fire({
          icon: 'success',
          title: 'User registered successfully',
          showConfirmButton: false,
          timer: 1500,
        });
      }

      event.target.reset();
    } catch (error) {
      if (error.response) {
        const statusCode = error.response.status;
        if (statusCode === 409) {
          Swal.fire({
            icon: 'error',
            title: 'User already exists',
            text: 'Please choose a different email',
          });
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Server error',
            text: 'Please try again later',
          });
        }
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Request failed',
          text: 'Please check your internet connection',
        });
      }
    } finally {
      setIsRegistering(false);
    }
  };

  return (
    <body>
      <div className="Register">
        <div className="Rinfo">
          <h1>Create Account at BENO</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
            {emailError && <p className="error-message">{emailError}</p>}

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
            {passwordError && <p className="error-message">{passwordError}</p>}

            <input
              type="submit"
              value={isRegistering ? 'Registering...' : 'Register'}
              disabled={isRegistering}
            />
          </form>
          <div className="already">
            <h4>
              Already have an Account?<Link to="/login">Login</Link>
            </h4>
          </div>
        </div>
        <img src={pic1} alt=" " />
      </div>
    </body>
  );
}

export default Contact;
