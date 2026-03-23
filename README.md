# IT Platform Core

A modern, glassmorphism-styled IT company website built with React, TypeScript, and Vite.

## Tech Stack

- **React 19** — UI framework
- **TypeScript** — type safety
- **Vite** — build tool and dev server
- **React Router v7** — client-side routing

## Pages

| Route | Page |
|---|---|
| `/` | Home |
| `/services` | Services |
| `/about` | About |
| `/contact` | Contact |

## Project Structure

```
src/
├── components/
│   ├── Background.tsx   # Animated background (hidden on select pages)
│   ├── Nav.tsx          # Navigation bar
│   └── Footer.tsx       # Site footer
├── pages/
│   ├── Home.tsx
│   ├── Services.tsx
│   ├── About.tsx
│   └── Contact.tsx
├── css/
├── App.tsx              # Router, scroll management, reveal animations
└── main.tsx
```

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Features

- Glassmorphism UI design
- Scroll-reveal animations via IntersectionObserver
- Automatic scroll-to-top on route change
- Responsive layout

## Author

Jordan Hymas
