# Mintari Landing Page - Next.js 14

A modern, production-ready landing page built with Next.js 14, React 18, and Tailwind CSS. This application was converted from a Vite React app to a Next.js application with static export capabilities.

## 🚀 Features

- **Next.js 14** with App Router compatibility
- **React 18** with TypeScript support
- **Tailwind CSS** for styling with custom design system
- **Static Export** ready for deployment to any static hosting
- **Responsive Design** with mobile-first approach
- **Modern UI Components** with Radix UI primitives
- **SEO Optimized** with proper meta tags and structure

## 📦 Tech Stack

- **Framework**: Next.js 14.2.15
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3.4.13
- **UI Components**: Radix UI primitives
- **Icons**: Lucide React
- **Build Tool**: Next.js built-in bundler
- **Linting**: ESLint with Next.js config

## 🛠️ Development

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint

# Export static files
npm run export
```

### Development Server

The development server runs on `http://localhost:3000` by default.

## 🏗️ Project Structure

```
├── pages/                 # Next.js pages
│   ├── _app.tsx          # App wrapper
│   ├── _document.tsx     # Document structure
│   └── index.tsx         # Home page
├── src/
│   ├── components/       # React components
│   │   ├── ui/          # UI components
│   │   └── figma/       # Figma-generated components
│   └── styles/          # Global styles
├── public/              # Static assets
├── next.config.js       # Next.js configuration
├── tailwind.config.js   # Tailwind configuration
├── tsconfig.json        # TypeScript configuration
└── package.json         # Dependencies and scripts
```

## 🎨 Styling

The project uses Tailwind CSS with a custom design system:

- **Custom Colors**: Lavender, Pink, and Rose color palettes
- **CSS Variables**: For theming and dark mode support
- **Responsive Design**: Mobile-first approach
- **Component Variants**: Using class-variance-authority

## 🚀 Deployment

### Static Export

This project is configured for static export, making it deployable to any static hosting service:

```bash
npm run export
```

The static files will be generated in the `out/` directory.

### Supported Platforms

- **Vercel** (recommended)
- **Netlify**
- **GitHub Pages**
- **AWS S3 + CloudFront**
- **Any static hosting service**

## 📱 Features

### Landing Page Sections

1. **Navigation** - Responsive navigation with mobile menu
2. **Hero** - Main call-to-action with animated elements
3. **Features** - Feature showcase with cards
4. **Gallery** - Interactive image gallery with hover effects
5. **CTA** - Call-to-action section

### Interactive Elements

- Mobile-responsive navigation
- Hover effects on gallery images
- Smooth animations and transitions
- Gradient backgrounds and text effects

## 🔧 Configuration

### Next.js Config

The app is configured for static export with:
- `output: 'export'` for static generation
- `trailingSlash: true` for better hosting compatibility
- `images: { unoptimized: true }` for static export

### Tailwind Config

Custom configuration includes:
- Extended color palette
- Custom animations
- Responsive breakpoints
- Dark mode support

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run export` - Generate static export

## 🎯 Performance

- **Static Generation** for optimal performance
- **Image Optimization** with Next.js Image component
- **Code Splitting** automatic with Next.js
- **Tree Shaking** for minimal bundle size
- **SEO Optimized** with proper meta tags

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

---

Built with ❤️ using Next.js 14 and modern web technologies.