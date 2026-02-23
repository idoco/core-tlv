import React from 'react';
import './Pages.css';

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

const specificationsContent = {
  he: {
    buildingTitle: 'מפרט טכני של הבנינים',
    apartmentTitle: 'מפרט טכני של הדירות',
    buildingSpecs: [
      'לובי כניסה מעוצב בשילוב אלמנטי עץ ותכנון תאורה ייחודי',
      'הכנה לעמדות טעינה לרכבים חשמליים',
      'בריכת שחיה אינפיניטי על גג המתחם עם נוף פנורמי',
      'חדר כושר וספינינג - מאובזר ומצויד במתקנים חדישים',
      'חיפוי בניין ייחודי ויוקרתי',
      'עמידה בתקן בניה ירוקה',
      'מתחם ספא בקומה גבוהה הכולל סאונות ,גקוזי וחדרי יוגה',
      'מגרש פאדל/ סקווש',
      'מעליות מהירות ושקטות',
      'חניון תת קרקעי מקורה הכולל גישה למעליות ישירות מהחניון',
      'סקיי בר/קפה – בר/בית קפה בקומה גבוה עם נוף משגע',
      "מתחם חוויתי הכולל מועדון דיירים , חדר לאונג' ומשחקיה לילדים",
    ],
    apartmentSections: [
      {
        title: 'כללי',
        items: [
          'מרפסת שמש מרווחת לכל דירה',
          'מיזוג אוויר דירתי מרכזי VRF',
          'מחליף חום לכל דירה לחימום מים',
          'שוט אשפה קומתי',
          'ברז מים ושקע חשמל במרפסות שמש',
        ],
      },
      {
        title: 'חשמל ותקשורת',
        items: [
          'חשמל תלת פאזי דירתי',
          'אינטרקום במעגל סגור עם מסך ציבעוני',
          'מפסק מחליף בחדר שינה הורים',
          'נקודת חיבור טלפון וכבלים בכל חדר שינה',
          'אביזרי חשמל יוקרתיים כדוגמת גוויס או שווה ערך',
          'הכנה לכבילה נסתרת לטלוויזיה בחדר דיור ובחדר הורים',
        ],
      },
      {
        title: 'חדרי רחצה',
        items: [
          'חיפוי חדרי רחצה עד גובה התקרה במבחר גוונים לבחירה.',
          'אסלות תלויות יוקרתיות בעלות מנגנון הדחה סמוי',
          'ארון אמבטיה + כיור אינטגרלי ומראה בכל חדרי הרחצה',
        ],
      },
      {
        title: 'ריצוף',
        items: [
          'ריצוף בדירה גרניט פורצלן במבחר גוונים 100/100 ס"מ או 60/120 ס"מ',
          'ריצוף מרפסות וחדרים רטובים בריצוף ANTISLIP במגוון דגמים.',
        ],
      },
      {
        title: 'חלונות',
        items: [
          'חלונות אלומיניום איכותיים',
          'חלונות בידודית כפולה (למעט בממ"ד ובחדרים הרטובים)',
        ],
      },
      {
        title: 'מטבח',
        items: [
          'ארונות מטבח יוקרתיים מחברת מטבחים מובילה',
          'ארונות ומגירות המטבח כוללים טריקה שקטה.',
          'משטח עבודה מסוג שיש אבן קיסר במגוון דגמים כולל קנט מעוגל או מרובע',
          'כיור מטבח אקרילי בהתקנה שטוחה לבחירת הדייר',
          'הכנה למדיח כלים כולל חשמל וניקוז',
        ],
      },
      {
        title: 'דלתות',
        items: [
          'דלת כניסה מעוצבת גבוהות 2.2 מטר',
          'בממ"ד דלת ביטחון עם כנף עץ פנימית',
          'דלתות פנים מהודרות כולל צירים נסתרים',
        ],
      },
    ],
  },
  en: {
    buildingTitle: 'Building Technical Specifications',
    apartmentTitle: 'Apartment Technical Specifications',
    buildingSpecs: [
      'Designed entrance lobby combining wood elements and unique lighting design',
      'Preparation for electric vehicle charging stations',
      'Infinity swimming pool on the rooftop with panoramic views',
      'Gym and spinning studio equipped with modern facilities',
      'Unique and luxurious building facade cladding',
      'Compliant with green building standards',
      'Spa complex on an upper floor including saunas, jacuzzi, and yoga rooms',
      'Padel / squash court',
      'Fast and quiet elevators',
      'Covered underground parking with direct elevator access from the parking level',
      'Sky bar / cafe on an upper floor with an open panoramic view',
      "Experiential residents' complex including a residents club, lounge room, and children's playroom",
    ],
    apartmentSections: [
      {
        title: 'General',
        items: [
          'Spacious sun balcony for every apartment',
          'Central apartment VRF air-conditioning system',
          'Heat exchanger in each apartment for water heating',
          'Floor-level garbage chute',
          'Water tap and electrical outlet on sun balconies',
        ],
      },
      {
        title: 'Electricity & Communications',
        items: [
          'Three-phase electrical system for each apartment',
          'Closed-circuit intercom with color screen',
          'Two-way switch in the master bedroom',
          'Telephone and cable connection point in every bedroom',
          'Premium electrical accessories such as Gewiss or equivalent',
          'Preparation for concealed TV wiring in the living room and master bedroom',
        ],
      },
      {
        title: 'Bathrooms',
        items: [
          'Bathroom wall cladding up to ceiling height in a selection of shades',
          'Luxury wall-hung toilets with concealed flush mechanism',
          'Bathroom cabinet + integrated sink and mirror in all bathrooms',
        ],
      },
      {
        title: 'Flooring',
        items: [
          'Granite porcelain flooring in the apartment in selected shades, 100x100 cm or 60x120 cm',
          'Balconies and wet rooms with anti-slip flooring in a variety of models',
        ],
      },
      {
        title: 'Windows',
        items: [
          'High-quality aluminum windows',
          'Double-insulated glazing (except in the safe room and wet rooms)',
        ],
      },
      {
        title: 'Kitchen',
        items: [
          'Luxury kitchen cabinets by a leading kitchen manufacturer',
          'Kitchen cabinets and drawers include soft-close mechanisms',
          'Caesarstone worktop in a variety of models, including rounded or square edge finish',
          'Acrylic kitchen sink, flush installation, selected by the resident',
          'Dishwasher preparation including electricity and drainage',
        ],
      },
      {
        title: 'Doors',
        items: [
          'Designed entrance door, 2.2 meters high',
          'Safe room security door with internal wooden leaf',
          'Elegant interior doors including concealed hinges',
        ],
      },
    ],
  },
};

const SpecificationsPage = ({ language = 'he' }) => {
  const content = specificationsContent[language] || specificationsContent.he;
  const apartmentSections = content.apartmentSections;
  const splitIndex = Math.ceil(apartmentSections.length / 2);
  const rightColumnSections = apartmentSections.slice(0, splitIndex);
  const leftColumnSections = apartmentSections.slice(splitIndex);

  return (
    <div className="specs-page" dir={language === 'he' ? 'rtl' : 'ltr'}>
      <div className="container">
        <section className="specs-section">
          <h1 className="specs-main-title">{content.buildingTitle}</h1>
          <ul className="specs-list specs-list-single">
            {content.buildingSpecs.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="specs-section">
          <h2 className="specs-main-title">{content.apartmentTitle}</h2>
          <div className="apartment-specs-columns">
            <div className="apartment-specs-column">
              {rightColumnSections.map((section) => (
                <div className="specs-subsection" key={section.title}>
                  <h3 className="specs-subtitle">{section.title}</h3>
                  <ul className="specs-list">
                    {section.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="apartment-specs-column">
              {leftColumnSections.map((section) => (
                <div className="specs-subsection" key={section.title}>
                  <h3 className="specs-subtitle">{section.title}</h3>
                  <ul className="specs-list">
                    {section.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <div className="specs-bottom-image-wrap" aria-hidden="true">
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/specifications-bottom.jpg`}
          alt=""
          className="specs-bottom-image"
        />
      </div>
    </div>
  );
};

export const Architecture = () => <PlaceholderPage title="Architecture / אדריכלות" />;
export const Apartments = () => <PlaceholderPage title="Apartments / דירות" />;
export const Plans = () => <PlaceholderPage title="Apartment Plans / תוכניות דירה" />;
export const Specifications = ({ language }) => <SpecificationsPage language={language} />;
export const Facilities = () => <PlaceholderPage title="Common Areas / מתחמים משותפים" />;
export const Location = () => <PlaceholderPage title="Location / לוקיישן" />;
export const About = () => <PlaceholderPage title="Developers / היזמים" />;
