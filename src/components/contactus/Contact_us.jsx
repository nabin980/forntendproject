import React, { useState } from 'react';
import "./Contact_us.css";
import image1 from '../../assets/arrow-right.svg'

const Contact_us = () => {
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform validation here
    const errors = {};
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }
    if (!formData.phoneNumber.trim()) {
      errors.phoneNumber = 'Phone number is required';
    } else if (!/^(98|97)\d{8}$/.test(formData.phoneNumber.trim())) {
      errors.phoneNumber = 'Phone number should start with 98 or 97 and have 10 digits';
    }
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Invalid email address';
    }
    if (!formData.subject.trim()) {
      errors.subject = 'Subject is required';
    }
    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    }
    setErrors(errors);
    
    // If no errors, submit the form
    if (Object.keys(errors).length === 0) {
      // Here you can submit the form data
      console.log('Form data submitted:', formData);
      // Clear form fields
      setFormData({
        name: '',
        phoneNumber: '',
        email: '',
        subject: '',
        message: ''
      });
    }
  }
  return (
    <div className="contact_us">
      <div className="contact_heading">
        <hr />
        <p className="about_us">Reach Out to Us</p>
      </div>
      <div className="connect_uss">
        <p className="customer_says">
          <span className="cnex_color">Connect</span> with Us Today!
        </p>
        <p className="community_paragraph">
          Fill out the form below, and we'll get back to you as soon as
          possible."
        </p>
      </div>
      <form onSubmit={handleSubmit} className="connect_form">
        <div className="top_connect">
          <div className="left">
            <label htmlFor="name">
              Name
              <input type="text" placeholder='Jitendra' name="name" id="name" value={formData.name} onChange={handleChange} />
              {errors.name && <span className="error">{errors.name}</span>}
            </label>
            <label htmlFor="phoneNumber">
              Phone number
              <input type="text" placeholder='+977-98********' name="phoneNumber" id="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
              {errors.phoneNumber && <span className="error">{errors.phoneNumber}</span>}
            </label>
          </div>
          <div className="right">
            <label htmlFor="email">
              Email
              <input type="email" placeholder='email@sample.com' name="email" id="email" value={formData.email} onChange={handleChange} />
              {errors.email && <span className="error">{errors.email}</span>}
            </label>
            <label htmlFor="subject">
              Subject
              <input type="text" placeholder='service name' name="subject" id="subject" value={formData.subject} onChange={handleChange} />
              {errors.subject && <span className="error">{errors.subject}</span>}
            </label>
          </div>
        </div>
        <div className="bottom">
          <label htmlFor="message">
            Message
            <input type='text' placeholder='Kindly explain your needed service you are interested in...' name="message" id="message" value={formData.message} onChange={handleChange}></input>
            {errors.message && <span className="error">{errors.message}</span>}
          </label>
        </div>
        <button type="submit"  image1 className="connect_submit" >
          Get in Touch <img src={image1} alt="" />
        </button>
      </form>
    </div>
  );
};

export default Contact_us;
