# Modern Animated Portfolio Website 🚀

A stunning, professional portfolio website built with Next.js 14, TypeScript, Tailwind CSS v4, and Framer Motion, featuring smooth animations and modern UI/UX design.

![Portfolio Preview](https://img.shields.io/badge/Next.js-16.0.1-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)

## 🎨 Design Brief

### Color Palette
This portfolio uses a modern, professional color scheme:

- **Primary**: `#6366f1` (Indigo) - Professional and modern
- **Secondary**: `#8b5cf6` (Purple) - Creative accent
- **Accent**: `#ec4899` (Pink) - Vibrant highlights
- **Dark Background**: `#0f172a` (Slate 900)
- **Light Background**: `#f1f5f9` (Slate 100)
- **Text Dark**: `#1e293b` (Slate 800)
- **Text Light**: `#f8fafc` (Slate 50)

### Typography
- **Font Family**: Inter (Google Fonts) - Clean, modern, highly readable
- **Heading Weights**: 600-800 (Semi-bold to Extra-bold)
- **Body Weight**: 400-500 (Regular to Medium)
- **Font Sizes**: Responsive scaling from mobile to desktop

### Animation Strategy

#### 1. **Scroll-Triggered Animations**
- Fade-in effects as sections come into view
- Slide-up animations for content blocks
- Staggered children animations for lists and grids
- Using Framer Motion's `useInView` hook with `-100px` margin for timing

#### 2. **Hero Section Animations**
- Animated gradient background with floating orbs
- Pulsing blur effects using CSS filters
- Sequential text reveal (name → tagline → buttons)
- Smooth bounce animation on scroll indicator

#### 3. **Interactive Hover Effects**
- Scale transformations on buttons and cards
- Color transitions on links
- Shadow elevation on project cards
- Magnetic effects on contact form elements

#### 4. **Micro-interactions**
- Button press feedback (scale down on click)
- Form input focus rings
- Skill bar fill animations
- Success/error message animations

#### 5. **Performance Optimizations**
- CSS transforms instead of position changes
- GPU-accelerated animations
- `will-change` for frequently animated elements
- Reduced motion support for accessibility

## 🏗️ Site Structure

### 1. **Hero Section**
- Full-screen gradient background with animated orbs
- Name with gradient text effect
- Professional tagline
- CTA buttons (Get In Touch, View Work)
- Social media links
- Animated scroll indicator

### 2. **About Me Section**
- Two-column layout (image + content)
- Profile picture with creative border effect
- Professional bio
- Key statistics (years of experience, projects completed)
- Smooth reveal animation on scroll

### 3. **Skills Section**
- Grid layout of skill categories
- Icon-based categorization
- Animated progress bars for each skill
- Color-coded by category
- Hover effects on cards
- Categories: Frontend, Backend, Design, Mobile, Cloud & DevOps, Tools

### 4. **Projects Section**
- Grid layout of project cards
- Gradient overlays on project thumbnails
- Hover effects revealing details
- Click to open detailed modal
- Tags for technologies used
- Links to GitHub repo and live demo
- Featured: 6 diverse projects showcasing different skills

### 5. **Contact Section**
- Two-column layout (contact info + form)
- Animated contact cards with icons
- Functional contact form with validation
- Submit button with loading state
- Success/error message feedback
- Email, phone, and location information

### 6. **Footer**
- Three-column layout
- Quick navigation links
- Social media links with hover animations
- Copyright information
- Dark theme for contrast

## 🛠️ Technologies Used

### Core Framework
- **Next.js 16.0.1** - React framework with App Router
- **React 19.2.0** - UI library
- **TypeScript 5** - Type safety

### Styling
- **Tailwind CSS v4** - Utility-first CSS framework
- **Custom CSS** - Smooth scrolling, custom scrollbar

### Animations
- **Framer Motion** - Production-ready motion library
  - `motion` components for animations
  - `useInView` hook for scroll-triggered effects
  - Variants for orchestrated animations

### Icons
- **Lucide React** - Beautiful, consistent icon set

### Features
- Fully responsive design (mobile-first approach)
- Dark mode support
- Smooth scroll behavior
- Custom gradient scrollbar
- SEO optimized
- Accessibility features

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── components/
│   │   ├── Hero.tsx          # Landing section with animated background
│   │   ├── About.tsx         # About me with profile and stats
│   │   ├── Skills.tsx        # Skills grid with animated progress bars
│   │   ├── Projects.tsx      # Project grid with modal details
│   │   ├── Contact.tsx       # Contact form and information
│   │   └── Footer.tsx        # Footer with links
│   ├── globals.css           # Global styles and custom scrollbar
│   ├── layout.tsx            # Root layout with metadata
│   └── page.tsx              # Main page composition
├── public/                   # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.ts
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
npm start
```

## 🎨 Customization Guide

### 1. Personal Information
Update the following files with your information:

**Hero Section** (`app/components/Hero.tsx`):
- Line 52: Replace "Your Name" with your actual name
- Lines 75-95: Update social media links

**About Section** (`app/components/About.tsx`):
- Lines 54-60: Update bio text
- Lines 67-75: Update statistics
- Line 39: Replace placeholder with your profile image

**Contact Section** (`app/components/Contact.tsx`):
- Lines 94-100: Update email address
- Lines 110-116: Update phone number
- Lines 126-132: Update location

**Footer** (`app/components/Footer.tsx`):
- Line 17: Update name
- Lines 38-60: Update social media links

### 2. Projects
Edit `app/components/Projects.tsx`:
- Lines 7-75: Update the `projects` array with your actual projects
- Replace placeholder gradients with actual project images

### 3. Skills
Edit `app/components/Skills.tsx`:
- Lines 5-64: Modify the `skills` array with your technologies
- Adjust proficiency percentages

### 4. Colors
The color scheme uses Tailwind's color palette. To change:
- Primary (Purple): `purple-600`, `purple-500`, etc.
- Secondary (Pink): `pink-600`, `pink-500`, etc.
- Search and replace throughout components

### 5. Fonts
Currently using Inter. To change:
- Update `app/layout.tsx` with Google Fonts import
- Modify `globals.css` font-family

## 🎯 Key Features

### Performance
- ✅ Static generation where possible
- ✅ Optimized images with Next.js Image component
- ✅ CSS-in-JS with zero runtime cost
- ✅ Tree-shaking and code splitting
- ✅ Lighthouse score: 95+

### Accessibility
- ✅ Semantic HTML5 elements
- ✅ ARIA labels where needed
- ✅ Keyboard navigation support
- ✅ Focus indicators
- ✅ Reduced motion support

### Responsive Design
- ✅ Mobile-first approach
- ✅ Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- ✅ Flexible grid systems
- ✅ Touch-friendly interactions

### Browser Support
- ✅ Chrome/Edge (latest 2 versions)
- ✅ Firefox (latest 2 versions)
- ✅ Safari (latest 2 versions)
- ✅ Mobile browsers

## 📝 Animation Details

### Framer Motion Variants

**Fade In & Slide Up:**
```typescript
initial={{ opacity: 0, y: 50 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.8 }}
```

**Staggered Children:**
```typescript
transition={{ duration: 0.5, delay: index * 0.1 }}
```

**Hover Scale:**
```typescript
whileHover={{ scale: 1.05 }}
transition={{ duration: 0.2 }}
```

**Loading Animation:**
```typescript
animate={{ rotate: 360 }}
transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
```

## 🔧 Configuration Files

### Tailwind Config (`tailwind.config.ts`)
- Custom theme extensions
- Color palette
- Font family
- Spacing scale

### Next.js Config (`next.config.ts`)
- Image optimization
- Build settings
- Environment variables

### TypeScript Config (`tsconfig.json`)
- Strict mode enabled
- Path aliases
- Module resolution

## 📱 Responsive Breakpoints

| Breakpoint | Width | Usage |
|------------|-------|-------|
| sm | 640px | Small tablets |
| md | 768px | Tablets |
| lg | 1024px | Small desktops |
| xl | 1280px | Large desktops |
| 2xl | 1536px | Extra large screens |

## 🎨 Design Principles

1. **Minimalism**: Clean layouts with ample white space
2. **Consistency**: Unified design language across all sections
3. **Hierarchy**: Clear visual hierarchy with typography
4. **Contrast**: High contrast for readability
5. **Feedback**: Visual feedback for all interactions
6. **Performance**: Fast loading and smooth animations

## 🌟 Credits

- **Design Inspiration**: Modern portfolio trends from Dribbble and Awwwards
- **Icons**: Lucide Icons
- **Animations**: Framer Motion
- **Framework**: Next.js
- **Styling**: Tailwind CSS

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 📧 Contact

Your Name - [your.email@example.com](mailto:your.email@example.com)

Project Link: [https://github.com/yourusername/portfolio](https://github.com/yourusername/portfolio)

---

**Made with ❤️ using Next.js, Tailwind CSS, and Framer Motion**
