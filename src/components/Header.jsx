import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = ({ language, setLanguage }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = language === 'he' ? [
    { path: '/architect', label: 'אדריכלות' },
    { path: '/apartments', label: 'דירות' },
    { path: '/plans', label: 'תוכניות דירה' },
    { path: '/specifications', label: 'מפרטים' },
    { path: '/facilities', label: 'מתחמים משותפים' },
    { path: '/location', label: 'לוקיישן' },
    { path: '/about', label: 'היזמים' },
  ] : [
    { path: '/architect', label: 'Architecture' },
    { path: '/apartments', label: 'Apartments' },
    { path: '/plans', label: 'Apartment Plans' },
    { path: '/specifications', label: 'Specifications' },
    { path: '/facilities', label: 'Common Areas' },
    { path: '/location', label: 'Location' },
    { path: '/about', label: 'Developers' },
  ];

  const toggleLanguage = () => {
    const newLang = language === 'he' ? 'en' : 'he';
    setLanguage(newLang);
    document.documentElement.setAttribute('lang', newLang);
    document.documentElement.setAttribute('dir', newLang === 'he' ? 'rtl' : 'ltr');
  };

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <img 
            src="/assets/logos/logo-white.svg" 
            alt="TRUE Tel Aviv" 
            className="logo-img"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="nav-desktop">
          <ul className="nav-list">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link to={item.path} className="nav-link">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <button onClick={toggleLanguage} className="lang-switch">
                {language === 'he' ? 'English' : 'עִבְרִית'}
              </button>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="mobile-menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <nav className="nav-mobile">
          <ul className="nav-list-mobile">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link 
                  to={item.path} 
                  className="nav-link"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <button onClick={toggleLanguage} className="lang-switch">
                {language === 'he' ? 'English' : 'עִבְרִית'}
              </button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
