import React, { useState } from 'react';
import Navbar from './Navbar.jsx';
import './ContactPage.css'; //  CSS file separately

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      alert('Please fill in all required fields');
      return;
    }
    
    // Simulate form submission - replace with actual API call
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    }, 3000);
  };

  return (
    <div className="contact-page">
      
      <Navbar/>
      <div className="contact-container">
        <div className="contact-info">
        <h1 className="contact-title" style={{ marginTop: "80px" }}>Contact Us</h1>
        <p className="contact-description">
            Have questions or want to get in touch? We'd love to hear from you. 
            Our team is ready to assist you with any inquiries or feedback you may have.
          </p>
          
          <div className="contact-detail">
            <div className="icon-container">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </div>
            <div className="detail-content">
              <span className="detail-title">Address</span>
              <span className="detail-info">8J88+WXQ, Engineering College Road opp. FEDERALBANK Alapuzha District <br/>SH 1, Chengannur<br/>Kerala 689121</span>
            </div>
          </div>
          
          <div className="contact-detail">
            <div className="icon-container">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </div>
            <div className="detail-content">
              <span className="detail-title">Phone</span>
              <span className="detail-info">+91 83040 38374</span>
            </div>
          </div>
          
          <div className="contact-detail">
            <div className="icon-container">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </div>
            <div className="detail-content">
              <span className="detail-title">Email</span>
              <span className="detail-info">anjutiji@gmail.com</span>
            </div>
          </div>
          
          <div className="social-icons">
            <div className="social-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </div>
            <div className="social-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </div>
            <div className="social-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
              </svg>
            </div>
            <div className="social-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </div>
          </div>
        </div>
        
        <div className="contact-form">
          <h2 className="form-title">Send Message</h2>
          
          <form id="contact-form" onSubmit={handleSubmit}>
            <div className="input-container">
              <input 
                type="text" 
                id="name" 
                placeholder="Full Name" 
                value={formData.name}
                onChange={handleChange}
                required 
              />
              <label htmlFor="name" className={formData.name ? 'active' : ''}>Full Name</label>
            </div>
            
            <div className="input-container">
              <input 
                type="email" 
                id="email" 
                placeholder="Email" 
                value={formData.email}
                onChange={handleChange}
                required 
              />
              <label htmlFor="email" className={formData.email ? 'active' : ''}>Email</label>
            </div>
            
            <div className="input-container">
              <input 
                type="tel" 
                id="phone" 
                placeholder="Phone (Optional)" 
                value={formData.phone}
                onChange={handleChange}
              />
              <label htmlFor="phone" className={formData.phone ? 'active' : ''}>Phone (Optional)</label>
            </div>
            
            <div className="input-container">
              <textarea 
                id="message" 
                placeholder="Type your message..." 
                rows="4" 
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <label htmlFor="message" className={formData.message ? 'active' : ''}>Type your message...</label>
            </div>
            
            <button 
              type="submit" 
              className={`submit-btn ${formSubmitted ? 'submitting' : ''}`}
              disabled={formSubmitted}
            >
              {formSubmitted ? 'Sending...' : 'Send Message'}
              {!formSubmitted && (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginLeft: '5px'}}>
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;