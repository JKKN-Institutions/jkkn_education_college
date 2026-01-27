# JKKN College of Education Website

Official website for JKKN College of Education built with Next.js.

## Features

- ✅ Exact replica of the header/navbar design
- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Built with Next.js 15 and TypeScript
- ✅ Styled with Tailwind CSS
- ✅ Ready for Vercel deployment

## Tech Stack

- **Frontend**: Next.js 15 (React 18)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel

## Project Structure

```
.
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Home page
├── components/
│   └── Header.tsx           # Header/Navbar component
├── public/
│   └── logo.svg             # JKKN logo
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.ts
```

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Building for Production

```bash
npm run build
npm start
```

## Deployment to Vercel

### Method 1: Vercel CLI

1. Install Vercel CLI:

```bash
npm install -g vercel
```

2. Deploy:

```bash
vercel
```

3. Follow the prompts to deploy

### Method 2: Vercel Dashboard

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Vercel will automatically detect Next.js and deploy

## Header/Navbar Features

The header component includes:

- **Logo**: JKKN College of Education with green crown
- **Navigation Items**:
  - HOME
  - ABOUT (with dropdown)
  - DEPARTMENTS (with dropdown)
  - GALLERY
  - FACILITIES (with dropdown)
  - OTHERS (with dropdown)
  - CONTACT
- **Search Icon**: Functional search button
- **Responsive**: Mobile menu with hamburger icon
- **Sticky Header**: Stays at top when scrolling

## Colors Used

- **Primary Green**: `#1e7f4e` (Logo and JKKN text)
- **Pink**: `#e91e63` (College of Education text)
- **Gray**: Various shades for navigation items

## Responsive Breakpoints

- **Mobile**: < 1024px (shows hamburger menu)
- **Desktop**: >= 1024px (shows full navigation)

## License

© JKKN College of Education. All rights reserved.
