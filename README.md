# Raga Malak Fashion Store

A modern e-commerce website built with Vite + React, replicating a high-end fashion store design.

## Features

- Clean, minimalist fashion store interface
- Responsive product grid layout
- Navigation header with category links
- Product cards with hover effects
- Sort functionality UI

## Installation

```bash
cd raga-malak-store
npm install
```

## Development

```bash
npm run dev
```

Visit `http://localhost:5173` in your browser.

## Build

```bash
npm run build
```

## Project Structure

```
raga-malak-store/
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Navigation header
│   │   ├── Header.css
│   │   ├── ProductGrid.jsx     # Product grid container
│   │   ├── ProductGrid.css
│   │   ├── ProductCard.jsx     # Individual product card
│   │   └── ProductCard.css
│   ├── App.jsx                 # Main app component
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── public/
│   └── images/                 # Product images (add your images here)
└── package.json
```

## Adding Product Images

Place your product images in `public/images/` directory:
- product1.jpg
- product2.jpg
- product3.jpg
- etc.

Recommended image specifications:
- Format: JPG or PNG
- Aspect ratio: 3:4 (portrait orientation)
- Resolution: At least 600x800px

## Customization

### Update Product Data

Edit `src/components/ProductGrid.jsx` to modify the products array with your product information.

### Styling

All components have their own CSS files for easy customization:
- Global styles: `src/index.css` and `src/App.css`
- Header: `src/components/Header.css`
- Product Grid: `src/components/ProductGrid.css`
- Product Cards: `src/components/ProductCard.css`

## Technologies

- React 19
- Vite 7
- CSS3
