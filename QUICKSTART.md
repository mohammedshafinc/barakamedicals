# Quick Start Guide

## Run the Website

1. Open your terminal in the `barakamedicals` folder
2. Run the development server:

```bash
npm run dev
```

3. Open your browser and go to: **http://localhost:5173**

## What You'll See

✅ **Home Page** - Landing page with hero section and services grid  
✅ **About Us** - Company information, mission, vision, and values  
✅ **Contact** - Contact form and company contact details  
✅ **Responsive Navigation** - Mobile-friendly menu  
✅ **Footer** - Contact information and quick links  

## Next Steps

### 1. Update Contact Information
Replace placeholder contact details in:
- `src/components/Footer.jsx` (lines with phone/email)
- `src/pages/Contact.jsx` (contact cards section)

### 2. Add Your Logo
- Replace the "B" icon in `src/components/Navbar.jsx` with your actual logo
- Add your logo file to the `public/` folder

### 3. Customize Content
- Edit text in `src/pages/Home.jsx`
- Update company story in `src/pages/About.jsx`
- Modify services/features as needed

### 4. Add Images
- Add product images to the `src/assets/` folder
- Import and use them in your components

### 5. Deploy
When ready to deploy:

```bash
npm run build
```

This creates a `dist/` folder with production-ready files.

## Need Help?

- Check the main README.md for detailed documentation
- All components are in `src/components/`
- All pages are in `src/pages/`
- Styling uses Tailwind CSS classes
