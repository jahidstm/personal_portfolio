# 🗺️ GUIDE.md — Jahid Hasan Portfolio: Architecture & Design System

> **এই ডকুমেন্ট কী?**
> কোড লেখা শুরুর আগের Master Blueprint। প্রতিটি সিদ্ধান্ত এখানে documented, যাতে build করার সময় AI agent কখনো guess না করে। Section 8 (Vibe Coding Rules) মেনে — **Plan First, Code Never Without Plan.**

---

## 📑 Index

1. [Folder Structure](#1-folder-structure)
2. [Color Palette & Typography](#2-color-palette--typography-system)
3. [Component Architecture](#3-component-architecture)
4. [Animation Strategy](#4-animation-strategy)
5. [Contact Form Architecture](#5-contact-form-architecture)
6. [SEO & Metadata Strategy](#6-seo--metadata-strategy)
7. [Assumptions & Missing Info](#7-assumptions--missing-info-that-need-your-confirmation)

---

## 1. Folder Structure

```
jahid-portfolio/
├── public/
│   ├── images/
│   │   ├── og-image.png           # Open Graph image (1200×630px)
│   │   └── avatar.jpg             # Profile photo [⚠️ NEEDED FROM YOU]
│   ├── favicon.ico
│   └── sitemap.xml                # Auto-generated at build
│
├── src/
│   ├── app/                       # Next.js 15 App Router
│   │   ├── layout.tsx             # Root layout (fonts, metadata, ThemeProvider)
│   │   ├── page.tsx               # Homepage (all sections assembled here)
│   │   ├── globals.css            # CSS custom properties, reset, base styles
│   │   ├── not-found.tsx          # Custom 404
│   │   └── api/
│   │       └── contact/
│   │           └── route.ts       # Contact form API (Resend integration)
│   │
│   ├── components/
│   │   ├── ui/                    # Purely reusable, context-free building blocks
│   │   │   ├── Button.tsx
│   │   │   ├── Badge.tsx          # Tech tag chips (e.g., "Python", "PyTorch")
│   │   │   ├── Card.tsx           # Base card with glassmorphism
│   │   │   ├── SectionHeading.tsx # Consistent section title + subtitle
│   │   │   ├── GlowDot.tsx        # Animated ambient glow decorators
│   │   │   └── AnimatedText.tsx   # Typewriter / staggered letter animation
│   │   │
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── ThemeToggle.tsx    # Dark/light mode switch
│   │   │
│   │   └── sections/              # One file per portfolio section
│   │       ├── Hero.tsx
│   │       ├── About.tsx
│   │       ├── Skills.tsx
│   │       ├── Projects.tsx
│   │       ├── Experience.tsx     # Experience + Education timeline
│   │       └── Contact.tsx
│   │
│   ├── lib/
│   │   ├── constants.ts           # All hardcoded data (projects, skills, timeline)
│   │   ├── utils.ts               # cn() helper, date formatters, etc.
│   │   └── validations.ts         # Zod schema for contact form
│   │
│   ├── hooks/
│   │   ├── useTheme.ts            # Dark/light mode state
│   │   └── useScrollProgress.ts   # Scroll position for nav highlight
│   │
│   └── types/
│       └── index.ts               # All TypeScript interfaces (Project, Skill, etc.)
│
├── .env.local                     # ⚠️ NEVER commit — contains RESEND_API_KEY
├── .env.example                   # Template — safe to commit
├── .eslintrc.json
├── .prettierrc
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json                  # strict: true enforced
└── CLAUDE.md                      # AI agent rules (auto-read by Claude)
```

### কেন এই structure?

- `components/ui/` = context-free, reusable atoms → যেকোনো সেকশনে ব্যবহার করা যাবে
- `components/sections/` = page-specific, data-aware → শুধু homepage-এ ব্যবহার হবে
- `lib/constants.ts` = সব project data এক জায়গায় → AI agent যেন কোনো data invent না করে, সব এই ফাইল থেকে আসবে
- `types/index.ts` = TypeScript strict mode-এ সব interface defined → `any` ব্যবহার করার কোনো excuse নেই

---

## 2. Color Palette & Typography System

### Color Palette

Design philosophy: **Dark-first, high-contrast, accent-driven** — linear.app-এর মতো restrained কিন্তু depth আছে।

```css
/* src/app/globals.css — CSS Custom Properties */
:root {
  /* === DARK MODE (Default) === */

  /* Backgrounds — layered depth */
  --bg-base:        #080B14;   /* Deepest background — near-black with blue tint */
  --bg-surface:     #0D1117;   /* Cards, sections background */
  --bg-elevated:    #161B27;   /* Hover state, elevated cards */
  --bg-overlay:     rgba(13, 17, 23, 0.8); /* Glassmorphism backdrop */

  /* Primary Accent — Electric Indigo/Violet */
  --accent-primary:  #6366F1;  /* Indigo-500 — CTAs, highlights */
  --accent-glow:     #818CF8;  /* Indigo-400 — glow effects */
  --accent-muted:    rgba(99, 102, 241, 0.15); /* Tinted backgrounds */

  /* Secondary Accent — Cyan (for AI/ML flavour) */
  --accent-secondary: #06B6D4; /* Cyan-500 */
  --accent-secondary-muted: rgba(6, 182, 212, 0.1);

  /* Text */
  --text-primary:   #F0F4FF;   /* Almost white — main readable text */
  --text-secondary: #8B9CC8;   /* Muted blue-gray — subtitles, metadata */
  --text-tertiary:  #4B5680;   /* Very muted — placeholders, disabled */

  /* Borders */
  --border-subtle:  rgba(99, 102, 241, 0.12); /* Barely visible — card borders */
  --border-default: rgba(99, 102, 241, 0.25); /* Default borders */
  --border-hover:   rgba(99, 102, 241, 0.5);  /* Hover state borders */

  /* Status */
  --success: #10B981;  /* Emerald-500 — form success */
  --error:   #EF4444;  /* Red-500 — form error */
  --warning: #F59E0B;  /* Amber-500 */

  /* Gradients */
  --gradient-hero: linear-gradient(135deg, #6366F1 0%, #06B6D4 100%);
  --gradient-card: linear-gradient(135deg, rgba(99,102,241,0.08) 0%, rgba(6,182,212,0.04) 100%);
  --gradient-text: linear-gradient(90deg, #6366F1, #06B6D4); /* Gradient text on hero */
}

/* === LIGHT MODE === */
[data-theme="light"] {
  --bg-base:        #F8FAFF;
  --bg-surface:     #FFFFFF;
  --bg-elevated:    #EEF2FF;
  --bg-overlay:     rgba(248, 250, 255, 0.9);

  --accent-primary:  #4F46E5;   /* Indigo-600 — darker for light bg contrast */
  --accent-glow:     #6366F1;
  --accent-muted:    rgba(79, 70, 229, 0.1);

  --accent-secondary: #0891B2;  /* Cyan-600 */
  --accent-secondary-muted: rgba(8, 145, 178, 0.08);

  --text-primary:   #0F172A;    /* Slate-900 */
  --text-secondary: #475569;    /* Slate-600 */
  --text-tertiary:  #94A3B8;    /* Slate-400 */

  --border-subtle:  rgba(79, 70, 229, 0.1);
  --border-default: rgba(79, 70, 229, 0.2);
  --border-hover:   rgba(79, 70, 229, 0.4);

  --gradient-hero: linear-gradient(135deg, #4F46E5 0%, #0891B2 100%);
  --gradient-card: linear-gradient(135deg, rgba(79,70,229,0.06) 0%, rgba(8,145,178,0.03) 100%);
  --gradient-text: linear-gradient(90deg, #4F46E5, #0891B2);
}
```

### Tailwind Config Extension

```typescript
// tailwind.config.ts
export default {
  content: ['./src/**/*.{ts,tsx}'],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        accent: {
          primary: 'var(--accent-primary)',
          glow:    'var(--accent-glow)',
          muted:   'var(--accent-muted)',
        },
        bg: {
          base:     'var(--bg-base)',
          surface:  'var(--bg-surface)',
          elevated: 'var(--bg-elevated)',
        },
        text: {
          primary:   'var(--text-primary)',
          secondary: 'var(--text-secondary)',
          tertiary:  'var(--text-tertiary)',
        },
        border: {
          subtle:  'var(--border-subtle)',
          default: 'var(--border-default)',
          hover:   'var(--border-hover)',
        },
      },
      fontFamily: {
        sans:  ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono:  ['var(--font-jetbrains)', 'ui-monospace', 'monospace'],
      },
      animation: {
        'float':       'float 6s ease-in-out infinite',
        'pulse-glow':  'pulse-glow 2s ease-in-out infinite',
        'shimmer':     'shimmer 2s linear infinite',
      },
      keyframes: {
        float:       { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-10px)' } },
        'pulse-glow': { '0%,100%': { opacity: '0.6' }, '50%': { opacity: '1' } },
        shimmer:     { '0%': { backgroundPosition: '-200% 0' }, '100%': { backgroundPosition: '200% 0' } },
      },
      backdropBlur: { xs: '2px' },
    },
  },
  plugins: [],
};
```

### Typography System

**Fonts:** Google Fonts থেকে (Next.js `next/font/google` দিয়ে load — zero layout shift)

| Role | Font | Weight | Size (rem) | Usage |
|------|------|--------|------------|-------|
| **Display / Hero name** | Inter | 800 (ExtraBold) | 3.75rem–5rem | "Jahid Hasan" |
| **Section Headings** | Inter | 700 (Bold) | 2.25rem | "Projects", "Skills" |
| **Sub-headings** | Inter | 600 (SemiBold) | 1.5rem | Card titles |
| **Body Text** | Inter | 400 (Regular) | 1rem (16px) | Paragraphs |
| **Small / Meta** | Inter | 400 | 0.875rem | Dates, tags |
| **Code / Badges** | JetBrains Mono | 500 | 0.8125rem | Tech stack chips |

**Line Heights:** Display `1.1`, Heading `1.25`, Body `1.7`
**Letter Spacing:** Display `-0.025em`, Heading `-0.01em`, Body `0`

---

## 3. Component Architecture

### Reusable UI Atoms (`components/ui/`)

#### `Button.tsx`
```
Props: variant ('primary'|'secondary'|'ghost'), size ('sm'|'md'|'lg'),
       href (string — renders as <a> if provided), icon (ReactNode), loading (boolean)
States: default, hover (scale 1.02 + glow), active (scale 0.98), loading (spinner)
```

#### `Badge.tsx`
```
Props: label (string), variant ('tech'|'status'|'category'), color (optional override)
Use: Skill tags, project tech stack chips
Style: JetBrains Mono font, rounded-full, var(--accent-muted) bg, 1px border
```

#### `Card.tsx`
```
Props: children, hover (boolean), glow (boolean), className
Style: bg-surface, border-subtle, backdrop-blur-sm, rounded-2xl
Hover: border → border-hover, subtle translateY(-4px), box-shadow glow
Glassmorphism: backdrop-filter: blur(12px), semi-transparent bg
```

#### `SectionHeading.tsx`
```
Props: tag (string — e.g., "03 / Skills"), title (string), subtitle (string)
Style:
  - tag: text-accent-primary, font-mono, text-sm, uppercase tracking-widest
  - title: text-4xl, font-bold, gradient text (var(--gradient-text))
  - subtitle: text-text-secondary, text-lg, max-w-xl
Animation: Framer Motion scroll-triggered fade-up (staggered: tag → title → subtitle)
```

#### `GlowDot.tsx`
```
Props: size (number), color ('primary'|'secondary'), position (absolute CSS coords)
Use: Decorative ambient blobs in hero, section transitions
Style: border-radius 50%, filter: blur(80px), opacity 0.3–0.5, pointer-events: none
Animation: CSS keyframe float (6s, ease-in-out, infinite)
```

#### `AnimatedText.tsx`
```
Props: text (string), variant ('typewriter'|'stagger'|'gradient')
Use: Hero tagline, role display
Pattern: Framer Motion character-by-character stagger with delay
```

### Section Components (`components/sections/`)

| Component | প্রধান কাজ | Data Source |
|-----------|-----------|------------|
| `Hero.tsx` | Full-screen entrance, name, role, CTA | `constants.ts` |
| `About.tsx` | Bio text, photo, quick stats | `constants.ts` (bio text tumi dibe) |
| `Skills.tsx` | Skill groups with animated bars/icons | `constants.ts` |
| `Projects.tsx` | Project cards with verified data only | `constants.ts` |
| `Experience.tsx` | Education + timeline | `constants.ts` |
| `Contact.tsx` | Form + Resend API wired | `api/contact/route.ts` |

---

## 4. Animation Strategy

**Core Principle (Section 8.6 মনে রেখে):** Animation হলো ইউজার experience-এর সার্ভিসে, performance-এর শত্রু না। **No scroll-jacking. No janky infinite loops. Performance-first.**

### Pattern Map

| Section | Animation Pattern | Framer Motion API |
|---------|------------------|-------------------|
| **Page Load** | Staggered fade-up (Navbar → Hero sequentially) | `AnimatePresence` + `initial/animate` |
| **Hero** | Name letters stagger in → tagline types → CTA bounces gently | `motion.span` stagger children |
| **About** | Scroll-triggered: photo slides from left, text from right | `useInView` + `whileInView` |
| **Skills** | Groups reveal top-to-bottom, bars animate width 0→actual | `useInView` + `motion.div` width |
| **Projects** | Cards stagger in on scroll, hover: lift + border glow | `whileInView` + `whileHover` |
| **Experience** | Timeline line draws down, items pop in sequentially | `pathLength` on SVG line + stagger |
| **Contact** | Form fields slide up, labels animate on focus | `AnimatePresence` for error/success states |
| **Nav** | Scroll progress bar at top, active section highlight | `useScrollProgress` hook |
| **Page Transition** | Subtle fade-through between theme toggle | `AnimatePresence` on `[data-theme]` change |

### Performance Rules

```typescript
// ✅ সবসময় এগুলো করবো:
// 1. transform এবং opacity animate করবো — GPU-accelerated
// 2. will-change: transform — শুধু animate হওয়ার আগে, পরে remove করবো
// 3. useInView দিয়ে lazy-trigger — viewport-এ না আসা পর্যন্ত animate করবো না
// 4. viewport: { once: true } — বারবার re-animate করবো না

// ❌ কখনো করবো না:
// 1. layout animate — expensive reflow
// 2. height/width animate (transform: scaleY/scaleX ব্যবহার করবো)
// 3. Infinite heavy animations — শুধু decorative blobs-এ limited
// 4. onScroll-based JS calculations — CSS scroll-driven animations prefer করবো
```

### Reduced Motion Support

```typescript
// সব animated component-এ:
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
// Framer Motion এটা automatically handle করে `useReducedMotion()` hook দিয়ে
```

---

## 5. Contact Form Architecture

### Service Selection: **Resend** ✅

**কেন Resend, Formspree না:**
- Resend = developer-first, Next.js App Router-এর সাথে native integration
- Free tier: ৩,০০০ email/month — portfolio-র জন্য যথেষ্ট
- Full control over email template (branded HTML email possible)
- `resend` npm package: ১.২ MB, actively maintained (weekly updates), MIT license

**Formspree-র সমস্যা:** Third-party service, branding থাকে, custom template কঠিন, data তাদের server-এ যায়।

### Architecture

```
User fills form → Client-side Zod validation → POST /api/contact
    → Server Action (route.ts) → Resend SDK → Email to jahid@...
    → Response: { success: true } or { error: "..." }
    → Client shows AnimatePresence success/error state
```

### Environment Variables

```bash
# .env.local (NEVER commit — gitignored)
RESEND_API_KEY=re_xxxxxxxxxxxx      # From resend.com dashboard
CONTACT_EMAIL=your@email.com        # ⚠️ তোমার actual email — তুমি fill করবে
NEXT_PUBLIC_SITE_URL=https://...    # Vercel deploy-এর পর fill করবে
```

```bash
# .env.example (commit করবো — template হিসেবে)
RESEND_API_KEY=re_your_api_key_here
CONTACT_EMAIL=your@email.com
NEXT_PUBLIC_SITE_URL=https://your-portfolio.vercel.app
```

### Zod Validation Schema (server-side)

```typescript
// lib/validations.ts
import { z } from 'zod';

export const contactSchema = z.object({
  name:    z.string().min(2, 'Name must be at least 2 characters').max(100),
  email:   z.string().email('Please enter a valid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters').max(200),
  message: z.string().min(20, 'Message must be at least 20 characters').max(2000),
});

export type ContactFormData = z.infer<typeof contactSchema>;
```

### Rate Limiting

Portfolio contact form-এ Resend-এর built-in rate limiting যথেষ্ট, কিন্তু server route-এ basic check রাখবো:
```typescript
// api/contact/route.ts — simple IP-based check (no Redis needed for portfolio)
// যদি ১ মিনিটে ৩+ request আসে same IP থেকে — 429 return করবো
```

---

## 6. SEO & Metadata Strategy

```typescript
// app/layout.tsx
export const metadata: Metadata = {
  title: {
    default: 'Jahid Hasan — Data Analyst & AI/ML Engineer',
    template: '%s | Jahid Hasan',
  },
  description: 'Final-year Software Engineering student specializing in Data Science. Building AI/ML systems, data visualizations, and full-stack applications.',
  keywords: ['Data Analyst', 'AI ML Engineer', 'Python', 'Machine Learning', 'Bangladesh', 'Portfolio'],
  authors: [{ name: 'Jahid Hasan', url: 'https://github.com/jahidstm' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: process.env.NEXT_PUBLIC_SITE_URL,
    siteName: 'Jahid Hasan Portfolio',
    title: 'Jahid Hasan — Data Analyst & AI/ML Engineer',
    description: '...',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jahid Hasan — Data Analyst & AI/ML Engineer',
    description: '...',
    images: ['/images/og-image.png'],
  },
  robots: { index: true, follow: true },
  // sitemap auto-generated by next-sitemap package
};
```

---

## 7. Assumptions & Missing Info (তোমার Confirmation দরকার)

নিচের প্রতিটা item আমি **নিজে থেকে guess/invent করিনি** — তোমার কাছ থেকে নিতে হবে। Section 8.2 এর নিয়ম মেনে: **"Constraints বলে দাও, invented data নয়।"**

### ⚠️ Build শুরুর আগে MUST HAVE:

| # | কী দরকার | কেন দরকার | Status |
|---|---------|----------|--------|
| 1 | **Contact email address** | `.env.local`-এ `CONTACT_EMAIL` — ছাড়া form কাজ করবে না | ❌ Missing |
| 2 | **Profile photo** (`avatar.jpg`)| About section এবং OG image-এ | ❌ Missing |
| 3 | **Short bio text** (2–3 paragraph) | About section — AI-generated bio দেবো না | ❌ Missing |
| 4 | **RoktoDut project README/description** | Project card — invented feature দেবো না | ❌ Missing |
| 5 | **BanglaMind project description** | Project card | ❌ Missing |
| 6 | **Shishu Mela Operations Analysis description** | Project card | ❌ Missing |

### ✅ যা আমার কাছে আছে (তোমার prompt থেকে):

| # | কী আছে | Status |
|---|-------|--------|
| 1 | **DRISHTI-Bn** — সম্পূর্ণ description দিয়েছো | ✅ Ready |
| 2 | **HR Analytics (Power BI)** — title আছে | ⚠️ Partial (description দরকার) |
| 3 | **Netflix Data Visualization** — title আছে | ⚠️ Partial |
| 4 | **Bangladesh Population Dashboard** — title আছে | ⚠️ Partial |
| 5 | **GitHub URL** | ✅ Ready |
| 6 | **LinkedIn URL** | ✅ Ready |
| 7 | **Education details** | ✅ Ready |
| 8 | **Tech stack mandate** | ✅ Ready |
| 9 | **Design references** | ✅ Ready |

### Design Decisions (যেগুলো আমি নিয়েছি — তোমার override করার সুযোগ):

| Decision | কী নিয়েছি | Alternative |
|----------|-----------|------------|
| **Primary accent color** | Indigo (#6366F1) + Cyan (#06B6D4) | তুমি যদি অন্য color চাও বলো |
| **Font** | Inter + JetBrains Mono | Geist + Geist Mono (Next.js 15 default) |
| **Contact service** | Resend | Formspree (simpler setup কিন্তু less control) |
| **Projects order** | DRISHTI-Bn first (flagship/thesis), then others | তুমি order বদলাতে পারো |
| **Sections** | Hero, About, Skills, Projects, Experience, Contact, Footer | তোমার original list থেকেই নিয়েছি |

---

*GUIDE.md শেষ — TASKS.md দেখো পরবর্তী document-এ।*
