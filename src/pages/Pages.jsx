import React, { useEffect, useRef } from 'react';
import 'maplibre-gl/dist/maplibre-gl.css';
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

const architectureContent = {
  he: {
    title: 'פישר אלחנני אדריכלים',
    paragraphs: [
      'משרד פישר אלחנני אדריכלים הוא משרד צעיר, דינמי ורב־תחומי, הפועל מתוך חשיבה עדכנית ושאיפה לפתרונות תכנוניים מדויקים ויצירתיים. המשרד מספק שירותי אדריכלות ותכנון עירוני לגופים מובילים במשק, ומשלב ניסיון של עשרות שנים בפרויקטים רחבי היקף בתחומי המגורים, המסחר, התעשייה והמרחב הציבורי. עבודת המשרד מתאפיינת בגמישות מחשבתית, שליטה בתהליכים סטטוטוריים מורכבים ושימוש בכלי תכנון מתקדמים, לצד מחויבות לאיכות, מקצועיות ותיאום מלא מול כלל הגורמים בפרויקט.',
      'ייחודו של המשרד בא לידי ביטוי גם ביכולתו לקדם פרויקטים ביעילות גבוהה, בין היתר בזכות היתר לביצוע פרויקטים ברישוי עצמי, המאפשר קיצור משמעותי בלוחות הזמנים לקבלת היתר בנייה. לצד זאת, למשרד ניסיון רחב בתכנון בנייה רוויה, בעיקר באזור המרכז ותל אביב, תוך התאמה להקשר האורבני הצפוף והמורכב. הגישה התכנונית משלבת בין ראייה עירונית רחבה לבין פתרונות אדריכליים מדויקים בקנה מידה אנושי, ויוצרת סביבה פונקציונלית, מוארת ונגישה, המחברת בין המבנה, המשתמש והעיר.',
    ],
  },
  en: {
    title: 'Fisher Elhanani Architects',
    paragraphs: [
      'Fisher Elhanani Architects is a young, dynamic, multidisciplinary practice driven by contemporary thinking and a commitment to precise, creative planning solutions. The office provides architectural and urban planning services to leading organizations in Israel and brings together decades of experience across large-scale residential, commercial, industrial, and public-space projects. Its work is defined by intellectual flexibility, command of complex statutory processes, and the use of advanced planning tools, alongside a strong commitment to quality, professionalism, and full coordination with all project stakeholders.',
      'The firm’s distinctive edge is also reflected in its ability to advance projects with exceptional efficiency, including through authorization to carry out self-licensing processes that can significantly shorten the timeline for obtaining building permits. In parallel, the office has extensive experience in high-density residential planning, especially in central Israel and Tel Aviv, with solutions tailored to dense and complex urban contexts. Its design approach combines a broad urban perspective with precise, human-scale architectural solutions, creating environments that are functional, light-filled, and accessible, and that connect the building, its users, and the city.',
    ],
  },
};

const ArchitecturePage = ({ language = 'he' }) => {
  const content = architectureContent[language] || architectureContent.he;

  return (
    <div className="architecture-page" dir={language === 'he' ? 'rtl' : 'ltr'}>
      <div className="container architecture-container">
        <section className="architecture-hero">
          <img
            src={`${process.env.PUBLIC_URL}/assets/logos/fe-architects-logo.svg`}
            alt={language === 'he' ? 'לוגו פישר אלחנני אדריכלים' : 'Fisher Elhanani Architects logo'}
            className="architecture-logo"
          />
          <h1 className="architecture-title">{content.title}</h1>
        </section>

        <section className="architecture-copy">
          {content.paragraphs.map((paragraph) => (
            <p key={paragraph} className="architecture-paragraph">
              {paragraph}
            </p>
          ))}
        </section>
      </div>
    </div>
  );
};

const LOCATION_CENTER = [34.791929, 32.077509];
const LOCATION_STYLE = 'https://tiles.openfreemap.org/styles/positron';

const LocationMap = () => {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) {
      return undefined;
    }

    let isCancelled = false;

    const initMap = async () => {
      const { default: maplibregl } = await import('maplibre-gl');

      if (isCancelled || !mapRef.current || mapInstanceRef.current) {
        return;
      }

      const map = new maplibregl.Map({
        container: mapRef.current,
        style: LOCATION_STYLE,
        center: LOCATION_CENTER,
        zoom: 14.3,
        pitch: 0,
        bearing: 0,
        attributionControl: false,
      });

      map.addControl(new maplibregl.NavigationControl({ showCompass: false }), 'top-right');

      map.once('load', () => {
        const layers = map.getStyle()?.layers || [];

        layers.forEach((layer) => {
          if (layer.type === 'symbol') {
            map.setLayoutProperty(layer.id, 'visibility', 'none');
          }
        });

        map.addSource('project-location', {
          type: 'geojson',
          data: {
            type: 'FeatureCollection',
            features: [
              {
                type: 'Feature',
                properties: {
                  title: 'CORE-TLV',
                },
                geometry: {
                  type: 'Point',
                  coordinates: LOCATION_CENTER,
                },
              },
            ],
          },
        });

        map.addLayer({
          id: 'project-location-ring',
          type: 'circle',
          source: 'project-location',
          paint: {
            'circle-radius': 42,
            'circle-color': 'rgba(181, 95, 60, 0)',
            'circle-stroke-color': 'rgba(181, 95, 60, 0.26)',
            'circle-stroke-width': 2,
          },
        });

        map.addLayer({
          id: 'project-location-point',
          type: 'circle',
          source: 'project-location',
          paint: {
            'circle-radius': 10,
            'circle-color': '#b55f3c',
            'circle-stroke-color': 'rgba(255, 248, 241, 0.96)',
            'circle-stroke-width': 4,
          },
        });

        map.addLayer({
          id: 'project-location-label',
          type: 'symbol',
          source: 'project-location',
          layout: {
            'text-field': ['get', 'title'],
            'text-font': ['Open Sans Semibold'],
            'text-size': 13,
            'text-letter-spacing': 0.18,
            'text-transform': 'uppercase',
            'text-offset': [0, -2.6],
            'text-anchor': 'bottom',
            'text-allow-overlap': true,
          },
          paint: {
            'text-color': '#111111',
            'text-halo-color': 'rgba(255, 251, 246, 0.96)',
            'text-halo-width': 6,
            'text-halo-blur': 0.6,
          },
        });
      });

      mapInstanceRef.current = map;
    };

    initMap();

    return () => {
      isCancelled = true;

      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
      }

      mapInstanceRef.current = null;
    };
  }, []);

  return <div ref={mapRef} className="location-map-canvas" />;
};

const LocationPage = ({ language = 'he' }) => {
  return (
    <div className="location-page" dir={language === 'he' ? 'rtl' : 'ltr'}>
      <div className="container location-container">
        <section className="location-map-section" aria-label="Project location map">
          <div className="location-map-shell">
            <div className="location-map-frame">
              <LocationMap />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export const Architecture = ({ language }) => <ArchitecturePage language={language} />;
export const Apartments = () => <PlaceholderPage title="Apartments / דירות" />;
export const Plans = () => <PlaceholderPage title="Apartment Plans / תוכניות דירה" />;
export const Specifications = ({ language }) => <SpecificationsPage language={language} />;
export const Facilities = () => <PlaceholderPage title="Common Areas / מתחמים משותפים" />;
export const Location = ({ language }) => <LocationPage language={language} />;
export const About = () => <PlaceholderPage title="Developers / היזמים" />;
