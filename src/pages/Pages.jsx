import React from 'react';

const PlaceholderPage = ({ title }) => {
  return (
    <div style={{ padding: '60px 40px', minHeight: '60vh' }}>
      <div className="container">
        <h1 style={{ fontSize: '48px', marginBottom: '20px' }}>{title}</h1>
        <p style={{ fontSize: '18px', color: '#666' }}>
          This page is coming soon...
        </p>
      </div>
    </div>
  );
};

export const Architecture = () => <PlaceholderPage title="Architecture / אדריכלות" />;
export const Apartments = () => <PlaceholderPage title="Apartments / דירות" />;
export const Plans = () => <PlaceholderPage title="Apartment Plans / תוכניות דירה" />;
export const Specifications = () => <PlaceholderPage title="Specifications / מפרטים" />;
export const Facilities = () => <PlaceholderPage title="Common Areas / מתחמים משותפים" />;
export const Location = () => <PlaceholderPage title="Location / לוקיישן" />;
export const About = () => <PlaceholderPage title="Developers / היזמים" />;
