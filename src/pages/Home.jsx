import React, { useState } from 'react';
import ContactForm from '../components/ContactForm';
import './Home.css';

const Home = ({ language }) => {
  const [showContactForm, setShowContactForm] = useState(false);

  const content = {
    he: {
      mainHeading: 'לראשונה: רובע מגורים חדש במרכז ת״א',
      subHeading: 'For the first time ever: a new residential quarter in Central Tel Aviv',
      description: 'הכירו את TRUE TEL AVIV, הרובע שבו האמת של תל אביב מחכה לכם ממש מתחת לבית. תתכוננו לפגוש במרחק הליכה מביתכם את האנרגיה והאווירה התל אביבית. את ההיסטוריה ואת העתיד של העיר, את הטעמים שלה ואת ניחוח הקפה האיכותי, את תל אביב של אנשי העסקים ואת תל אביב של אנשי התרבות והאומנות.',
      location: 'בואו להיות חלק מרובע מגורים חדש במרכז תל אביב, הנפרס בין הרחובות ארלוזורוב, נמיר ודפנה.',
      cta: 'להשארת פרטים >'
    },
    en: {
      mainHeading: 'For the first time ever: a new residential quarter in Central Tel Aviv',
      subHeading: '',
      description: "Introducing TRUE Tel Aviv – the stunning new quarter where the true Tel Aviv awaits you right on your doorstep. Get ready to embrace the dynamic energy and kinetic atmosphere of Tel Aviv within walking distance: the city's fascinating history and inspiring future, countless flavors and the aroma of great coffee, the Tel Aviv of entrepreneurs and the Tel Aviv of artists.",
      location: 'Come and be part of this exciting new residential quarter in Central Tel Aviv, bordered by Arlozorov, Namir, and Dafna Streets.',
      cta: "Let's talk >"
    }
  };

  const text = content[language];

  return (
    <div className="home">
      {/* Hero Section with Image */}
      <section className="hero">
        <div className="hero-image-container">
          <img
            src="/assets/images/image-001.png"
            alt="TRUE Tel Aviv"
            className="hero-image"
          />
          <div className="hero-overlay"></div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="content-section">
        <div className="container">
          <h1 className="main-heading">{text.mainHeading}</h1>
          {text.subHeading && (
            <h2 className="sub-heading">{text.subHeading}</h2>
          )}
          
          <p className="description">{text.description}</p>
          <p className="location-text">{text.location}</p>

          <div className="project-image">
            <img 
              src="/assets/images/image-001.png" 
              alt="TRUE Tel Aviv Project"
            />
          </div>

          <div className="cta-container">
            <button
              className="cta-button"
              onClick={() => setShowContactForm(true)}
            >
              {text.cta}
            </button>
          </div>
        </div>
      </section>

      {/* Contact Form Modal */}
      {showContactForm && (
        <ContactForm 
          language={language}
          onClose={() => setShowContactForm(false)}
        />
      )}
    </div>
  );
};

export default Home;
