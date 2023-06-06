import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import axios from 'axios';
import pic1 from '../images/programming.jpg';

function Contact() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passwordError, setPasswordError] = useState('');
  const [isUpdating, setIsUpdating] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible((prevVisible) => !prevVisible);
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    return passwordRegex.test(password);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setIsUpdating(true);

    const { oldPassword, newPassword } = event.target.elements;

    // Validate password
    if (!validatePassword(newPassword.value)) {
      setPasswordError(
        'Password must be at least 8 characters long and contain at least one uppercase letter, one number, and one symbol'
      );
      return;
    } else {
      setPasswordError('');
    }

    const payload = {
      oldPassword: oldPassword.value,
      newPassword: newPassword.value,
    };

    try {
      const token = localStorage.getItem('token');
      const response = await axios.put('https://benowebsite-bn.onrender.com/user/change-pass', payload, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.data.success) {
        Swal.fire({
          icon: 'success',
          title: response.data.message,
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: response.data.message,
        });
      }

      event.target.reset();
    } catch (error) {
      if (error.response) {
        const errorMessage = error.response.data.message;
        Swal.fire({
          icon: 'error',
          title: errorMessage,
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Failed to Update',
        });
      }
    } finally {
      setIsUpdating(false);
    }
  };

  return (
    <body>
      <div className="Register">
        <div className="Rinfo">
          <h1>Change Password at BENO</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="oldPassword"> Current Password:</label>
            <div className="password-input">
              <input
                type={passwordVisible ? 'text' : 'password'}
                id="oldPassword"
                name="oldPassword"
              />
              {passwordVisible ? (
                <FiEyeOff className="eye-icon" onClick={togglePasswordVisibility} />
              ) : (
                <FiEye className="eye-icon" onClick={togglePasswordVisibility} />
              )}
            </div>

            <label htmlFor="newPassword"> New Password:</label>
            <div className="password-input">
              <input
                type={passwordVisible ? 'text' : 'password'}
                id="newPassword"
                name="newPassword"
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
              value={isUpdating ? 'Updating...' : 'Update'}
              disabled={isUpdating}
            />
          </form>
        </div>
        <img src={pic1} alt=" " />
      </div>
    </body>
  );
}

export default Contact;
