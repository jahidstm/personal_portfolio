# 🤖 CLAUDE.md — Portfolio AI Agent Rules

@AGENTS.md

## Project Context
Building Jahid Hasan's developer portfolio.
Stack: Next.js 16 (App Router), TypeScript (strict), Tailwind CSS, Framer Motion, Lucide React.

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
For detailed patterns and standards, see `professional-web-development-lifecycle.md` Section 8 and `GUIDE.md`.
