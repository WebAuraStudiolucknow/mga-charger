# MGA Electronics Monorepo

Complete Web Ecosystem for **MGA Electronics** (Lucknow, India) — Leading Manufacturer & Exporter of Advanced Industrial Battery Chargers & Customized Power Solutions since 2002.

---

## 📂 Repository Structure

```
mgacharger-monorepo/
├── mgacharger/           # Next.js 15 Frontend Application (TypeScript, TailwindCSS)
│   ├── src/
│   │   ├── app/          # App Router Pages & API Routes
│   │   ├── components/   # UI Components (Header, Footer, Gallery, Products, etc.)
│   │   ├── data/         # Static Data & Specifications Datasets
│   │   └── lib/          # Payload CMS API Integration & Client Helpers
│   └── public/           # Crisp Product Images, Gallery Assets & Favicon
│
└── mgacharger-cms/       # Payload CMS 3.x Backend (MongoDB Atlas Database)
    ├── src/
    │   ├── collections/  # Products, Media, Gallery, Blogs, Enquiries, Warranty
    │   └── seed/         # Data Migration & Media Upload Seeder
    └── payload.config.ts # Payload CMS Configuration
```

---

## ⚡ Quick Start Guide

### 1. Next.js Frontend (`mgacharger/`)
```bash
cd mgacharger
npm install
npm run dev
# Running on http://localhost:3000
```

### 2. Payload CMS Backend (`mgacharger-cms/`)
```bash
cd mgacharger-cms
npm install
npm run dev
# CMS Admin Panel available at http://localhost:3001/admin
```

### 3. Database Migration & Media Seeding
To populate MongoDB Atlas with all 23 products, specs, categories, blogs, and upload media files to Payload CMS:
```bash
cd mgacharger-cms
npm run seed
```

---

## 📧 Official Company Email Accounts

- **General Information Desk**: `info@mgacharger.com`
- **Sales & Commercial Enquiries**: `enquiry@mgacharger.com`
- **Warranty Support & Claims**: `warranty@mgacharger.com`
- **Direct Executive Contact**: `contact@mgacharger.com`

---

## 🔐 Webmail Admin & OTP Portal Access

- **Webmail Portal URL**: [https://s3744.bom1.stableserver.net:2096/](https://s3744.bom1.stableserver.net:2096/)
- **Webmaster Account**: `mgacharger@webaurastudio.in`
- **Password**: `Web@Aura@2026`
- **Usage**: Used for receiving service verification OTPs, MongoDB Atlas account setup, and ImageKit credentials.

---

## 🛠️ Key Technologies
- **Frontend**: Next.js 15, React 19, TypeScript, TailwindCSS, Lucide Icons, Framer Motion.
- **Backend CMS**: Payload CMS 3.x, Node.js, Express.
- **Database**: MongoDB Atlas (Cloud Database).
- **Deployment Target**: Vercel / Custom Node Server.

---
© 2002 - 2026 MGA Electronics. All rights reserved. Developed by WebAuro Studio.
