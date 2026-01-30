import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = ({ language, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    consent: false
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // TODO: Replace with your Lambda/API endpoint
    console.log('Form submitted:', formData);
    
    // Example: Send to Lambda
    // try {
    //   const response = await fetch('YOUR_LAMBDA_URL', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(formData)
    //   });
    //   if (response.ok) {
    //     alert(language === 'he' ? 'הפרטים נשלחו בהצלחה' : 'Details sent successfully');
    //     onClose();
    //   }
    // } catch (error) {
    //   alert(language === 'he' ? 'שגיאה בשליחה' : 'Error sending');
    // }
    
    alert(language === 'he' ? 'הפרטים נשלחו בהצלחה' : 'Details sent successfully');
    onClose();
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        
        <div className="modal-header">
          <img 
            src="/assets/logos/logo-white.svg" 
            alt="TRUE Tel Aviv" 
            className="modal-logo"
          />
          <h2>{language === 'he' ? 'שניפגש?' : "Let's Meet"}</h2>
          <p>
            {language === 'he' 
              ? 'תאמו פגישה אונליין או השאירו פרטים ונחזור אליכם'
              : "Schedule an online meeting or leave your details and we'll get back to you"}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder={language === 'he' ? 'שם*' : 'Name*'}
              required
              value={formData.name}
              onChange={handleChange}
              className="form-input"
            />
          </div>

          <div className="form-group">
            <input
              type="tel"
              name="phone"
              placeholder={language === 'he' ? 'טלפון*' : 'Phone*'}
              required
              value={formData.phone}
              onChange={handleChange}
              className="form-input"
            />
          </div>

          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder={language === 'he' ? 'אימייל' : 'Email'}
              value={formData.email}
              onChange={handleChange}
              className="form-input"
            />
          </div>

          <div className="form-group checkbox-group">
            <label>
              <input
                type="checkbox"
                name="consent"
                required
                checked={formData.consent}
                onChange={handleChange}
              />
              <span className="checkbox-text">
                {language === 'he' 
                  ? 'הנני מאשר/ת פניות שיווקיות מקבוצת תדהר'
                  : 'I hereby consent to receiving marketing communications'}
              </span>
            </label>
          </div>

          <button type="submit" className="btn-submit">
            {language === 'he' ? 'שליחה' : 'SEND'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
