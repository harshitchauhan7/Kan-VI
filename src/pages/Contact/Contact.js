import React from 'react';
import '../../styles/ContactStyle.css';
import contactImg from '../../assets/hero/istockphoto-1483023376-612x612.jpg'; // Adjust this path accordingly

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-wrapper">

        {/* LEFT SIDE */}
        <div className="contact-left">
          <img src={contactImg} alt="contact" className="contact-img" />
          <div className="contact-card">
            <div className="contact-item">
              <span className="icon">📧</span>
              <div>
                <p className="label">Email</p>
                <p>kanvifoodcompany@gmail.com</p>
              </div>
            </div>
            <div className="contact-item">
              <span className="icon">📞</span>
              <div>
                <p className="label">Phone</p>
                <p>+91 999-7777-111</p>
              </div>
            </div>
            <div className="contact-item">
              <span className="icon">📍</span>
              <div>
                <p className="label">Office</p>
                <p>100 Smith Street Collingwood VIC 3066 AU</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="contact-right">
          <h2>Get in touch</h2>
          <p>Our friendly team would love to hear from you.</p>
          <form className="contact-form">
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="abc@gmail.com" />
            <div className="phone-group">
              <select>
                <option value="US">IND</option>
                <option value="IN">IN</option>
              </select>
              <input type="tel" placeholder="+91 111-4444-777" />
            </div>
            <textarea placeholder="Leave us a message..." rows="4" />
            <button type="submit">Send message</button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Contact;
