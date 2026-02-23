import React, { useState, useEffect, useRef } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ContactForm from './components/ContactForm';
import {
  Architecture,
  Apartments,
  Plans,
  Specifications,
  Facilities,
  Location,
  About
} from './pages/Pages';
import './App.css';

function App() {
  const [language, setLanguage] = useState('he');
  const [showContactForm, setShowContactForm] = useState(false);
  const [footerVisible, setFooterVisible] = useState(false);
  const footerRef = useRef(null);

  const ctaText = language === 'he' ? 'להשארת פרטים >' : "Let's talk >";

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setFooterVisible(entry.isIntersecting);
      },
      { threshold: 0 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <Router>
      <div className="App">
        <Header language={language} setLanguage={setLanguage} />

        <main>
          <Routes>
            <Route path="/" element={<Home language={language} />} />
            <Route path="/architect" element={<Architecture />} />
            <Route path="/apartments" element={<Apartments />} />
            <Route path="/plans" element={<Plans />} />
            <Route path="/specifications" element={<Specifications language={language} />} />
            <Route path="/facilities" element={<Facilities />} />
            <Route path="/location" element={<Location />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>

        {/* Mobile Floating CTA - sits above footer when footer is visible */}
        <div className={`mobile-cta-wrapper ${footerVisible ? 'above-footer' : ''}`}>
          <button
            className="mobile-cta"
            onClick={() => setShowContactForm(true)}
          >
            {ctaText}
          </button>
        </div>

        <div ref={footerRef}>
          <Footer language={language} />
        </div>

        {showContactForm && (
          <ContactForm
            language={language}
            onClose={() => setShowContactForm(false)}
          />
        )}
      </div>
    </Router>
  );
}

export default App;
