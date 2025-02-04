// src/components/Contact.jsx
import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  return (
    <section id="contact" className="container">
      <h2>Contact</h2>
      <form action="https://formsubmit.co/f8a881516ea852b872b79a5cc2d681dd" method="POST">
        {/* Hidden field to disable CAPTCHA */}
        <input type="hidden" name="_captcha" value="false" />
        
        {/* Hidden field for redirecting after form submission */}
        <input type="hidden" name="_next" value="#" />

        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            name="name"
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            name="email"
            required
          />
        </div>
        <div className="mb-3">
          <textarea
            className="form-control"
            placeholder="Message"
            name="message"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Send</button>
      </form>
    </section>
  );
};

export default Contact;
