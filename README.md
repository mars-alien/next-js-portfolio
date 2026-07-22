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
