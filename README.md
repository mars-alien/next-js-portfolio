<<<<<<< HEAD
# Royal Sachan — Portfolio

A personal developer portfolio built with Next.js (App Router). Single-page site with a sticky nav, scroll-reveal animations, light/dark theming, and a data-driven content layer — update what you know, what you've built, and what you've done from a handful of files in `data/`, no touching component markup required.

**Live:** [royals-three.vercel.app](https://royals-three.vercel.app)

---

## Features

- **Light/dark theme** — toggled via a pill switch in the nav, persisted through CSS custom properties (no flash of unstyled content)
- **Scroll progress bar** — a thin accent-colored bar under the ticker that fills as you scroll the page
- **Ticker** — an infinite marquee strip above the nav surfacing highlights (achievements, availability)
- **Typewriter hero role** — cycles through role titles character-by-character
- **Scroll-reveal animations** — sections and cards fade/slide into view via `IntersectionObserver`, driven by `data-reveal` attributes
- **Responsive social rail** — a fixed rail of profile links with colored per-platform accents and hover tooltips; renders as a horizontal dock at the bottom on mobile/tablet and a vertical edge rail on desktop, with layout space structurally reserved so it never overlaps page content
- **Masonry skills grid** — skill categories size to their own content instead of stretching to match the tallest card in a row
- **Project cards** — real project screenshots, per-project accent colors, tag pills, and GitHub/Live Demo links
- **Contact form** — client-side validated, opens a pre-filled `mailto:` link (no backend/API route required)
- **Fully responsive** — custom breakpoints tuned per section, not just a blanket mobile/desktop split

## Tech Stack

- **[Next.js 14](https://nextjs.org/)** (App Router) + **React 18**
- **Fonts:** IBM Plex Sans (body) / IBM Plex Mono (labels, code-styled UI) via `next/font/google`
- **Styling:** hand-written CSS in a single `app/globals.css` — CSS custom properties for the entire design system (colors in `oklch()`, spacing, radii), `color-mix()` for hover states, no utility-class framework driving the actual styles
- **Icons:** [react-icons](https://react-icons.github.io/react-icons/)
- **State/logic:** plain React hooks, no external state library

## Project Structure

```
app/
├── globals.css              # entire design system: tokens, resets, every component's styles
├── layout.jsx               # fonts, <html>/<body> shell, metadata, viewport
└── page.jsx                 # the controller — wires hooks to sections, no content lives here

components/
├── ui/                      # chrome shared across the whole page
│   ├── Navbar.jsx, MobileMenu.jsx, DarkToggle.jsx
│   └── Ticker.jsx, SocialSidebar.jsx
└── sections/                # one component per page section
    └── Hero.jsx, About.jsx, Skills.jsx, Experience.jsx,
        Projects.jsx, Contact.jsx, Footer.jsx

data/                        # content lives here, not in components
├── personal.js              # name, bio, roles, contact links
├── skills.js                # skill categories + accent colors
├── experience.js            # work history entries
├── projects.js              # featured projects
├── achievements.js          # About section achievement list
└── misc.js                  # ticker text, hero tech pills, footer tech list

hooks/                       # one hook, one behavior
└── useScrollProgress.js, useTypewriter.js, useContactForm.js,
    useDarkMode.js, useReveal.js, useNavOffset.js

constants/
└── nav.js                   # nav link labels + section ids (single source for nav/footer/mobile menu)
```

## Getting Started

```bash
npm install
npm run dev       # http://localhost:3000
```

```bash
npm run build      # production build
npm run start        # serve the production build
npm run lint           # ESLint
```

## Customizing

This is set up so a fork mostly means editing `data/`, not the components:

| Want to change... | Edit |
|---|---|
| Name, bio, roles, contact links | `data/personal.js` |
| Skills | `data/skills.js` |
| Work history | `data/experience.js` |
| Projects (screenshots go in `public/images/`) | `data/projects.js` |
| Achievements list | `data/achievements.js` |
| Ticker text, hero tech pills, footer tech list | `data/misc.js` |
| Nav links | `constants/nav.js` |
| Colors, spacing, fonts | CSS custom properties at the top of `app/globals.css` (`:root` for light, `.dm` for dark) |

Each project entry in `data/projects.js` also takes an accent `color` (hex) that drives its card's top border, tag tints, and link button color — pick one per project rather than reusing the global theme accent.

## License

MIT
=======
# 🚀 React Portfolio - Interactive React Developer Portfolio

A modern, feature-rich developer portfolio built with React, showcasing advanced web development skills, interactive components, and cutting-edge technologies.

Portfolio Preview

## ✨ Features & Functionalities

### 🎨 **Visual Design & Animations**
- **Dark/Light Theme Toggle** - Seamless theme switching with Redux state management
- **Framer Motion Animations** - Smooth scroll-triggered animations and micro-interactions
- **Solar System Background** - Interactive animated background with orbiting planets and stars
- **Gradient Effects** - Beautiful gradient overlays and glowing elements
- **Responsive Design** - Fully responsive across all devices and screen sizes

### 🎯 **Core Sections**

#### **Hero Section**
- **Animated Introduction** - Dynamic text animations with typing effects
- **Interactive Contact Buttons** - Quick access to social media and contact information
- **Professional Photo Display** - Responsive image with hover effects
- **Solar System Background** - Custom animated space theme

#### **About Me Section**
- **Personal Story** - Engaging narrative with animated text reveals
- **Professional Background** - Detailed information about skills and experience
- **Interactive Elements** - Hover effects and smooth transitions

#### **Skills Section**
- **Categorized Skills Display** - Organized by Frontend, Backend, and Tools
- **Interactive Skill Cards** - Hover animations and visual feedback
- **Technology Icons** - Comprehensive tech stack with React Icons
- **Progress Indicators** - Visual representation of skill proficiency

#### **Experience Section**
- **Timeline Design** - Vertical timeline with animated cards
- **Company Information** - Detailed work experience with achievements
- **Downloadable Documents** - Direct links to experience letters
- **Technology Tags** - Highlighted tech stack for each role

#### **Projects Section** (Currently Under developing)
- **Project Showcase** - Portfolio of completed projects
- **Image Galleries** - Visual project presentations
- **Project Links** - Direct access to live demos and repositories

#### **Music Section** (Currently Under developing)
- **Music Player Integration** - Spotify and YouTube embeds
- **Favorite Tracks Display** - Curated music selection
- **Interactive Player Controls** - Play, pause, and track navigation

### 🤖 **Interactive Features**

#### **AI Chatbot Assistant**
- **Intelligent Responses** - AI-powered conversation about skills and experience
- **Quick Response Buttons** - Pre-defined conversation starters
- **Real-time Typing Indicators** - Simulated AI thinking process
- **Contextual Information** - Detailed responses about projects and skills
- **Floating Chat Interface** - Always accessible chat widget

#### **Tinder-Style Code Review Game**
- **Interactive Learning** - Swipe-based code review game
- **Multiple Programming Languages** - JavaScript, React, CSS, Python
- **Educational Content** - Learn coding best practices through gameplay
- **Score Tracking** - Monitor your coding knowledge progress
- **Visual Feedback** - Color-coded responses and explanations

### 📱 **Navigation & UX**

#### **Smart Navigation**
- **Sticky Navigation Bar** - Always accessible menu with blur effects
- **Smooth Scrolling** - React Scroll integration for seamless navigation
- **Mobile Menu** - Responsive hamburger menu for mobile devices
- **Active Section Highlighting** - Visual feedback for current section

#### **Contact Form**
- **EmailJS Integration** - Functional contact form with email delivery
- **Form Validation** - Client-side validation with error handling
- **Success Notifications** - User feedback for successful submissions
- **Responsive Design** - Optimized for all screen sizes

### 🎭 **Advanced Animations**

#### **Framer Motion Integration**
- **Scroll-Triggered Animations** - Elements animate as they enter viewport
- **Hover Effects** - Interactive hover states with scale and color changes
- **Page Transitions** - Smooth transitions between sections
- **Staggered Animations** - Sequential element animations

#### **Custom Animation Variants**
- **Fade In/Out** - Smooth opacity transitions
- **Slide Animations** - Directional slide effects
- **Scale Transforms** - Interactive scaling effects
- **Rotation Effects** - Subtle rotation animations

## 🛠️ **Technology Stack**

### **Frontend Framework**
- **React 18.3.1** - Latest React with concurrent features
- **Vite 6.0.3** - Fast build tool and development server
- **JSX** - Component-based architecture

### **State Management**
- **Redux Toolkit 2.5.0** - Modern Redux for state management
- **React Redux 9.2.0** - React bindings for Redux
- **Persistent Theme State** - Theme preferences stored in Redux

### **Styling & UI**
- **Tailwind CSS 3.4.17** - Utility-first CSS framework
- **PostCSS 8.4.49** - CSS processing
- **Custom CSS Variables** - Dynamic theming support
- **Responsive Design** - Mobile-first approach

### **Animation & Interactions**
- **Framer Motion 11.15.0** - Production-ready motion library
- **React Icons 5.4.0** - Comprehensive icon library
- **React Scroll 1.9.0** - Smooth scrolling functionality

### **Form Handling**
- **Formik 2.4.6** - Form state management
- **EmailJS 4.4.1** - Email service integration

### **Development Tools**
- **ESLint 9.17.0** - Code linting and formatting
- **TypeScript Support** - Type checking capabilities
- **Hot Module Replacement** - Fast development experience

## 🚀 **Getting Started**

### **Prerequisites**
- Node.js (v18 or higher)
- npm or yarn package manager

### **Installation**

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/react-portfolio.git
   cd react-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### **Build for Production**

```bash
npm run build
```

### **Preview Production Build**

```bash
npm run preview
```



## 📁 **Project Structure**

```
Royal_Portfolio/
├── public/                 # Static assets
│   ├── images/            # Project images and asset
├── src/
│   ├── components/        # React components
│   │   ├── aboutMeSection/    # About me components
│   │   ├── ChatBot/           # AI chatbot functionality
│   │   ├── contactMeSection/  # Contact form components
│   │   ├── experienceSection/ # Experience timeline
│   │   ├── footer/            # Footer components
│   │   ├── heroSection/       # Hero section components
│   │   ├── musicSection/      # Music player components
│   │   ├── navbar/            # Navigation components
│   │   ├── projectsSection/   # Project showcase
│   │   ├── skillsSection/     # Skills display
│   │   ├── SolarSystemBackground.jsx  # Animated background
│   │   ├── TinderCardGame.jsx # Code review game
│   │   └── ThemeProvider.jsx  # Theme management
│   ├── framerMotion/      # Animation variants
│   ├── state/             # Redux store and slices
│   ├── App.jsx            # Main application component
│   └── main.jsx           # Application entry point
├── package.json          # Dependencies and scripts
├── tailwind.config.js    # Tailwind CSS configuration
└── vite.config.js        # Vite configuration
```

## 🎮 **Interactive Features Deep Dive**

### **AI Chatbot Capabilities**
- **Natural Language Processing** - Understands user queries about skills and experience
- **Contextual Responses** - Provides relevant information based on user questions
- **Quick Actions** - Pre-defined buttons for common queries
- **Realistic Interactions** - Typing indicators and response delays

### **Code Review Game Mechanics**
- **Swipe Interface** - Intuitive left/right swipe controls
- **Educational Content** - Learn coding best practices through interactive gameplay
- **Multiple Languages** - Covers JavaScript, React, CSS, Python, and more
- **Score Tracking** - Monitor progress and learning outcomes
- **Visual Feedback** - Color-coded responses and detailed explanations

## 🎨 **Design System**

### **Color Palette**
- **Primary Colors** - Blue gradients and cyan accents
- **Dark Theme** - Deep slate backgrounds with blue highlights
- **Light Theme** - Clean white backgrounds with subtle gradients
- **Accent Colors** - Purple, pink, and green for visual interest

### **Typography**
- **Custom Font Stack** - Optimized for readability
- **Responsive Text Sizing** - Scales appropriately across devices
- **Gradient Text Effects** - Eye-catching gradient text overlays

### **Spacing & Layout**
- **Consistent Spacing** - Tailwind CSS spacing system
- **Grid Layouts** - Responsive grid systems for content organization
- **Flexbox Components** - Flexible layouts for dynamic content

## 🔧 **Configuration**

### **Environment Variables**
Create a `.env` file for EmailJS configuration:
```env
EMAILJS_SERVICE_ID=your_service_id
EMAILJS_TEMPLATE_ID=your_template_id
EMAILJS_PUBLIC_KEY=your_public_key
```

### **Customization**
- **Personal Information** - Update content in component files
- **Color Scheme** - Modify Tailwind config for custom colors
- **Animations** - Adjust Framer Motion variants for different effects
- **Content** - Replace images, text, and links with your own

## 📱 **Performance Optimizations**

- **Code Splitting** - Automatic code splitting with Vite
- **Image Optimization** - Optimized images for fast loading
- **Lazy Loading** - Components load as needed
- **Bundle Optimization** - Tree shaking and minification
- **Caching Strategies** - Efficient caching for static assets

## 🌟 **Key Highlights**

- **Modern React Patterns** - Hooks, functional components, and modern practices
- **Advanced Animations** - Professional-grade motion design
- **Interactive Elements** - Engaging user interactions throughout
- **Responsive Design** - Perfect experience on all devices
- **Performance Focused** - Optimized for speed and efficiency
- **Accessibility** - WCAG compliant design patterns
- **SEO Optimized** - Search engine friendly structure

## 🤝 **Contributing**

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 **Contact**

- **LinkedIn**: (https://www.linkedin.com/in/royalsachan)
- **GitHub**: (https://github.com/mars-alien/react-portfolio/)
- **Email**: royalsachaniiitm@gmail.com

---

**Built with ❤️ using React, Framer Motion, and Tailwind CSS**

*This portfolio showcases modern web development techniques, interactive design patterns, and cutting-edge technologies to create an engaging user experience.*






>>>>>>> a13bc2986c489f2f275edd8c75db3471daebb808
