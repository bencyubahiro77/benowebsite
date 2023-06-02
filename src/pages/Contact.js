import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { FiPhone, FiMail, FiHome } from 'react-icons/fi';
import Swal from 'sweetalert2';

function Contact() {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [errors, setErrors] = useState({});

  const sendEmail = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    setIsSending(true);

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAIL_SERVICE_ID,
        process.env.REACT_APP_EMAIL_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAIL_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
          showSuccessMessage();
          setIsSending(false);
        },
        (error) => {
          console.log(error.text);
          showErrorMessage();
          setIsSending(false);
        }
      );
  };

  const validateForm = () => {
    const errors = {};
    let isValid = true;

    const nameInput = form.current.elements.name;
    const emailInput = form.current.elements.email;
    const messageInput = form.current.elements.message;

    if (!nameInput.value.trim()) {
      errors.name = 'Name is required';
      isValid = false;
    } else {
      errors.name = '';
    }

    if (!messageInput.value.trim()) {
      errors.message = 'Message is required';
      isValid = false;
    } else {
      errors.message = '';
    }

    if (!emailInput.value.trim()) {
      errors.email = 'Email is required';
      isValid = false;
    } else if (!isValidEmail(emailInput.value.trim())) {
      errors.email = 'Please provide a valid email';
      isValid = false;
    } else {
      errors.email = '';
    }

    setErrors(errors);
    return isValid;
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    return emailRegex.test(email);
  };

  const showSuccessMessage = () => {
    Swal.fire({
      icon: 'success',
      title: 'Message Sent',
      text: 'Your message has been sent successfully!',
    });
  };

  const showErrorMessage = () => {
    Swal.fire({
      icon: 'error',
      title: 'Message Not Sent',
      text: 'An error occurred while sending the message. Please try again later.',
    });
  };

  const handleNameChange = () => {
    setErrors((prevErrors) => ({
      ...prevErrors,
      name: '',
    }));
  };

  const handleEmailChange = () => {
    const emailInput = form.current.elements.email;
    const isValid = isValidEmail(emailInput.value.trim());
  
    setErrors((prevErrors) => ({
      ...prevErrors,
      email: isValid ? '' : 'Please provide a valid email',
    }));
  };

  const handleMessageChange = () => {
    setErrors((prevErrors) => ({
      ...prevErrors,
      message: '',
    }));
  };

  return (
    <body>
      <div className="contimg">
        <div className="contact2">
          <h1>CONTACT ME</h1>
        </div>
      </div>

      <div className="contact3">
        <h2>Feel Free to Chat with me.</h2>
        <div className='Cinfo'>
          <form ref={form} onSubmit={sendEmail}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" onChange={handleNameChange} />
            {errors.name && <p className="error">{errors.name}</p>}

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" onChange={handleEmailChange} />
            {errors.email && <p className="error">{errors.email}</p>}

            <label htmlFor="phone">Phone:</label>
            <input type="number" id="phone" name="phone" />

            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" onChange={handleMessageChange}></textarea>
            {errors.message && <p className="error">{errors.message}</p>}

            <input type="submit" value={isSending ? 'Sending...' : 'Send'} disabled={isSending} />
          </form>
          <div className="contact-info">
            <div className="contact-item">
              <FiHome className="contact-icon" />
              <span className="contact-text ">Rwanda, Kigali City</span>
            </div>
            <div className="contact-item">
              <FiPhone className="contact-icon" />
              <span className="contact-text ">+250 782 522 792</span>
            </div>
            <div className="contact-item">
              <FiMail className="contact-icon" />
              <span className="contact-text ">bencyubahiro77@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}

export default Contact;
