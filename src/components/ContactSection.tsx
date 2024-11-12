import React from 'react';
import './ContactSection.css';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="contact">
      <h1>Get in Touch</h1>
      <p>Reach out for any inquiries or questions.</p>
      <div className="contact-form">
        <form>
          <input type="text" name="name" placeholder="Name" required />
          <input type="email" name="email" placeholder="Email" required />
          <textarea name="message" placeholder="Your Message" required></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
