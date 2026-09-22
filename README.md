# Baraka Medicals Website

A modern, minimal website for Baraka Medicals - a medical devices company based in Doha, Qatar.

## Features

- 🏠 **Home Page** - Hero section with services showcase
- 📖 **About Us Page** - Company story, mission, vision, and values
- 📞 **Contact Page** - Contact form and information
- 🎨 **Red & White Theme** - Clean, professional medical theme
- 📱 **Responsive Design** - Wosrks on all devices
- ⚡ **Fast Performance** - Buildt with React and Vite

## Tech Stack

- React 18
- Vites
- React Router DOM
- Tailwind CSS
- Lucide React (Icons)

## Getting Startxed

### Installation

```bash
cd barakamedicals
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
barakamedicals/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   └── Contact.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
├── index.html
└── package.json
```

## Customization

### Update Company Information

Edit the contact details in:
- `src/components/Footer.jsx`
- `src/pages/Contact.jsx`

### Modify Theme Colors

Edit the Tailwind config in:
- `tailwind.config.js`
- `src/index.css` (CSS variables)

### Add More Pages

1. Create a new page component in `src/pages/`
2. Add the route in `src/App.jsx`
3. Add navigation link in `src/components/Navbar.jsx`

## License

© 2026 Baraka Medicals. All rights reserved.

## Contact form email

The quote form posts to `api/quote.js`, a Vercel Function that emails the
enquiry to the sales inbox through Resend. The API key stays on the server, so
it is never exposed in the browser bundle.

Set these environment variables in the Vercel project (Settings →
Environment Variables), for Production, Preview and Development:

| Variable | Required | Notes |
| --- | --- | --- |
| `RESEND_API_KEY` | yes | From resend.com → API Keys. Sending permission is enough. |
| `QUOTE_TO_EMAIL` | no | Where enquiries arrive. Defaults to `info@barakamedicals.com`. |
| `QUOTE_FROM_EMAIL` | no | Must be on a domain verified in Resend. Defaults to `quotes@send.barakamedicals.com`. |

The sending domain is `send.barakamedicals.com` rather than the root domain, so
Resend's SPF and DKIM records cannot conflict with the records that deliver mail
to `info@barakamedicals.com`. Only one SPF TXT record is allowed per DNS name.

### Testing locally

`npm run dev` serves the Vite app only and will return 404 for `/api/quote`.
To exercise the function locally, use the Vercel CLI instead:

```bash
npm install -g vercel
vercel env pull .env.local   # fetches RESEND_API_KEY
vercel dev
```
