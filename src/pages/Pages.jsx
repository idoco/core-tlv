import React, { useEffect, useRef, useState } from 'react';
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

const facilitiesContent = {
  he: {
    title: 'מתחמים משותפים לחיים אורבניים',
    lead:
      'ב־CORE TLV חוויית המגורים נמשכת הרבה מעבר לדירה עצמה. המרחבים המשותפים תוכננו כחלק בלתי נפרד מהיום־יום, עם מקומות שמאפשרים לשלב תנועה, פנאי, קצב ואיזון בתוך המתחם.',
    supporting:
      'חדר הכושר, חדר הספינינג, מתחם הפאדל, חדר הקולנוע, מועדון הדיירים, המשחקיה והג׳ימבורי, ובריכת האינפיניטי עם הסקיי-בר יוצרים מעטפת שלמה לדיירים, כזו שמאפשרת להתחיל את הבוקר באימון, לעצור לרגע של התאווררות במהלך היום ולסיים את הערב בחוויה פרטית, זמינה ומדויקת.',
    facilities: [
      {
        title: 'חדר כושר',
        text: 'חלל אימון מרווח עם ציוד מתקדם, תאורה נעימה ומבט פתוח החוצה לשגרת כושר יומיומית מלאה.',
        image: 'gym-render.png',
        alt: 'הדמיית חדר כושר של CORE TLV',
      },
      {
        title: 'חדר ספינינג',
        text: 'סטודיו ממוקד ואנרגטי לאימונים דינמיים בקצב גבוה, עם אווירה מדויקת שמגבירה את חוויית האימון.',
        image: 'spinning-render.png',
        alt: 'הדמיית חדר ספינינג של CORE TLV',
      },
      {
        title: 'מתחם פאדל',
        text: 'מרחב ספורט חברתי ועכשווי שמשלב משחק, תנועה ומפגש בתוך מעטפת אדריכלית מוארת ופתוחה.',
        image: 'padel-render.png',
        alt: 'הדמיית מתחם פאדל של CORE TLV',
      },
      {
        title: 'מתחם בריכה',
        text: 'אזור רגיעה והתחדשות לשחייה, מנוחה והפסקה מהעיר, עם שפה עיצובית שמרגישה כמו מועדון פרטי.',
        image: 'pool-render.png',
        alt: 'הדמיית מתחם בריכה של CORE TLV',
      },
      {
        title: 'חדר קולנוע',
        text: 'חלל צפייה אינטימי ומעוצב לחוויית קולנוע פרטית בתוך המתחם, לערבים שקטים או לאירוח באווירה אחרת.',
        image: 'cinema-render.png',
        alt: 'תמונת הדמיה עתידית לחדר קולנוע של CORE TLV',
      },
      {
        title: 'מועדון דיירים',
        text: 'מרחב נעים ומזמין למפגשים, עבודה לא פורמלית ואירוח, שמרחיב את חוויית המגורים מעבר לדלת הדירה.',
        image: 'residents-render.png',
        alt: 'תמונת הדמיה עתידית למועדון דיירים של CORE TLV',
      },
      {
        title: 'משחקיה וג׳ימבורי',
        text: 'אזור ייעודי למשחק, תנועה וזמן משפחתי, שמייצר לילדים חוויה יומיומית בטוחה, פעילה ומהנה.',
        image: 'playroom-render.png',
        alt: 'תמונת הדמיה עתידית למשחקיה וג׳ימבורי של CORE TLV',
      },
      {
        title: 'בריכת אינפיניטי עם סקיי-בר',
        text: 'מרחב עליון עם מים, נוף ואווירה אלגנטית, שמחבר בין שחייה, אירוח ורגעי שקיעה בגובה העיר.',
        image: 'infinity-pool-render.png',
        alt: 'תמונת הדמיה עתידית לבריכת אינפיניטי עם סקיי-בר של CORE TLV',
      },
    ],
  },
  en: {
    title: 'Shared Spaces For Urban Living',
    lead:
      'At CORE TLV, the residential experience extends well beyond the apartment itself. The common amenities are planned as part of everyday life, creating spaces for movement, leisure, energy, and balance within the project.',
    supporting:
      'The gym, spinning studio, padel complex, cinema room, residents club, playroom and gymboree, and the infinity pool with sky-bar create a complete amenity layer for residents, allowing the day to begin with training, pause for a reset, and end with a private, on-site lifestyle experience.',
    facilities: [
      {
        title: 'The Gym',
        text: 'A spacious fitness room with advanced equipment, warm lighting, and an open outlook for everyday training.',
        image: 'gym-render.png',
        alt: 'CORE TLV gym render',
      },
      {
        title: 'Spinning Studio',
        text: 'A focused, high-energy studio for dynamic cycling sessions with an atmosphere designed to elevate the workout.',
        image: 'spinning-render.png',
        alt: 'CORE TLV spinning studio render',
      },
      {
        title: 'Padel Complex',
        text: 'A contemporary social-sport setting that brings movement and community together in a bright architectural environment.',
        image: 'padel-render.png',
        alt: 'CORE TLV padel complex render',
      },
      {
        title: 'Pool Complex',
        text: 'A relaxing resident amenity for swimming, unwinding, and stepping away from the city in a private-club atmosphere.',
        image: 'pool-render.png',
        alt: 'CORE TLV pool complex render',
      },
      {
        title: 'Cinema Room',
        text: 'An intimate screening space for a private cinema experience within the project, suited to quiet evenings and hosting alike.',
        image: 'cinema-render.png',
        alt: 'Future render placeholder for the CORE TLV cinema room',
      },
      {
        title: 'Residents Club',
        text: 'A warm shared lounge for meeting, informal work, and hosting, extending daily life beyond the apartment door.',
        image: 'residents-render.png',
        alt: 'Future render placeholder for the CORE TLV residents club',
      },
      {
        title: 'Playroom & Gymboree',
        text: 'A dedicated zone for play, movement, and family time, designed to give children an active and enjoyable everyday setting.',
        image: 'playroom-render.png',
        alt: 'Future render placeholder for the CORE TLV playroom and gymboree',
      },
      {
        title: 'Infinity Pool With Sky-Bar',
        text: 'An elevated leisure setting that combines water, views, and hospitality for sunset moments above the city.',
        image: 'infinity-pool-render.png',
        alt: 'Future render placeholder for the CORE TLV infinity pool with sky-bar',
      },
    ],
  },
};

const FacilitiesPage = ({ language = 'he' }) => {
  const content = facilitiesContent[language] || facilitiesContent.he;
  const [activeFacilityIndex, setActiveFacilityIndex] = useState(0);
  const [isCarouselInteracting, setIsCarouselInteracting] = useState(false);

  useEffect(() => {
    setActiveFacilityIndex(0);
  }, [language]);

  useEffect(() => {
    if (isCarouselInteracting) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setActiveFacilityIndex((currentIndex) => (currentIndex + 1) % content.facilities.length);
    }, 5000);

    return () => window.clearInterval(intervalId);
  }, [content.facilities.length, isCarouselInteracting]);

  const showPreviousFacility = () => {
    setActiveFacilityIndex((currentIndex) =>
      (currentIndex - 1 + content.facilities.length) % content.facilities.length
    );
  };

  const showNextFacility = () => {
    setActiveFacilityIndex((currentIndex) => (currentIndex + 1) % content.facilities.length);
  };

  return (
    <div className="facilities-page" dir={language === 'he' ? 'rtl' : 'ltr'}>
      <div className="container facilities-container">
        <section className="facilities-intro-section" aria-labelledby={`facilities-title-${language}`}>
          <div className="facilities-intro-panel">
            <div className="facilities-intro-top">
              <div className="facilities-intro-heading">
                <h1 className="facilities-intro-title" id={`facilities-title-${language}`}>
                  {content.title}
                </h1>
              </div>

              <div className="facilities-intro-copy">
                <p className="facilities-intro-lead">{content.lead}</p>
                <p className="facilities-intro-supporting">{content.supporting}</p>
              </div>
            </div>

          </div>
        </section>

        <section
          className="facilities-showcase-section"
          aria-label={language === 'he' ? 'גלריית המתחמים המשותפים' : 'Amenity gallery'}
        >
          <div className="facilities-showcase-grid">
            {content.facilities.map((item) => (
              <article className="facilities-showcase-card" key={item.title}>
                <div className="facilities-showcase-copy">
                  <h2 className="facilities-showcase-title">{item.title}</h2>
                  <p className="facilities-showcase-text">{item.text}</p>
                </div>

                <figure className="facilities-showcase-figure">
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/facilities/${item.image}`}
                    alt={item.alt}
                    className="facilities-showcase-image"
                  />
                </figure>
              </article>
            ))}
          </div>
        </section>
      </div>

      <section
        className="facilities-carousel-section"
        aria-label={language === 'he' ? 'קרוסלת הדמיות המתחמים' : 'Amenities image carousel'}
      >
        <div
          className="facilities-carousel-shell"
          onMouseEnter={() => setIsCarouselInteracting(true)}
          onMouseLeave={() => setIsCarouselInteracting(false)}
          onFocusCapture={() => setIsCarouselInteracting(true)}
          onBlurCapture={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) {
              setIsCarouselInteracting(false);
            }
          }}
          onTouchStart={() => setIsCarouselInteracting(true)}
          onTouchEnd={() => setIsCarouselInteracting(false)}
          onTouchCancel={() => setIsCarouselInteracting(false)}
        >
          <div className="facilities-carousel-viewport">
            {content.facilities.map((item, index) => (
              <figure
                className={`facilities-carousel-slide${
                  index === activeFacilityIndex ? ' is-active' : ''
                }`}
                key={`carousel-${item.title}`}
                aria-hidden={index !== activeFacilityIndex}
              >
                <img
                  src={`${process.env.PUBLIC_URL}/assets/facilities/${item.image}`}
                  alt={item.alt}
                  className="facilities-carousel-image"
                />
              </figure>
            ))}

            <button
              type="button"
              className="facilities-carousel-arrow facilities-carousel-arrow-prev"
              onClick={showPreviousFacility}
              aria-label={language === 'he' ? 'לתמונה הקודמת' : 'Previous image'}
            >
              <span className="facilities-carousel-arrow-icon" aria-hidden="true" />
            </button>

            <button
              type="button"
              className="facilities-carousel-arrow facilities-carousel-arrow-next"
              onClick={showNextFacility}
              aria-label={language === 'he' ? 'לתמונה הבאה' : 'Next image'}
            >
              <span className="facilities-carousel-arrow-icon" aria-hidden="true" />
            </button>

            <div className="facilities-carousel-dots" aria-label={language === 'he' ? 'ניווט שקופיות' : 'Slide navigation'}>
              {content.facilities.map((item, index) => (
                <button
                  type="button"
                  className={`facilities-carousel-dot${
                    index === activeFacilityIndex ? ' is-active' : ''
                  }`}
                  key={`dot-${item.title}`}
                  onClick={() => setActiveFacilityIndex(index)}
                  aria-label={
                    language === 'he'
                      ? `עבור לתמונה ${index + 1}: ${item.title}`
                      : `Go to image ${index + 1}: ${item.title}`
                  }
                  aria-pressed={index === activeFacilityIndex}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const LOCATION_CENTER = [34.791929, 32.077509];
const LOCATION_DEFAULT_VIEW = [34.7899, 32.0792];
const LOCATION_DEFAULT_VIEW_MOBILE = [34.7908, 32.0784];
const LOCATION_STYLE = 'https://tiles.openfreemap.org/styles/positron';
const LOCATION_POIS = [
  {
    name: {
      he: 'כיכר המדינה',
      en: 'Kikar HaMedina',
    },
    icon: 'district',
    coordinates: [34.78978, 32.08676],
    mobileVisible: true,
  },
  {
    name: {
      he: 'תחנת סבידור / מרכז ארלוזורוב',
      en: 'Savidor Station / Arlozorov Center',
    },
    icon: 'train',
    coordinates: [34.79725, 32.08374],
    mobileVisible: true,
  },
  {
    name: {
      he: 'בית חולים איכילוב',
      en: 'Ichilov Hospital',
    },
    icon: 'hospital',
    coordinates: [34.79018, 32.08033],
    mobileVisible: true,
  },
  {
    name: {
      he: 'כיכר רבין',
      en: 'Rabin Square',
    },
    icon: 'landmark',
    coordinates: [34.78059, 32.08061],
    mobileVisible: false,
  },
  {
    name: {
      he: 'מוזיאון תל אביב',
      en: 'Tel Aviv Museum',
    },
    icon: 'museum',
    coordinates: [34.78687, 32.07768],
    chipAnchor: 'top',
    chipOffset: [0, 18],
    mobileVisible: true,
  },
  {
    name: {
      he: 'הקריה המשפטית',
      en: 'Judicial District',
    },
    icon: 'civic',
    coordinates: [34.78775, 32.07779],
    mobileVisible: true,
  },
  {
    name: {
      he: 'תחנת רכבת קלה',
      en: 'Light Rail Station',
    },
    icon: 'transit',
    coordinates: [34.79216, 32.07692],
    chipAnchor: 'left',
    chipOffset: [18, 0],
    mobileVisible: true,
  },
  {
    name: {
      he: 'תיאטרון הקאמרי',
      en: 'Cameri Theatre',
    },
    icon: 'theater',
    coordinates: [34.78489, 32.07407],
    mobileVisible: true,
  },
  {
    name: {
      he: 'תיאטרון הבימה',
      en: 'Habima Theatre',
    },
    icon: 'theater',
    coordinates: [34.77902, 32.07281],
    mobileVisible: false,
  },
  {
    name: {
      he: 'קניון TLV',
      en: 'TLV Mall',
    },
    icon: 'shopping',
    coordinates: [34.78411, 32.06864],
    mobileVisible: false,
  },
  {
    name: {
      he: 'מתחם שרונה',
      en: 'Sarona Complex',
    },
    icon: 'district',
    coordinates: [34.78715, 32.07226],
    mobileVisible: false,
  },
  {
    name: {
      he: 'מגדלי עזריאלי',
      en: 'Azrieli Towers',
    },
    icon: 'tower',
    coordinates: [34.79186, 32.07473],
    mobileVisible: true,
  },
];

const LOCATION_STREETS = [
  {
    name: {
      he: 'שדרות שאול המלך',
      en: 'Shaul HaMelech Blvd',
    },
    coordinates: [34.7905, 32.0776],
    rotation: -22,
  },
  {
    name: {
      he: 'מנחם בגין',
      en: 'Menachem Begin',
    },
    coordinates: [34.7902, 32.0727],
    rotation: 0,
  },
  {
    name: {
      he: 'אליעזר קפלן',
      en: 'Eliezer Kaplan',
    },
    coordinates: [34.7842, 32.0735],
    rotation: 0,
  },
  {
    name: {
      he: 'דיזנגוף',
      en: 'Dizengoff',
    },
    coordinates: [34.7746, 32.0765],
    rotation: 72,
  },
  {
    name: {
      he: 'נתיבי איילון',
      en: 'Netivei Ayalon',
    },
    coordinates: [34.7977, 32.0815],
    rotation: 0,
  },
];

const createPoiSvg = (iconType) => {
  const common = `
    <rect x="4" y="4" width="32" height="32" rx="16" fill="#fbf6ef" stroke="#8d7154" stroke-width="1.6" />
  `;

  const icons = {
    museum: `
      ${common}
      <path d="M12 18L20 13L28 18" fill="none" stroke="#8d7154" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M14 18V26M20 18V26M26 18V26M12 26H28" fill="none" stroke="#8d7154" stroke-width="1.8" stroke-linecap="round"/>
    `,
    train: `
      ${common}
      <rect x="12.5" y="11.5" width="15" height="13" rx="3" fill="none" stroke="#8d7154" stroke-width="1.8"/>
      <path d="M16 15H17M23 15H24M16 28L18.5 24.8M24 28L21.5 24.8M15 20H25" fill="none" stroke="#8d7154" stroke-width="1.8" stroke-linecap="round"/>
    `,
    hospital: `
      ${common}
      <path d="M20 13V27M13 20H27" fill="none" stroke="#8d7154" stroke-width="3" stroke-linecap="round"/>
    `,
    landmark: `
      ${common}
      <circle cx="20" cy="20" r="7" fill="none" stroke="#8d7154" stroke-width="1.8"/>
      <path d="M20 13V27M13 20H27" fill="none" stroke="#8d7154" stroke-width="1.4" stroke-linecap="round"/>
    `,
    civic: `
      ${common}
      <path d="M12 17L20 12L28 17" fill="none" stroke="#8d7154" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M14 17V26M20 17V26M26 17V26M12 26H28" fill="none" stroke="#8d7154" stroke-width="1.8" stroke-linecap="round"/>
      <path d="M16 10H24" fill="none" stroke="#8d7154" stroke-width="1.8" stroke-linecap="round"/>
    `,
    transit: `
      ${common}
      <path d="M14 13H26L24.5 24H15.5L14 13Z" fill="none" stroke="#8d7154" stroke-width="1.8" stroke-linejoin="round"/>
      <path d="M17 16H23M17 20H23M17 27L18.8 24.3M23 27L21.2 24.3" fill="none" stroke="#8d7154" stroke-width="1.8" stroke-linecap="round"/>
    `,
    theater: `
      ${common}
      <path d="M13 14C15 12.5 17.5 12 20 12C22.5 12 25 12.5 27 14V23C25 24.5 22.5 25 20 25C17.5 25 15 24.5 13 23V14Z" fill="none" stroke="#8d7154" stroke-width="1.8" stroke-linejoin="round"/>
      <path d="M16.5 17.5H16.6M23.4 17.5H23.5M16.8 21C17.8 19.8 19 19.2 20 19.2C21 19.2 22.2 19.8 23.2 21" fill="none" stroke="#8d7154" stroke-width="1.8" stroke-linecap="round"/>
    `,
    shopping: `
      ${common}
      <path d="M14 17H26L24.8 27H15.2L14 17Z" fill="none" stroke="#8d7154" stroke-width="1.8" stroke-linejoin="round"/>
      <path d="M17 17V15.5C17 13.6 18.3 12 20 12C21.7 12 23 13.6 23 15.5V17" fill="none" stroke="#8d7154" stroke-width="1.8" stroke-linecap="round"/>
    `,
    district: `
      ${common}
      <path d="M12.5 25.5L16.2 14.5L20 20L23.8 14.5L27.5 25.5" fill="none" stroke="#8d7154" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
    `,
    tower: `
      ${common}
      <path d="M16 27V15L20 12L24 15V27" fill="none" stroke="#8d7154" stroke-width="1.8" stroke-linejoin="round"/>
      <path d="M18 18H22M18 22H22" fill="none" stroke="#8d7154" stroke-width="1.8" stroke-linecap="round"/>
    `,
  };

  return `
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
      ${icons[iconType] || icons.landmark}
    </svg>
  `;
};

const addMapImage = (map, name, svgMarkup) =>
  new Promise((resolve, reject) => {
    const image = new Image(40, 40);
    image.onload = () => {
      if (!map.hasImage(name)) {
        map.addImage(name, image, { pixelRatio: 2 });
      }
      resolve();
    };
    image.onerror = reject;
    image.src = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svgMarkup)}`;
  });

const createDistanceCircle = (center, radiusInMeters, steps = 96) => {
  const [lng, lat] = center;
  const earthRadius = 6371000;
  const latRadians = (lat * Math.PI) / 180;

  const coordinates = Array.from({ length: steps + 1 }, (_, index) => {
    const angle = (index / steps) * Math.PI * 2;
    const dx = radiusInMeters * Math.cos(angle);
    const dy = radiusInMeters * Math.sin(angle);

    const pointLat = lat + (dy / earthRadius) * (180 / Math.PI);
    const pointLng =
      lng + (dx / (earthRadius * Math.cos(latRadians))) * (180 / Math.PI);

    return [pointLng, pointLat];
  });

  return {
    type: 'Feature',
    properties: {},
    geometry: {
      type: 'LineString',
      coordinates,
    },
  };
};

const locationIntroContent = {
  he: {
    title: 'מיקום שמרכז סביבו את כל מה שהופך את העיר לכה מיוחדת',
    lead:
      'פרויקט CORE TLV כשמו כן הוא ממוקם בלב ליבה של תל אביב. במפגש שדרות שאול המלך ומנחם בגין נמצא המקום שבו העיר פועמת בעוצמתה המלאה.',
    supporting:
      'מיקום זה יוצר חיבור ישיר בין מוקדי התרבות, הפנאי והקולינריה הבולטים בעיר לבין מרכז העסקים הראשי של המטרופולין, הכולל מגדלי משרדים, חברות מובילות וצירי תעסוקה מרכזיים.',
    highlights: [
      {
        title: 'תרבות, אומנות ואורח חיים',
        text: 'צעדים ספורים מהמשכן לאמנויות הבמה, תיאטרון הקאמרי, בית האופרה, מוזיאון תל אביב לאמנות ובית אריאלה.',
      },
      {
        title: 'הלב הממסדי והעסקי של העיר',
        text: 'בסמוך לבתי המשפט, המרכז הרפואי איכילוב, משרדי קריית הממשלה ועיריית תל אביב.',
      },
      {
        title: 'קניות, בילוי וקולינריה',
        text: 'דקות הליכה ממתחם שרונה, מגדלי עזריאלי, קניון TLV ומידטאון.',
      },
      {
        title: 'הצירים והכיכרות האייקוניים',
        text: 'גישה מהירה לאבן גבירול, כיכר רבין, כיכר המדינה, מתחם הארבעה ושדרות רוטשילד.',
      },
    ],
    transitTitle: 'נגישות תחבורתית יוצאת דופן',
    transit: [
      'בצמוד למתחם תחנת "שאול המלך" של הקו האדום של הרכבת הקלה, המחברת את גוש דן בין פתח תקווה, בני ברק, רמת גן, תל אביב-יפו ובת ים.',
      'במרחק של כ-5 דקות הליכה מתחנת "השלום" של רכבת ישראל, המנגישה את כל חלקי הארץ.',
      'גישה ישירה לנתיבי איילון ולצירי תנועה עירוניים מרכזיים.',
      'חיבור לרשת שבילי האופניים, ההליכה והריצה העירוניים המפותחים של תל אביב.',
    ],
  },
  en: {
    title: 'A location that brings together everything that makes the city so distinctive',
    lead:
      'CORE TLV lives up to its name by sitting at the very heart of Tel Aviv. At the meeting point of Shaul Hamelech Boulevard and Menachem Begin Road, it places residents where the city beats at full intensity.',
    supporting:
      'This location creates a direct connection between Tel Aviv’s leading cultural, leisure, and culinary destinations and the metropolitan business core, with office towers, major companies, and key employment corridors all around it.',
    highlights: [
      {
        title: 'Culture, Art, And Lifestyle',
        text: 'Just steps from the Performing Arts Center, Cameri Theatre, the Opera House, Tel Aviv Museum of Art, and Beit Ariela.',
      },
      {
        title: 'The Civic And Business Core',
        text: 'Close to the courts, Ichilov Medical Center, government offices, and Tel Aviv Municipality.',
      },
      {
        title: 'Retail, Dining, And Leisure',
        text: 'A short walk from Sarona, Azrieli Towers, TLV Mall, and Midtown.',
      },
      {
        title: 'Iconic Boulevards And Destinations',
        text: 'Fast access to Ibn Gabirol, Rabin Square, Kikar Hamedina, the Haarbaa district, and Rothschild Boulevard.',
      },
    ],
    transitTitle: 'Exceptional Connectivity',
    transit: [
      'Adjacent to the Shaul Hamelech station on the Red Line of the light rail, linking Petah Tikva, Bnei Brak, Ramat Gan, Tel Aviv-Yafo, and Bat Yam.',
      'Around a 5-minute walk from HaShalom railway station, with convenient access to destinations across Israel.',
      'Direct access to Ayalon Highway and major urban traffic routes.',
      'Connected to Tel Aviv’s extensive network of bike paths, walking routes, and running trails.',
    ],
  },
};

const locationMapContent = {
  he: {
    projectLabel: 'CORE-TLV',
    distance500: '500 מטר',
    distance1000: '1 קילומטר',
    dir: 'rtl',
  },
  en: {
    projectLabel: 'CORE-TLV',
    distance500: '500 m',
    distance1000: '1 km',
    dir: 'ltr',
  },
};

const LocationMap = ({ language = 'he' }) => {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const poiPopupsRef = useRef([]);
  const distancePopupsRef = useRef([]);
  const streetPopupsRef = useRef([]);
  const content = locationMapContent[language] || locationMapContent.he;

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) {
      return undefined;
    }

    let isCancelled = false;
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    const visiblePois = LOCATION_POIS;

    const initMap = async () => {
      const maplibregl = await import('maplibre-gl');

      if (isCancelled || !mapRef.current || mapInstanceRef.current) {
        return;
      }

      maplibregl.setWorkerUrl(`${process.env.PUBLIC_URL}/maplibre-gl-csp-worker.js`);

      const map = new maplibregl.Map({
        container: mapRef.current,
        style: LOCATION_STYLE,
        center: isMobile ? LOCATION_DEFAULT_VIEW_MOBILE : LOCATION_DEFAULT_VIEW,
        zoom: isMobile ? 13.8 : 14.2,
        pitch: 0,
        bearing: 0,
        attributionControl: false,
      });

      map.addControl(new maplibregl.NavigationControl({ showCompass: false }), 'top-right');
      map.dragRotate.disable();
      map.touchZoomRotate.disableRotation();

      map.once('load', async () => {
        const layers = map.getStyle()?.layers || [];

        layers.forEach((layer) => {
          if (layer.type === 'symbol') {
            map.setLayoutProperty(layer.id, 'visibility', 'none');
          }
        });

        await Promise.all(
          [...new Set(visiblePois.map((poi) => poi.icon))].map((iconName) =>
            addMapImage(map, `poi-${iconName}`, createPoiSvg(iconName))
          )
        );

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

        map.addSource('project-distance-rings', {
          type: 'geojson',
          data: {
            type: 'FeatureCollection',
            features: [
              createDistanceCircle(LOCATION_CENTER, 500),
              createDistanceCircle(LOCATION_CENTER, 1000),
            ],
          },
        });

        map.addSource('nearby-pois', {
          type: 'geojson',
          data: {
            type: 'FeatureCollection',
            features: visiblePois.map((poi) => ({
              type: 'Feature',
              properties: {
                name: poi.name[language] || poi.name.he,
                icon: `poi-${poi.icon}`,
              },
              geometry: {
                type: 'Point',
                coordinates: poi.coordinates,
              },
            })),
          },
        });

        map.addLayer({
          id: 'project-distance-rings',
          type: 'line',
          source: 'project-distance-rings',
          paint: {
            'line-color': isMobile ? 'rgba(181, 95, 60, 0.42)' : 'rgba(181, 95, 60, 0.36)',
            'line-width': isMobile ? 1.9 : 2.4,
          },
        });

        distancePopupsRef.current = [
          {
            label: content.distance500,
            coordinates: isMobile
              ? [LOCATION_CENTER[0], LOCATION_CENTER[1] - 0.004]
              : [LOCATION_CENTER[0], LOCATION_CENTER[1] - 0.0041],
          },
          {
            label: content.distance1000,
            coordinates: isMobile
              ? [LOCATION_CENTER[0], LOCATION_CENTER[1] - 0.0084]
              : [LOCATION_CENTER[0], LOCATION_CENTER[1] - 0.0086],
          },
        ].map((item) =>
          new maplibregl.Popup({
            closeButton: false,
            closeOnClick: false,
            closeOnMove: false,
            focusAfterOpen: false,
            offset: [0, 0],
            anchor: 'center',
            className: 'location-map-distance-popup',
          })
            .setLngLat(item.coordinates)
            .setHTML(`<div class="location-map-distance-label" dir="${content.dir}">${item.label}</div>`)
            .addTo(map)
        );

        map.addLayer({
          id: 'nearby-pois-icons',
          type: 'symbol',
          source: 'nearby-pois',
          layout: {
            'icon-image': ['get', 'icon'],
            'icon-size': isMobile ? 0.82 : 0.92,
            'icon-allow-overlap': true,
            'icon-ignore-placement': true,
          },
        });

        map.addLayer({
          id: 'project-location-point',
          type: 'circle',
          source: 'project-location',
          paint: {
            'circle-radius': isMobile ? 9 : 10,
            'circle-color': '#b55f3c',
            'circle-stroke-color': 'rgba(255, 248, 241, 0.96)',
            'circle-stroke-width': 4,
          },
        });

        new maplibregl.Popup({
          closeButton: false,
          closeOnClick: false,
          closeOnMove: false,
          focusAfterOpen: false,
          offset: isMobile ? [0, -24] : [0, -28],
          anchor: 'bottom',
          className: 'location-map-popup location-map-popup-project',
        })
          .setLngLat(LOCATION_CENTER)
          .setHTML(
            `<div class="location-map-popup-inner location-map-popup-inner-project" dir="${content.dir}">${content.projectLabel}</div>`
          )
          .addTo(map);

        streetPopupsRef.current = LOCATION_STREETS.map((street) =>
          new maplibregl.Popup({
            closeButton: false,
            closeOnClick: false,
            closeOnMove: false,
            focusAfterOpen: false,
            offset: [0, 0],
            anchor: 'center',
            className: 'location-map-street-popup',
          })
            .setLngLat(street.coordinates)
            .setHTML(
              `<div class="location-map-street-label" dir="${content.dir}" style="--street-rotation:${street.rotation}deg;">${street.name[language] || street.name.he}</div>`
            )
            .addTo(map)
        );

        poiPopupsRef.current = visiblePois.map((poi) =>
          new maplibregl.Popup({
            closeButton: false,
            closeOnClick: false,
            closeOnMove: false,
            focusAfterOpen: false,
            offset: isMobile ? [0, -16] : (poi.chipOffset || [0, -22]),
            anchor: poi.chipAnchor || 'bottom',
            className: `location-map-popup${isMobile ? ' location-map-popup-mobile' : ''}`,
          })
            .setLngLat(poi.coordinates)
            .setHTML(
              `<div class="location-map-popup-inner" dir="${content.dir}">${poi.name[language] || poi.name.he}</div>`
            )
            .addTo(map)
        );

      });

      mapInstanceRef.current = map;
    };

    initMap();

    return () => {
      isCancelled = true;

      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
      }

      poiPopupsRef.current.forEach((popup) => popup.remove());
      poiPopupsRef.current = [];
      distancePopupsRef.current.forEach((popup) => popup.remove());
      distancePopupsRef.current = [];
      streetPopupsRef.current.forEach((popup) => popup.remove());
      streetPopupsRef.current = [];
      mapInstanceRef.current = null;
    };
  }, [content.dir, content.distance1000, content.distance500, content.projectLabel, language]);

  return <div ref={mapRef} className="location-map-canvas" />;
};

const LocationPage = ({ language = 'he' }) => {
  const introContent = locationIntroContent[language] || locationIntroContent.he;

  return (
    <div className="location-page" dir={language === 'he' ? 'rtl' : 'ltr'}>
      <div className="container location-container">
        <section className="location-intro-section" aria-labelledby={`location-intro-title-${language}`}>
          <div className="location-intro-panel">
            <div className="location-intro-top">
              <div className="location-intro-heading">
                <h1 className="location-intro-title" id={`location-intro-title-${language}`}>
                  {introContent.title}
                </h1>
              </div>

              <div className="location-intro-copy">
                <p className="location-intro-lead">{introContent.lead}</p>
                <p className="location-intro-supporting">{introContent.supporting}</p>
              </div>
            </div>

            <div className="location-highlights-grid">
              {introContent.highlights.map((item) => (
                <article className="location-highlight-card" key={item.title}>
                  <h2 className="location-highlight-title">{item.title}</h2>
                  <p className="location-highlight-text">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="location-map-section" aria-label="Project location map">
          <div className="location-map-shell">
            <div className="location-map-frame">
              <LocationMap language={language} />
            </div>
          </div>
        </section>

        <section className="location-transit-section" aria-labelledby={`location-transit-title-${language}`}>
          <div className="location-transit-panel">
            <h2 className="location-transit-title" id={`location-transit-title-${language}`}>
              {introContent.transitTitle}
            </h2>
            <ul className="location-transit-list">
              {introContent.transit.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
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
export const Facilities = ({ language }) => <FacilitiesPage language={language} />;
export const Location = ({ language }) => <LocationPage language={language} />;
export const About = () => <PlaceholderPage title="Developers / היזמים" />;
