# ✅ TASKS.md — Jahid Hasan Portfolio: Phased Build Plan

> **গুরুত্বপূর্ণ নিয়ম (Section 8 থেকে):**
> - প্রতিটা phase শেষ করে verification pass করার আগে পরের phase-এ যাবো না
> - প্রতিটা logical change = আলাদা git commit (rollback সহজ করতে)
> - যে project data নেই, সেই section build করবো না — invented data = hard STOP
> - প্রতিটা AI-generated কোড আমি নিজে পড়বো এবং বুঝবো — blindly accept না

---

## 📊 Phase Overview

```
Phase 1: Foundation          → Setup + Design System + Navbar + Footer
Phase 2: Hero + About        → [⚠️ bio text দরকার]
Phase 3: Skills + Projects   → [⚠️ project READMEs দরকার — gate আছে]
Phase 4: Experience + Contact → [⚠️ email + Resend key দরকার]
Phase 5: Polish + Deploy     → Final audit + Vercel
```

---

## 🚀 Phase 1: Foundation — Project Setup + Design System + Layout

**লক্ষ্য:** কোড একটাও না লিখে যেন বলা যায় — "এই প্রজেক্টের convention কী, color system কী, base component কী" — সেই foundation তৈরি করা।

### 1.1 Project Initialization

```bash
# ⚠️ Section 8.4 (dependency verification) — আগে --help দিয়ে check করো
npx create-next-app@latest ./
# Options: TypeScript ✅, ESLint ✅, Tailwind ✅, App Router ✅, src/ dir ✅, import alias @/* ✅
```

- [x] `npx create-next-app@latest ./` রান করো (above flags সহ)
- [x] `package.json` verify করো — Next.js 15, React 19, TypeScript, Tailwind আছে কিনা
- [x] `tsconfig.json`-এ `"strict": true` আছে কিনা confirm করো
- [x] **Commit:** `chore: initialize Next.js 15 project with TypeScript and Tailwind`

### 1.2 Dependencies Install

```bash
# Core animation and icons
npm install framer-motion lucide-react

# Contact form
npm install resend zod

# Utility
npm install clsx tailwind-merge
```

প্রতিটা package install-এর আগে npmjs.com-এ verify করো (Section 8.4):

| Package | Weekly Downloads | Last Publish | License | Status |
|---------|-----------------|-------------|---------|--------|
| `framer-motion` | ~5M | সাম্প্রতিক | MIT | ✅ Verified |
| `lucide-react` | ~4M | সাম্প্রতিক | ISC | ✅ Verified |
| `resend` | ~300K | সাম্প্রতিক | MIT | ✅ Verified |
| `zod` | ~8M | সাম্প্রতিক | MIT | ✅ Verified |
| `clsx` | ~20M | সাম্প্রতিক | MIT | ✅ Verified |
| `tailwind-merge` | ~10M | সাম্প্রতিক | MIT | ✅ Verified |

- [x] সব package install হয়েছে
- [x] `npm audit` রান করো — 0 high/critical vulnerabilities
- [x] **Commit:** `chore: install framer-motion, lucide-react, resend, zod, clsx`

### 1.3 Folder Structure তৈরি

GUIDE.md-এ defined structure তৈরি করো:

- [x] `src/components/ui/` ফোল্ডার তৈরি
- [x] `src/components/layout/` ফোল্ডার তৈরি
- [x] `src/components/sections/` ফোল্ডার তৈরি
- [x] `src/lib/` ফোল্ডার তৈরি
- [x] `src/hooks/` ফোল্ডার তৈরি
- [x] `src/types/index.ts` তৈরি (empty with TODO comments)
- [x] `src/app/api/contact/route.ts` তৈরি (empty placeholder)
- [x] `public/images/` ফোল্ডার তৈরি
- [x] **Commit:** `chore: scaffold project folder structure`

### 1.4 Environment Setup

- [x] `.env.example` তৈরি করো (GUIDE.md Section 5-এ দেওয়া template)
- [x] `.env.local` তৈরি করো (actual values — `CONTACT_EMAIL` এবং `RESEND_API_KEY` placeholder রাখো)
- [x] `.gitignore`-এ `.env.local` আছে কিনা verify করো
- [x] **⚠️ Secret check:** `git status` দেখো — `.env.local` untracked থাকা উচিত, staged না
- [x] **Commit:** `chore: add .env.example template`

### 1.5 Code Quality Tools

```json
// .eslintrc.json
{
  "extends": ["next/core-web-vitals", "eslint:recommended"],
  "rules": {
    "no-unused-vars": "error",
    "no-console": "warn",
    "@typescript-eslint/no-explicit-any": "error"
  }
}
```

```json
// .prettierrc
{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 100
}
```

- [x] ESLint flat config (`eslint.config.mjs`) strict rules কনফিগার করা হলো
- [x] `.prettierrc` তৈরি করা হলো
- [x] `npm run lint` রান করো — 0 errors
- [x] **Commit:** `chore: add ESLint and Prettier config`

### 1.6 `CLAUDE.md` তৈরি (AI Agent Rules)

```markdown
# 🤖 CLAUDE.md — Portfolio AI Agent Rules

## Project Context
Building Jahid Hasan's developer portfolio.
Stack: Next.js 15 (App Router), TypeScript (strict), Tailwind CSS, Framer Motion, Lucide React.

## Non-Negotiable Rules
1. TypeScript strict mode — NO `any` type ever. Use proper interfaces from `src/types/index.ts`.
2. All project data lives in `src/lib/constants.ts` — never invent project descriptions, metrics, or tech stacks.
3. One feature = one focused component. No 500+ line files.
4. All user inputs must be validated with Zod — even portfolio contact forms.
5. Never hardcode secrets — always `process.env.VARIABLE_NAME`.
6. Animation: transform/opacity only — no layout animations. Always add `useReducedMotion()` support.
7. Accessibility: semantic HTML, proper ARIA labels, focus states, color contrast >= 4.5:1.
8. Before suggesting any npm package: verify it exists on npmjs.com, check weekly downloads > 10K, check last publish < 1 year.

## Full Reference
For detailed patterns and standards, see `docs/professional-web-development-lifecycle.md` Section 8.
```

- [x] `CLAUDE.md` তৈরি করো project root-এ
- [x] **Commit:** `docs: add CLAUDE.md AI agent rules`

### 1.7 Global Styles ও Design System

GUIDE.md Color Palette সম্পূর্ণ `src/app/globals.css`-এ implement করো:

- [x] সব CSS custom properties (dark + light mode) implement করো
- [x] Google Fonts (Inter + JetBrains Mono) `src/app/layout.tsx`-এ `next/font/google` দিয়ে load করো
- [x] Tailwind CSS v4 `@theme` design tokens ও keyframe animations CSS-এ add করো (`float`, `pulse-glow`, `shimmer`)
- [x] **Commit:** `feat(design): implement color system and typography in globals.css`

### 1.8 TypeScript Types Define

```typescript
// src/types/index.ts
export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  techStack: string[];
  category: 'ML/AI' | 'Web' | 'Data Analytics' | 'Dashboard';
  status: 'completed' | 'in-progress' | 'research';
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  imageUrl?: string;
}

export interface Skill {
  name: string;
  category: 'Languages' | 'ML/AI' | 'Data' | 'Web' | 'Tools';
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  icon?: string;
}

export interface TimelineItem {
  type: 'education' | 'experience';
  title: string;
  organization: string;
  period: string;
  description: string;
  tags?: string[];
  current?: boolean;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
```

- [x] সব interfaces `src/types/index.ts`-এ define করো
- [x] **Commit:** `feat(types): define TypeScript interfaces for all data models`

### 1.9 `lib/constants.ts` — Data Foundation

এখানে শুধু confirmed data রাখবো। Missing data = empty array বা TODO comment।

- [x] Skills data — নিশ্চিত ডাটা দিয়ে `constants.ts`-এ add করা হলো
- [x] Education data — DIU details add করা হলো
- [x] Projects array — শুধু DRISHTI-Bn এখন add করা হলো (confirmed data), বাকিগুলো Phase 3-এ
- [x] Social links — GitHub, LinkedIn, Email add করা হলো
- [x] **Commit:** `feat(data): add confirmed constants (education, skills skeleton, social links)`

### 1.10 Reusable UI Components তৈরি

প্রতিটা component আলাদা commit:

- [x] `src/components/ui/Button.tsx` তৈরি করা হলো (primary/secondary/ghost variants, loading state)
- [x] `src/components/ui/Badge.tsx` তৈরি করা হলো (tech/status/category variants)
- [x] `src/components/ui/Card.tsx` তৈরি করা হলো (glassmorphism + hover lift)
- [x] `src/components/ui/SectionHeading.tsx` তৈরি করা হলো (scroll-triggered stagger animation)
- [x] `src/components/ui/GlowDot.tsx` তৈরি করা হলো (ambient CSS float decoration)
- [x] `src/components/ui/BrandIcons.tsx` তৈরি করা হলো (GitHub + LinkedIn custom SVG)
- [x] **Commit:** `feat(ui): add Button, Badge, Card, SectionHeading, GlowDot components (Task 1.10)`

### 1.11 Navbar তৈরি

- [x] `src/components/layout/Navbar.tsx` তৈরি করা হলো:
  - Logo/name, nav links, social icons, Hire Me CTA
  - Mobile hamburger menu (Framer Motion AnimatePresence)
  - Active section highlight via IntersectionObserver
  - Background blur on scroll (CSS `backdrop-filter`)
- [x] **Commit:** `feat(layout): add Navbar with mobile menu and scroll behavior`

### 1.12 ThemeToggle তৈরি

- [x] `src/components/layout/ThemeToggle.tsx` তৈরি করা হলো
- [x] `src/hooks/useTheme.ts` তৈরি করা হলো — `localStorage` persist, system preference detect
- [x] Root `layout.tsx`-এ FOUC prevention inline script inject করা হলো
- [x] **Commit:** `feat(layout): add dark/light mode toggle with localStorage persist`

### 1.13 Footer তৈরি

- [x] `src/components/layout/Footer.tsx` তৈরি করা হলো:
  - Copyright, GitHub, LinkedIn, Email links
  - "Built with Next.js & ❤️" subtle credit
  - Scroll-to-top button
- [x] **Commit:** `feat(layout): add Footer component`

### 1.14 Root Layout ও Page Assembly

- [x] `src/app/layout.tsx` update করা হলো — Inter + JetBrains Mono fonts, full SEO metadata, Navbar, Footer, FOUC script
- [x] `src/app/page.tsx` তৈরি করা হলো — section placeholders with GlowDot decorations
- [x] `src/app/not-found.tsx` তৈরি করা হলো — custom 404 page
- [x] **Commit:** `feat(layout): add Navbar, ThemeToggle, Footer, root layout wiring, 404 page (Tasks 1.11-1.14)`

---

### ✅ Phase 1 Verification — এগুলো pass না করলে Phase 2-তে যাওয়া যাবে না:

```bash
npm run build    # Zero TypeScript errors, zero ESLint errors required
npm run lint     # Clean
```

- [x] `npm run build` সফলভাবে complete হয়েছে — 0 errors, 0 warnings ✅
- [x] `npm run lint` — 0 errors ✅
- [x] Dark/Light toggle কাজ করছে — localStorage persist হচ্ছে ✅
- [x] System dark mode preference detect হচ্ছে ✅
- [x] Mobile Navbar menu — Framer Motion AnimatePresence দিয়ে animate হচ্ছে ✅
- [x] Theme toggle করার পর FOUC prevention inline script আছে ✅
- [x] `git log --oneline` — প্রতিটা feature আলাদা meaningful commit আছে ✅

---

## 🎨 Phase 2: Hero + About Section

**Prerequisites:** Phase 1 Verification ✅ পাস করা
**⚠️ Gate:** About section-এর জন্য তোমার bio text দরকার — নিচে format দেখো।

### তোমাকে এখন দিতে হবে (Phase 2 শুরুর আগে):

```markdown
## আমার Bio (About Section-এর জন্য)

**Headline (1 line):** [তোমার একটা punchy tagline — e.g., "Turning raw data into intelligent decisions"]

**Short Bio (2-3 paragraph):**
[paragraph 1 — কে তুমি, কোথায় পড়ছো]
[paragraph 2 — তুমি কী নিয়ে passionate, কী বানিয়েছো]
[paragraph 3 — Future goal / what you're looking for]

**Quick Stats (4টা):**
- Stat 1: [e.g., "3+ Projects Completed"]
- Stat 2: [e.g., "1 Research Paper Targeting"]
- Stat 3: [e.g., "2+ Years Coding"]
- Stat 4: [e.g., "5+ Data Dashboards Built"]
```

### 2.1 Hero Section

- [x] `src/components/sections/Hero.tsx` তৈরি করা হলো:
  - Full viewport height (`min-h-screen`)
  - Staggered entrance: Name → Role → Tagline → CTAs → Scroll indicator
  - Gradient text on name "Jahid Hasan"
  - Animated dynamic role display (flipping between 4 roles)
  - Two CTAs: "View Projects" (primary) + "Download CV" (secondary)
  - 3× GlowDot ambient decorations + 4 CSS-only floating shapes
  - Scroll-down bouncing arrow indicator
- [x] **Commit:** `feat(hero): add Hero section with staggered entrance animation (Task 2.1)`

### 2.2 About Section

- [x] `src/components/sections/About.tsx` তৈরি করা হলো:
  - Profile photo (left) — scroll-triggered slide from left + glow ring
  - Bio text (right) — scroll-triggered slide from right (3 paragraphs)
  - 4 Quick Stats — animated counter (0 → number) via IntersectionObserver
  - "Open to Work" floating badge with pulsing green dot
  - Location/education info pills + tech tag cloud
- [x] `public/images/profile.png` ও `public/resume.pdf` যোগ করা হলো
- [x] **Commit:** `feat(about): add About section with profile photo and resume (Task 2.2)`

### 2.3 OG Image তৈরি

- [x] `public/images/og-image.jpg` তৈরি করা হলো — AI-generated, dark theme, 1200×630px, name + role + geometric glow decorations
- [x] `layout.tsx`-এ `openGraph.images` ও `twitter.images` wire করা হলো
- [x] **Commit:** `feat(seo): add OG image and wire openGraph/twitter metadata (Task 2.3)`

---

### ✅ Phase 2 Verification:

```bash
npm run build   # Still clean
```

- [x] Hero-তে সব animations smooth — janky নয়
- [x] Mobile (375px): Hero text overflow করছে না, সব readable
- [x] Lighthouse → Chrome DevTools → Lighthouse tab → Performance >= 80
- [x] `prefers-reduced-motion: reduce` simulate করো → animations skip হচ্ছে
- [x] About section-এ profile photo aspect ratio ঠিক আছে সব screen-এ
- [x] **Commit:** `chore: phase 2 complete - hero and about sections verified`

---

## 🛠️ Phase 3: Skills + Projects Section

**Prerequisites:** Phase 2 Verification ✅
**⚠️ HARD GATE — এই phase শুরু করার আগে:**

নিচের সব project-এর description/README পেলেই কোড লিখবো — একটাও missing থাকলে সেই card build করবো না:

```
প্রজেক্ট গেট চেকলিস্ট:
[x] DRISHTI-Bn         ✅ Description provided
[x] RoktoDut           ✅ README provided
[x] HR Analytics       ✅ README provided
[x] BanglaMind         ✅ README provided
[x] Shishu Mela        ✅ README provided
[x] Netflix Viz        ✅ README provided
[x] BD Population      ✅ README provided
```

> **কেন এই gate?** Section 8.2 এর Don'ts: "পুরো project একবারে না"। আর আরো গুরুত্বপূর্ণ — তোমার নিজের instruction: "Do not fabricate metrics, tech stack, or outcomes." Invented project descriptions হলো professional reputation-এর জন্য সবচেয়ে বড় ঝুঁকি।

### 3.1 Skills Section

Skills data তোমার কাছ থেকে নিয়ে `constants.ts`-এ add করার পর:

- [x] `src/components/sections/Skills.tsx` তৈরি করা হলো:
  - Category tabs: All / Languages / ML/AI / Data Analytics / Web & Backend / Tools
  - প্রতিটা skill — CheckCircle2 icon + name + level badge (Beginner/Proficient/Advanced/Expert)
  - "All" view-এ grouped by category with horizontal dividers
  - Scroll-triggered stagger animation via useInView
  - Summary bar — category count breakdown
- [x] **Commit:** `feat(skills+projects): add Skills section (Task 3.1)`

### 3.2 Projects Section

- [x] `src/components/sections/Projects.tsx` তৈরি করা হলো:
  - Featured project (DRISHTI-Bn) — large card at top with highlights list
  - Remaining projects — 3-column grid (desktop), 1-column (mobile)
  - Each card: title, description (line-clamp-2), tech badges, GitHub link, status badge
  - Hover: card lift (-4px) + border glow + inner radial glow
  - Filter tabs: All / ML-AI / Web / Data Analytics / Dashboard
  - Scroll-triggered stagger (cards appear one by one via AnimatePresence)
  - "More coming soon" note — remaining projects await repo links
- [x] **Commit:** `feat(skills+projects): add Projects section with verified data (Task 3.2)`

> **⚠️ Build-time check:** ✅ TypeScript strict build passed — zero errors.

---

### ✅ Phase 3 Verification:

```bash
npm run build
npm run type-check   # tsc --noEmit
```

- [x] Zero TypeScript errors
- [x] প্রতিটা project card-এ শুধু verified data আছে — কোনো invented metric নেই
- [x] GitHub links সব actual valid URLs
- [x] Project filter কাজ করছে (category tabs functional)
- [x] Mobile-এ cards overflow করছে না (responsive grid)
- [x] Cards-এ focus state আছে (keyboard navigation via Link + button)
- [x] **Commit:** `chore: phase 3 skills and projects verified`

---

## 📞 Phase 4: Experience/Education + Contact Form

**Prerequisites:** Phase 3 Verification ✅
**⚠️ Gate:** Contact email এবং Resend API key ছাড়া form test করা সম্ভব না।

### Resend Setup (Phase 4 শুরুর আগে তোমাকে করতে হবে):

```
1. resend.com → Sign up (ফ্রি)
2. Dashboard → API Keys → Create API Key
3. সেই key .env.local-এ RESEND_API_KEY=re_xxx হিসেবে রাখো
4. CONTACT_EMAIL= তোমার actual email দাও
```

### 4.1 Experience & Education Section

- [x] `constants.ts`-এ Education timeline data যোগ করো:
  - DIU — Software Engineering (Data Science specialization) — Aug 2022 – Dec 2026 (current)
  - যদি কোনো internship বা work experience থাকে — জানাও
- [x] `src/components/sections/Experience.tsx` তৈরি করো:
  - Vertical timeline layout
  - Animated vertical line (Framer Motion `pathLength` 0→1 on scroll)
  - Timeline items stagger in sequentially
  - "Current" badge on active position
  - Education + Experience একই timeline-এ (type দিয়ে differentiate)
- [x] **Commit:** `feat(experience): add Experience and Education timeline section`

### 4.2 Contact Form — Zod Validation Schema

- [x] `src/lib/validations.ts` তৈরি করো — GUIDE.md Section 5-এ দেওয়া schema implement করো
- [x] **Commit:** `feat(contact): add Zod validation schema for contact form`

### 4.3 Contact API Route

```typescript
// src/app/api/contact/route.ts — এই pattern follow করে লিখবো
// 1. Request body parse করো
// 2. Zod দিয়ে server-side validate করো (client bypass হলেও safe)
// 3. Basic rate limiting check
// 4. Resend SDK দিয়ে email পাঠাও
// 5. Proper error handling — Resend error হলে user-friendly message
// 6. Success response
```

- [x] `src/app/api/contact/route.ts` implement করো
- [x] Error handling সব edge case cover করছে কিনা check করো:
  - [x] Empty body
  - [x] Invalid email format
  - [x] Message too short
  - [x] Resend API down হলে
  - [x] Environment variable missing হলে
- [x] **Commit:** `feat(api): add contact form API route with Resend integration`

### 4.4 Contact Section UI

- [x] `src/components/sections/Contact.tsx` তৈরি করো:
  - Left: "Let's Connect" heading + GitHub, LinkedIn, Email links
  - Right: Form (name, email, subject, message)
  - Client-side validation (form submit-এর আগে)
  - Loading state (submit-এর সময় button disabled + spinner)
  - Success state (AnimatePresence — checkmark animation + thank you message)
  - Error state (AnimatePresence — error message + retry option)
  - Form fields focus animation (label floats up — CSS transition)
- [x] **Commit:** `feat(contact): add Contact section with form and social links`

### 4.5 Contact Form Integration Test

- [ ] Local dev-এ form fill করো, submit করো
- [ ] তোমার email inbox-এ actual email এসেছে কিনা verify করো
- [ ] Error case test করো — invalid email দিয়ে submit — proper error দেখাচ্ছে কিনা
- [ ] Rate limit test — ৩+ বার submit করো quickly — 429 handle হচ্ছে কিনা
- [ ] **Commit:** `test(contact): verify email delivery and error states`

---

### ✅ Phase 4 Verification:

```bash
npm run build
```

- [ ] Form submit করলে actual email যাচ্ছে
- [ ] Invalid input-এ proper error message (Zod error messages user-friendly)
- [ ] Loading state দেখা যাচ্ছে submit-এর সময়
- [ ] Success state animate হচ্ছে
- [ ] Mobile-এ form fields ঠিকমতো দেখাচ্ছে, keyboard overlap করছে না
- [ ] Form-এ keyboard navigation সম্ভব (Tab দিয়ে)
- [ ] Screen reader-এ error messages announce হচ্ছে (aria-live region)
- [ ] **Commit:** `chore: phase 4 complete - experience and contact verified`

---

## 🎯 Phase 5: Polish + Optimization + Vercel Deploy

**Prerequisites:** Phase 4 Verification ✅

**লক্ষ্য:** Lighthouse 90+ across all categories। Client-ready product।

### 5.1 Page Transitions

- [ ] `src/app/layout.tsx`-এ page mount animation যোগ করো (subtle fade-in — `AnimatePresence`)
- [ ] **Commit:** `feat(animation): add page load transition`

### 5.2 Scroll Progress Bar

- [ ] Navbar-এ top-of-page scroll progress bar যোগ করো (CSS `scaleX` animation — performant)
- [ ] **Commit:** `feat(ui): add scroll progress bar to navbar`

### 5.3 Performance Optimization

```bash
npm run build
# Output-এ bundle sizes দেখো
```

- [ ] Bundle analyzer চালাও — কোনো unnecessarily large package আছে কিনা দেখো
- [ ] Images: `next/image` ব্যবহার হচ্ছে কিনা সব জায়গায় check করো
- [ ] Fonts: `next/font` দিয়ে load হচ্ছে, no FOUT
- [ ] Dynamic import — heavy sections (Projects) `dynamic()` দিয়ে lazy load করো কিনা বিবেচনা করো
- [ ] **Commit:** `perf: optimize bundle size and image loading`

### 5.4 SEO Final Check

- [ ] `app/layout.tsx`-এ সব metadata correct আছে কিনা verify করো (GUIDE.md Section 6)
- [ ] OG image URL correct (production URL দিয়ে)
- [ ] `robots.txt` add করো (Next.js 15-এ `app/robots.ts` দিয়ে)
- [ ] `sitemap.xml` generate করো (`app/sitemap.ts` দিয়ে)
- [ ] **Commit:** `feat(seo): add robots.txt and sitemap.xml generation`

### 5.5 Accessibility Audit

- [ ] Chrome DevTools → Lighthouse → Accessibility — সব issues fix করো
- [ ] `axe DevTools` Chrome extension দিয়ে scan করো
- [ ] Keyboard navigation test — শুধু Tab/Shift+Tab/Enter দিয়ে পুরো site navigate করো
- [ ] Color contrast verify করো — GUIDE.md-এ defined colors WCAG AA compliant (4.5:1 ratio)
- [ ] Skip-to-content link আছে কিনা verify করো
- [ ] **Commit:** `fix(a11y): resolve accessibility audit findings`

### 5.6 Cross-Browser ও Responsive Final Test

- [ ] Chrome (Desktop + Mobile emulation)
- [ ] Firefox
- [ ] Safari (if available — বা BrowserStack)
- [ ] Edge

Responsive breakpoints:
- [ ] 375px (iPhone SE)
- [ ] 390px (iPhone 14)
- [ ] 768px (iPad)
- [ ] 1024px (iPad Pro landscape)
- [ ] 1280px (standard laptop)
- [ ] 1440px (large desktop)

- [ ] **Commit:** `fix(responsive): resolve cross-browser and responsive issues`

### 5.7 Final Lighthouse Audit

```
Target scores:
Performance:    >= 90
Accessibility:  >= 95
Best Practices: >= 90
SEO:           >= 95
```

- [ ] Chrome DevTools → Lighthouse → Desktop mode — scores confirm করো
- [ ] Chrome DevTools → Lighthouse → Mobile mode — scores confirm করো
- [ ] যদি Performance < 90 হয়: LCP, CLS, INP issues identify করে fix করো
- [ ] **Commit:** `perf: lighthouse optimizations for 90+ scores`

### 5.8 Pre-Deploy Security Check (Section 7.4 থেকে, portfolio-relevant)

- [ ] `git log --all --full-history -- .env.local` — কোনো commit-এ .env.local নেই তো?
- [ ] `npm audit` — 0 high/critical vulnerabilities
- [ ] Production build-এ কোনো `console.log()` নেই (ESLint rule কাজ করছে)
- [ ] `NEXT_PUBLIC_SITE_URL` correct production URL দিয়ে set করো
- [ ] **Commit:** `security: pre-deploy security verification`

### 5.9 Vercel Deploy

```bash
# Vercel CLI দিয়ে:
npx vercel

# Environment variables Vercel dashboard-এ set করো:
# RESEND_API_KEY = re_xxx...
# CONTACT_EMAIL = your@email.com
# NEXT_PUBLIC_SITE_URL = https://your-portfolio.vercel.app
```

- [ ] Vercel account তৈরি করো (vercel.com)
- [ ] GitHub repo-তে push করো
- [ ] Vercel-এ repo import করো
- [ ] Environment variables Vercel dashboard-এ set করো (`.env.local`-এর values)
- [ ] Deploy করো
- [ ] Production URL-এ contact form test করো — real email যাচ্ছে কিনা
- [ ] Custom domain connect করো (যদি থাকে)
- [ ] **Commit:** `chore: production deployment verified`

---

### ✅ Phase 5 Final Verification (সব pass না হলে client-ready না):

```bash
npm run build   # Zero errors
npm audit       # Zero high/critical
```

- [ ] Lighthouse Performance >= 90 (Desktop)
- [ ] Lighthouse Accessibility >= 95
- [ ] Lighthouse SEO >= 95
- [ ] Production URL-এ form থেকে email আসছে
- [ ] Dark/Light toggle production-এ কাজ করছে
- [ ] Responsive সব breakpoint-এ ঠিক আছে
- [ ] OG image Facebook/LinkedIn preview-তে দেখা যাচ্ছে (ogp.me দিয়ে test করো)
- [ ] Sitemap Google Search Console-এ submit করো
- [ ] **Final commit:** `chore: v1.0.0 - portfolio production deployment complete`

---

## 📝 Git Commit Summary (Section 8.5 মেনে)

প্রতিটা phase-এ commits এভাবে হওয়া উচিত:

```
Phase 1: ~15 commits  (প্রতিটা component/config আলাদা)
Phase 2: ~5 commits   (Hero, About, OG image)
Phase 3: ~4 commits   (Skills, Projects, constants data, verification)
Phase 4: ~6 commits   (Experience, validation, API, Contact UI, test)
Phase 5: ~8 commits   (transitions, perf, seo, a11y, responsive, deploy)
─────────────────────
Total:   ~38 commits  (meaningful, rollback-friendly history)
```

---

## ⚠️ Missing Information Summary (Build Blockers)

এগুলো ছাড়া নির্দিষ্ট phase-এ কাজ আটকে যাবে:

| Info | কোন Phase Blocks | Priority |
|------|-----------------|----------|
| **Contact email** | Phase 4 (form can't send) | 🔴 Critical |
| **Profile photo** | Phase 2 (About section) | 🔴 Critical |
| **Bio text** | Phase 2 (About section) | 🔴 Critical |
| **RoktoDut description** | Phase 3 (project card) | ✅ Provided |
| **BanglaMind description** | Phase 3 (project card) | ✅ Provided |
| **Shishu Mela description** | Phase 3 (project card) | ✅ Provided |
| **HR Analytics description** | Phase 3 (project card) | ✅ Provided |
| **Netflix Viz description** | Phase 3 (project card) | ✅ Provided |
| **BD Population description** | Phase 3 (project card) | ✅ Provided |
| **Work experience (if any)** | Phase 4 (timeline) | 🟢 Optional |
| **CV/Resume file** | Phase 2 (Hero CTA link) | 🟢 Optional |

---

*TASKS.md শেষ — এখন তোমার approval-এর অপেক্ষায়। কোনো পরিবর্তন দরকার হলে বলো, Phase 1 শুরু করবো।*
