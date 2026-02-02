# Dicey Gamified Trading Strategy Presentation

A comprehensive product strategy framework for Dicey's entry into the gamified trading market.

## Features

- **Competitive Analysis**: Deep dive into Rollbit, Rush Trade, BC.Game, Rugs.fun, and CoinFutures.io
- **Monetization Models**: Detailed breakdown of revenue structures for each competitor
- **Product Recommendation**: 1000x synthetic futures MVP with phased roadmap
- **Interactive UI**: Tab-based navigation with color-coded competitor analysis
- **Semantic UI Design System**: Professional, gaming-focused aesthetic

## Tech Stack

- **Frontend**: React 19 + TypeScript + Tailwind CSS 4
- **Build Tool**: Vite
- **UI Components**: shadcn/ui
- **Package Manager**: pnpm

## Getting Started

### Local Development

```bash
# Install dependencies
pnpm install

# Start dev server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

The dev server will be available at `http://localhost:3000`

## Project Structure

```
├── client/
│   ├── src/
│   │   ├── pages/        # Page components
│   │   ├── components/   # Reusable UI components
│   │   ├── contexts/     # React contexts
│   │   ├── lib/          # Utility functions
│   │   └── index.css     # Global styles with design tokens
│   ├── public/           # Static assets
│   └── index.html        # HTML entry point
├── server/               # Backend configuration
├── shared/               # Shared types and constants
└── vite.config.ts        # Vite configuration
```

## Deployment

### Vercel

This project is configured for Vercel deployment:

1. Push to GitHub
2. Connect repository to Vercel
3. Vercel will automatically detect the configuration and deploy

**Build Command**: `pnpm install && pnpm build`
**Output Directory**: `dist`

## Design System

The site uses the Semantic UI design system with:
- **Primary Color**: Brand green (#00DA3C)
- **Typography**: Outfit (headings) + Inter (body)
- **Support Colors**: Attention (yellow), Negative (red), Positive (green)
- **Dark Theme**: Optimized for gaming aesthetic

## Key Sections

1. **Hero Section**: Overview of the strategy framework
2. **Competitive Analysis**: 5 competitors with detailed metrics
3. **Monetization Models**: Revenue structures for each competitor
4. **White-Label Providers**: Build vs. buy analysis
5. **Product Recommendation**: Phased approach with 1000x synthetic futures MVP

## License

MIT
