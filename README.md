# CORE TLV - Website Clone

A React-based clone of the CORE TLV real estate website.

## Features

- ✅ Bilingual support (Hebrew/English) with RTL/LTR switching
- ✅ Responsive design (mobile & desktop)
- ✅ Hero section with image
- ✅ Contact form modal (ready for Lambda integration)
- ✅ Navigation menu with 7 main pages
- ✅ Static file serving (no backend needed)

## Project Structure

```
core-tlv/
├── public/
│   ├── index.html
│   └── assets/
│       ├── logos/
│       ├── images/
│       └── videos/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Header.css
│   │   ├── Footer.jsx
│   │   ├── Footer.css
│   │   ├── ContactForm.jsx
│   │   └── ContactForm.css
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Home.css
│   │   └── Pages.jsx (placeholder pages)
│   ├── App.jsx
│   ├── App.css
│   ├── index.js
│   └── index.css
└── package.json
```

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Add Assets

Place your assets in the `public/assets/` directory:

```
public/
└── assets/
    ├── logos/
    │   ├── logo-white.svg
    │   ├── logo-dark.svg
    │   ├── gavyam-logo.svg
    │   └── tidhar-logo-white.svg
    └── images/
        └── image-001.png
```

### 3. Run Development Server

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### 4. Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build/` folder, ready to deploy to any static hosting service (Netlify, Vercel, S3, etc.).

## Form Submission Setup

The contact form is ready for Lambda integration. To connect it:

1. Create your Lambda function (or use any API endpoint)
2. Update the `handleSubmit` function in `src/components/ContactForm.jsx`
3. Uncomment the fetch code and replace `YOUR_LAMBDA_URL` with your endpoint

Example Lambda integration:

```javascript
const response = await fetch('https://your-api.amazonaws.com/submit', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData)
});
```

## Customization

### Changing Text Content

Edit the content objects in each page component. Example from `Home.jsx`:

```javascript
const content = {
  he: {
    mainHeading: 'Your Hebrew text here',
    description: 'Your description...',
  },
  en: {
    mainHeading: 'Your English text here',
    description: 'Your description...',
  }
};
```

### Changing Images

Replace the image files in `public/assets/` with your own, maintaining the same filenames, or update the paths in the components.

### Adding New Pages

1. Create a new component in `src/pages/`
2. Add the route in `src/App.jsx`
3. Add the menu item in `src/components/Header.jsx`

## Deployment

### Deploy to Netlify

```bash
npm run build
# Drag and drop the 'build' folder to Netlify
```

### Deploy to Vercel

```bash
npm run build
vercel --prod
```

### Deploy to AWS S3

```bash
npm run build
aws s3 sync build/ s3://your-bucket-name --delete
```

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- RTL support for Hebrew

## Notes

- The site is fully static - no server-side rendering needed
- All navigation is client-side (React Router)
- Form submissions require external API/Lambda setup
- Mobile floating CTA button appears on scroll

## Next Steps

1. Add remaining page content (Architecture, Apartments, etc.)
2. Download and add all images/assets from the original site
3. Set up Lambda function for form submissions
4. Add any custom animations or transitions
5. Test on mobile devices
6. Deploy to production

## License

Private project - All rights reserved
