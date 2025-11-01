# AL-ROTAN Manpower Recruiting Agency

## 🌐 Live Sites

- **Production**: [www.al-rotan.com](https://www.al-rotan.com)
- **Development**: [talent-folio-vibe.lovable.app](https://talent-folio-vibe.lovable.app/)

---

## 📋 Project Overview

A modern, multilingual (English/Arabic) recruiting agency website for international manpower placement with a focus on Middle Eastern and Asian markets.

### Key Features
- ✅ Bilingual support (English/Arabic) with RTL layout
- ✅ Fully responsive mobile-first design
- ✅ Modern animations and transitions
- ✅ Form validation with Zod + React Hook Form
- ✅ 48+ pre-built UI components (shadcn/ui)
- ✅ Dark/light theme support
- ✅ Government-approved recruitment agency

---

## 🏗️ Tech Stack

### Core Technologies
- **Framework**: React 18.3.1 with TypeScript 5.8.3
- **Build Tool**: Vite 5.4.19
- **Routing**: React Router DOM v6.30.1
- **State Management**: TanStack React Query v5.83.0
- **UI Library**: shadcn/ui (Radix UI primitives)
- **Styling**: Tailwind CSS v3.4.17
- **Internationalization**: i18next + react-i18next
- **Form Handling**: React Hook Form + Zod validation
- **Notifications**: Sonner (toast notifications)
- **Icons**: Lucide React (v0.462.0)
- **Charts**: Recharts v2.15.4
- **Date Handling**: date-fns v3.6.0

---

## 📂 Project Structure

```
talent-folio-vibe/
├── src/
│   ├── assets/              # Images and static resources
│   ├── components/          # React components
│   │   ├── ui/             # shadcn/ui components (48 components)
│   │   ├── home/           # Home page specific components
│   │   ├── Header.tsx      # Main navigation header
│   │   └── Footer.tsx      # Site footer
│   ├── contexts/           # React contexts
│   │   └── LanguageContext.tsx
│   ├── hooks/              # Custom React hooks
│   ├── i18n/               # Internationalization
│   │   ├── config.ts
│   │   └── locales/        # Translation files (en/ar)
│   ├── lib/                # Utility functions
│   ├── pages/              # Route pages (11 pages)
│   ├── styles/             # Additional styles
│   ├── App.tsx             # Main app component with routing
│   ├── main.tsx            # Application entry point
│   └── index.css           # Global styles
├── public/                 # Static assets
├── dist/                   # Build output
├── package.json
├── vite.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

---

## 🌐 Pages & Routes

The application consists of **11 main pages**:

| Route | Component | Purpose |
|-------|-----------|---------|
| `/` | Home.tsx | Landing page with hero, services, stats, and CTAs |
| `/about` | About.tsx | Company information and mission |
| `/leadership` | Leadership.tsx | Leadership team profiles |
| `/team` | Team.tsx | Staff and team members |
| `/services` | Services.tsx | Service offerings details |
| `/success-stories` | SuccessStories.tsx | Client testimonials and case studies |
| `/licenses` | Licenses.tsx | Government licenses and certifications |
| `/job-openings` | JobOpenings.tsx | Available job positions |
| `/countries` | Countries.tsx | Destination countries served |
| `/gallery` | Gallery.tsx | Photo gallery |
| `/contact` | Contact.tsx | Contact form and information |
| `*` | NotFound.tsx | 404 error page |

---

## 🧩 Key Components

### Layout Components
- **Header.tsx**: Sticky navigation with:
  - Logo and branding
  - Desktop navigation (10 links)
  - Mobile hamburger menu
  - Language toggle (EN/AR)
  - Active route highlighting

- **Footer.tsx**: Site footer with links and information

### Home Page Components
Located in `components/home/`:
- **GalleryScroller.tsx**: Image carousel/scroller
- **GallerySection.tsx**: Gallery display section
- **ScrollingCountries.tsx**: Animated country flags scroller
- **StatsSection**: Statistics display

### Home Page Sections
- **Hero Section**: Full-width banner with CTAs
- **Stats Section**: 4 key metrics (10K+ workers, 50+ countries, 98% satisfaction, 15+ years)
- **Countries Section**: Animated scrolling country flags
- **Services Section**: 4 service cards with icons
- **Why Choose Us**: Feature list with benefits
- **Gallery Section**: Image showcase
- **CTA Section**: Call-to-action for contact

---

## 🎨 UI Component Library

### shadcn/ui Components (48 total)

**Form & Input**
- input, textarea, label, checkbox, radio-group
- select, switch, slider, input-otp
- calendar, form (with react-hook-form integration)

**Feedback**
- toast, sonner, alert, alert-dialog
- progress, skeleton

**Layout**
- card, separator, tabs, accordion
- collapsible, resizable, scroll-area
- sidebar, sheet, drawer

**Navigation**
- button, navigation-menu, menubar
- dropdown-menu, context-menu, breadcrumb
- pagination

**Overlays**
- dialog, popover, tooltip, hover-card

**Data Display**
- table, badge, avatar, aspect-ratio
- carousel (embla-carousel-react)
- chart (recharts integration)

**Other**
- command (cmdk), toggle, toggle-group

---

## 🌍 Internationalization (i18n)

### Features
- **Bilingual Support**: English (default) and Arabic
- **RTL Support**: Automatic direction switching for Arabic
- **Translation Keys**: Organized by page/section
- **Language Toggle**: Available in header (desktop & mobile)

### Implementation
- Uses `react-i18next` for translations
- `LanguageContext` manages language state
- Automatic HTML `dir` and `lang` attribute updates
- Persisted language preference

### Usage Example
```typescript
const { t } = useTranslation();
<h1>{t('home.buildingCareers')}</h1>
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

### Installation

```sh
# Step 1: Clone the repository
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory
cd talent-folio-vibe

# Step 3: Install dependencies
npm install

# Step 4: Start the development server
npm run dev
```

### Available Scripts

```bash
# Run development server with hot reload
npm run dev

# Build for production
npm run build

# Build for development environment
npm run build:dev

# Preview production build
npm run preview

# Lint code
npm run lint
```

---

## 📝 Development Options

### Option 1: Use Your Preferred IDE

1. Clone the repository
2. Install dependencies with `npm install`
3. Run `npm run dev`
4. Make changes and push to repository
5. Changes will be reflected in Lovable

### Option 2: Edit Directly in GitHub

1. Navigate to the desired file(s)
2. Click the "Edit" button (pencil icon)
3. Make your changes and commit

### Option 3: Use GitHub Codespaces

1. Navigate to the main page of your repository
2. Click on the "Code" button (green button)
3. Select the "Codespaces" tab
4. Click on "New codespace"
5. Edit files directly within the Codespace
6. Commit and push your changes

---

## 🎯 Business Focus

**Industry**: International Manpower Recruitment

**Target Markets**:
- Middle East (Saudi Arabia, UAE, Qatar, Oman, Jordan, Iraq)
- Asia (Malaysia, Singapore)

**Services**:
- Skilled manpower recruitment
- Global worker placement
- Ethical recruitment practices
- Career growth support
- Pre-departure training
- Post-deployment support
- Legal documentation assistance
- 24/7 support

**Key Statistics**:
- 10,000+ workers deployed
- 50+ countries served
- 98% client satisfaction
- 15+ years of experience

---

## 🎨 Design System

### Color Scheme
- **Primary**: Blue gradient
- **Secondary**: Orange/amber tones
- **Accent**: Complementary colors
- **Background**: Light/dark theme support

### Typography
- Modern, clean font choices
- Responsive text sizing
- Bold headings with gradients

### Icons
- Lucide React icons library
- Consistent icon sizing
- Contextual icon usage

### Shadows & Effects
- CSS custom properties for shadows
- `shadow-soft`, `shadow-medium`, `shadow-strong`
- Gradient backgrounds (`gradient-primary`, `gradient-hero`)

---

## 📦 Key Dependencies

### Production Dependencies
```json
{
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "react-router-dom": "^6.30.1",
  "@tanstack/react-query": "^5.83.0",
  "react-hook-form": "^7.61.1",
  "zod": "^3.25.76",
  "i18next": "^25.6.0",
  "react-i18next": "^16.2.0",
  "lucide-react": "^0.462.0",
  "recharts": "^2.15.4",
  "tailwindcss": "^3.4.17",
  "next-themes": "^0.3.0"
}
```

### Development Dependencies
```json
{
  "typescript": "^5.8.3",
  "vite": "^5.4.19",
  "@vitejs/plugin-react-swc": "^3.11.0",
  "eslint": "^9.32.0"
}
```

---

## 🔧 Configuration Files

- `vite.config.ts`: Vite build configuration
- `tailwind.config.ts`: Tailwind CSS customization
- `tsconfig.json`: TypeScript compiler options
- `components.json`: shadcn/ui component config
- `eslint.config.js`: Code linting rules
- `postcss.config.js`: PostCSS plugins

---

## 📱 Application Flow

1. **Entry Point** → `main.tsx` imports i18n config and renders `<App />`
2. **App Setup** → Wraps app with:
   - QueryClientProvider (data fetching)
   - TooltipProvider (UI tooltips)
   - BrowserRouter (routing)
   - LanguageProvider (i18n)
3. **Layout** → Header + Routes + Footer
4. **Navigation** → React Router handles page transitions
5. **User Interaction** → Forms, CTAs, language toggle, mobile menu

---

## 🎓 Technical Patterns Used

1. **Component Composition**: Building complex UIs from small components
2. **Custom Hooks**: Reusable logic (useLanguage, useToast)
3. **Context API**: Global state (LanguageContext)
4. **Route-based Code Splitting**: Potential for lazy loading
5. **Form Validation**: Zod schemas with React Hook Form
6. **Responsive Design**: Mobile-first Tailwind classes
7. **Accessibility**: ARIA labels and semantic HTML
8. **Performance**: React Query for caching and data management

---

## 🔑 Key Differentiators

1. **Government Approved**: Licensed and certified
2. **Bilingual**: English and Arabic support with RTL
3. **Modern Tech Stack**: Latest React ecosystem
4. **Comprehensive UI**: 48+ pre-built components
5. **Mobile-First**: Fully responsive design
6. **Performance Optimized**: Vite + React Query
7. **Type-Safe**: Full TypeScript implementation
8. **Accessible**: WCAG compliant components

---

## 📊 Component Statistics

- **Total Pages**: 11
- **UI Components**: 48 (shadcn/ui)
- **Custom Components**: 6+ (Header, Footer, home sections)
- **Routes**: 12 (including 404)
- **Languages**: 2 (English, Arabic)
- **Icons**: 100+ (Lucide React)

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is proprietary software for AL-ROTAN Manpower Recruiting Agency.

---

## 📞 Contact

**AL-ROTAN Manpower Recruiting Agency**
- Website: [www.al-rotan.com](https://www.al-rotan.com)
- Development Site: [talent-folio-vibe.lovable.app](https://talent-folio-vibe.lovable.app/)

---

## 🙏 Acknowledgments

- [Lovable](https://lovable.dev) - Development platform
- [shadcn/ui](https://ui.shadcn.com/) - UI component library
- [Radix UI](https://www.radix-ui.com/) - Primitive components
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Lucide](https://lucide.dev/) - Icon library

---

**Built with ❤️ for global talent connection**
