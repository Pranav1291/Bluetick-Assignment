import React, { useState } from 'react';

function ContactForm() {
   
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    contactNumber: '',
    subject: '',
    message: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    console.log('Form submitted:', formData);
    
    setFormData({
      fullName: '',
      email: '',
      contactNumber: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className='contact'>
      <h1>LET'S CONNECT</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Full Name:
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Contact Number:
          <input
            type="tel"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Subject:
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Message:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            cols={50}
            required
          />
        </label>
        <br />
        <button type="submit">Submit Form</button>
      </form>
    </div>
    
  );
}

export default ContactForm;
