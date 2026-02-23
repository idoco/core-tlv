import React from 'react';
import './Footer.css';

const Footer = ({ language }) => {
  const disclaimer = language === 'he' 
    ? 'המידע המוצג בעמוד זה ובכל פרסום בקשר עם הפרויקט הינו לצרכי מידע כללי בלבד ואינו מהווה הצעה, שידול או התחייבות מכל סוג. המחירים, התכניות, השטחים, ההדמיות, המפרטים, המועדים והנתונים כפופים לשינויים לפי שיקול דעת החברה ו/או הרשויות המוסמכות. התמונות/ההדמיות הינן להמחשה בלבד. ט.ל.ח.'
    : 'The information presented on this page and in any publication related to the project is provided for general informational purposes only and does not constitute an offer, solicitation, or commitment of any kind. Prices, plans, areas, renderings, specifications, timelines, and data are subject to change at the discretion of the company and/or the competent authorities. Images and renderings are for illustration purposes only. Errors and omissions excepted.';

  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="disclaimer">{disclaimer}</p>
        
        <div className="footer-links">
          <a href="#privacy" className="footer-link">
            {language === 'he' ? 'מדיניות פרטיות' : 'Privacy Policy'}
          </a>
          <span className="separator">|</span>
          <a href="#accessibility" className="footer-link">
            {language === 'he' ? 'הצהרת נגישות' : 'Accessibility Statement'}
          </a>
        </div>

        <div className="footer-logos">
          <img
            src={`${process.env.PUBLIC_URL}/assets/logos/logo-white.svg`}
            alt="CORE TLV logo"
            className="partner-logo"
          />
          <img
            src={`${process.env.PUBLIC_URL}/assets/logos/logo-white.svg`}
            alt="CORE TLV logo"
            className="partner-logo"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
