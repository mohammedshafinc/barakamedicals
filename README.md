# Baraka Medicals Website

A modern, minimal website for Baraka Medicals - a medical devices company based in Doha, Qatar.

## Features

- 🏠 **Home Page** - Hero section with services showcase
- 📖 **About Us Page** - Company story, mission, vision, and values
- 📞 **Contact Page** - Contact form and information
- 🎨 **Red & White Theme** - Clean, professional medical theme
- 📱 **Responsive Design** - Works on all devices
- ⚡ **Fast Performance** - Built with React and Vite

## Tech Stack

- React 18
- Vite
- React Router DOM
- Tailwind CSS
- Lucide React (Icons)

## Getting Started

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
