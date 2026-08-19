# MGA Electronics — Next.js Architecture

## 1. Technology Stack

### Frontend

* Next.js
* TypeScript
* React
* Tailwind CSS
* shadcn/ui where useful
* Lucide Icons
* Framer Motion only where animation requires it

### Rendering

Prefer:

**React Server Components + Static Rendering**

Use Client Components only when interaction is required.

---

# 2. Application Structure

Use Next.js App Router.

```text
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   │
│   ├── about-us/
│   │   └── page.tsx
│   │
│   ├── products/
│   │   ├── page.tsx
│   │   └── [slug]/
│   │       └── page.tsx
│   │
│   ├── blogs/
│   │   ├── page.tsx
│   │   └── [slug]/
│   │       └── page.tsx
│   │
│   ├── gallery/
│   │   └── page.tsx
│   │
│   ├── brochure/
│   │   └── page.tsx
│   │
│   ├── contact-us/
│   │   └── page.tsx
│   │
│   ├── api/
│   │   └── contact/
│   │       └── route.ts
│   │
│   ├── sitemap.ts
│   └── robots.ts
│
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── TopBar.tsx
│   │   ├── Footer.tsx
│   │   └── MobileMenu.tsx
│   │
│   ├── navigation/
│   │   ├── ProductsMegaMenu.tsx
│   │   └── MobileProductsMenu.tsx
│   │
│   ├── home/
│   │   ├── HeroCarousel.tsx
│   │   ├── TrustStrip.tsx
│   │   ├── FeaturedProducts.tsx
│   │   ├── ProductCategories.tsx
│   │   ├── AboutPreview.tsx
│   │   ├── WhyMGA.tsx
│   │   ├── Applications.tsx
│   │   ├── CustomSolutions.tsx
│   │   ├── FeaturedProduct.tsx
│   │   ├── ClientLogos.tsx
│   │   ├── Testimonials.tsx
│   │   ├── BlogPreview.tsx
│   │   ├── GalleryPreview.tsx
│   │   ├── BrochureCTA.tsx
│   │   └── ContactCTA.tsx
│   │
│   ├── products/
│   │   ├── ProductCard.tsx
│   │   ├── ProductGrid.tsx
│   │   ├── ProductFilters.tsx
│   │   ├── ProductGallery.tsx
│   │   ├── ProductSpecifications.tsx
│   │   └── ProductInquiry.tsx
│   │
│   ├── blogs/
│   │   ├── BlogCard.tsx
│   │   ├── BlogGrid.tsx
│   │   └── BlogContent.tsx
│   │
│   ├── gallery/
│   │   ├── GalleryGrid.tsx
│   │   └── Lightbox.tsx
│   │
│   ├── forms/
│   │   └── ContactForm.tsx
│   │
│   └── ui/
│
├── data/
│   ├── navigation.ts
│   ├── products.ts
│   ├── categories.ts
│   ├── testimonials.ts
│   ├── clients.ts
│   └── applications.ts
│
├── lib/
│   ├── utils.ts
│   ├── seo.ts
│   └── validations.ts
│
├── types/
│   ├── product.ts
│   ├── blog.ts
│   └── gallery.ts
│
└── public/
    ├── images/
    │   ├── products/
    │   ├── hero/
    │   ├── gallery/
    │   ├── blogs/
    │   ├── clients/
    │   └── company/
    │
    ├── brochures/
    └── icons/
```

---

# 3. Routing

### Main routes

```text
/
 /about-us
 /products
 /products/[slug]
 /blogs
 /blogs/[slug]
 /gallery
 /brochure
 /contact-us
```

Keep URLs clean.

Do not use:

```text
/index.php
/product-details.php
/product.php?id=123
```

---

# 4. Navigation Data

Navigation must be data-driven.

Example:

```ts
export const navigation = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About Us",
    href: "/about-us",
  },
  {
    label: "Products",
    href: "/products",
    megaMenu: true,
  },
  {
    label: "Blogs",
    href: "/blogs",
  },
  {
    label: "Gallery",
    href: "/gallery",
  },
  {
    label: "Brochure",
    href: "/brochure",
  },
  {
    label: "Contact Us",
    href: "/contact-us",
  },
];
```

---

# 5. Product Categories

Initial categories based on MGA's existing website:

```text
Battery Chargers
Automotive Battery Chargers
Automatic Battery Chargers
SMPS Battery Chargers
Industrial Battery Chargers
Industrial Chargers
Power Supply
Battery Load Testers
Testing Equipment
2 Wheeler Chargers
4 Wheeler Chargers
Electric Vehicle Chargers
Inverter Chargers
Prince Battery Chargers
```

The architecture must allow categories to be added later without modifying UI components.

---

# 6. Product Data Model

Products should initially be data-driven.

```ts
type Product = {
  id: string;
  slug: string;
  name: string;
  category: string;
  shortDescription: string;
  description: string;
  image: string;
  gallery?: string[];
  specifications: {
    label: string;
    value: string;
  }[];
  features?: string[];
  brochure?: string;
  featured?: boolean;
};
```

Do not hardcode product information inside components.

---

# 7. Product Page Architecture

Product page:

```text
ProductPage
 ├── Breadcrumbs
 ├── ProductGallery
 ├── ProductInformation
 │    ├── Category
 │    ├── ProductName
 │    ├── Description
 │    ├── KeyFeatures
 │    └── RequestQuote
 │
 ├── ProductOverview
 ├── ProductSpecifications
 ├── Applications
 ├── RelatedProducts
 └── ProductInquiryCTA
```

---

# 8. Homepage Architecture

```text
HomePage
 │
 ├── Header
 ├── HeroCarousel
 ├── TrustStrip
 ├── FeaturedProducts
 ├── ProductCategories
 ├── AboutPreview
 ├── WhyMGA
 ├── Applications
 ├── CustomSolutions
 ├── FeaturedProduct
 ├── CompanyStats
 ├── ClientLogos
 ├── Testimonials
 ├── BlogPreview
 ├── GalleryPreview
 ├── BrochureCTA
 ├── ContactCTA
 └── Footer
```

---

# 9. Header Architecture

```text
Header
 ├── TopBar
 └── MainNavigation
      ├── Logo
      ├── DesktopNavigation
      │    ├── Home
      │    ├── About
      │    ├── Products
      │    │    └── ProductsMegaMenu
      │    ├── Blogs
      │    ├── Gallery
      │    ├── Brochure
      │    └── Contact
      │
      ├── RequestQuoteButton
      └── MobileMenuButton
```

---

# 10. Active Navigation

Active route must always be visually indicated.

Example:

```text
Home
About Us
Products  ← active
Blogs
Gallery
Brochure
Contact Us
```

Active state:

* Brand accent
* Slightly stronger font weight
* Optional bottom indicator

Products dropdown must remain functional independently from active route.

---

# 11. Mega Menu

Desktop only.

Structure:

```text
Products
│
├── Battery Chargers
│   ├── Automotive
│   ├── Automatic
│   ├── SMPS
│   ├── Industrial
│   └── Prince
│
└── Power & Testing
    ├── Power Supply
    ├── Load Testers
    ├── Testing Equipment
    ├── 2 Wheeler
    ├── 4 Wheeler
    ├── EV
    └── Inverter
```

At bottom:

```text
View all products →
```

The mega menu should be rendered only when opened.

---

# 12. Mobile Navigation

Mobile navigation should use a slide-down or side-panel menu.

Structure:

```text
Menu
 ├── Home
 ├── About Us
 ├── Products
 │    ├── Battery Chargers
 │    ├── Automotive
 │    ├── Industrial
 │    ├── EV
 │    └── Testing
 ├── Blogs
 ├── Gallery
 ├── Brochure
 └── Contact Us
```

Products becomes an accordion.

---

# 13. Hero Carousel Architecture

Use a lightweight carousel.

Do not make the entire homepage a Client Component.

Only:

```text
HeroCarousel.tsx
```

should be client-side.

Recommended:

* Embla Carousel or lightweight custom implementation
* CSS transitions
* Lazy loading for non-active slides

Hero first image:

```text
priority = true
```

Other images:

```text
loading = "lazy"
```

---

# 14. Animation Architecture

Use animation selectively.

### Framer Motion

Only for:

* page reveal
* navigation dropdown
* mobile menu
* gallery
* complex product interactions

Simple hover animations should use CSS.

Do NOT import Framer Motion into every component.

---

# 15. Performance Architecture

Performance target:

```text
Fast first load
Fast mobile load
Minimal JavaScript
Optimized images
Minimal layout shift
```

### Rules

1. Server Components by default.
2. Client Components only when required.
3. Next/Image everywhere.
4. AVIF/WebP.
5. Proper image dimensions.
6. Lazy load below-fold images.
7. Avoid huge background images.
8. Avoid autoplay videos in hero.
9. Avoid unnecessary third-party scripts.
10. Avoid loading entire icon libraries.
11. Use tree-shakeable imports.
12. Avoid unnecessary global state.

---

# 16. Image Strategy

Folder:

```text
public/images/
```

Structure:

```text
images/
├── hero/
├── products/
├── gallery/
├── blogs/
├── clients/
└── company/
```

Product images should be optimized before deployment.

Preferred:

```text
AVIF
WebP
```

Avoid:

```text
5MB JPEG
8MB PNG
uncompressed camera images
```

---

# 17. SEO Architecture

Every route must have metadata.

Use Next.js Metadata API.

Product:

```text
/products/intelligent-hawk-9
```

should generate unique:

* title
* description
* OpenGraph
* canonical
* product structured data

Blog:

```text
/blogs/battery-charging-guide
```

should generate:

* Article metadata
* OG image
* canonical URL

---

# 18. Sitemap

Generate dynamically using:

```text
app/sitemap.ts
```

Include:

```text
/
 /about-us
 /products
 /products/*
 /blogs
 /blogs/*
 /gallery
 /brochure
 /contact-us
```

---

# 19. Robots

Use:

```text
app/robots.ts
```

Allow public pages.

Do not index unnecessary internal routes.

---

# 20. Contact Form

Contact form should be a Client Component only.

Validation:

```text
Name
Company
Email
Phone
Requirement
Message
```

Use Zod validation.

API:

```text
POST /api/contact
```

The form should show:

* loading state
* success state
* error state

Never expose email credentials to the browser.

---

# 21. Brochure

Brochure should be served as a static asset.

Example:

```text
/public/brochures/mga-product-brochure.pdf
```

The page should provide:

```text
View Brochure
Download Brochure
```

Do not unnecessarily load the PDF inside the homepage.

---

# 22. Blog Architecture

For the first version, blog content can be local Markdown/MDX.

Possible future migration:

```text
CMS
```

should not require rebuilding the UI.

Blog architecture:

```text
BlogList
 └── BlogCard

BlogDetail
 ├── Breadcrumb
 ├── ArticleHeader
 ├── ArticleContent
 ├── RelatedPosts
 └── CTA
```

---

# 23. Gallery Architecture

Gallery should use:

```text
GalleryGrid
 └── GalleryItem
      └── Lightbox
```

Images should load lazily.

Use thumbnails for grid.

Load full-resolution image only after opening the lightbox.

---

# 24. Error Handling

Create:

```text
app/not-found.tsx
app/error.tsx
app/loading.tsx
```

Product not found:

```text
Product Not Found
Explore All Products →
```

Blog not found:

```text
Article Not Found
View Latest Articles →
```

---

# 25. Security

Do not expose:

* SMTP credentials
* API keys
* private environment variables
* database credentials

Use:

```text
.env.local
```

for development secrets.

Only expose variables prefixed with:

```text
NEXT_PUBLIC_
```

when genuinely required.

---

# 26. Component Rules

Components should have one responsibility.

Bad:

```text
HugeHomePageComponent.tsx
```

Good:

```text
HeroCarousel.tsx
FeaturedProducts.tsx
ClientLogos.tsx
Testimonials.tsx
```

Avoid deeply nested unnecessary abstractions.

---

# 27. UI Component Rules

Use shadcn/ui only where it improves consistency.

Potential components:

* Button
* Dialog
* Sheet
* Accordion
* Input
* Textarea
* Badge

Do not turn the entire website into default shadcn cards.

Custom product cards and sections should be designed specifically for MGA.

---

# 28. State Management

Do NOT introduce Redux/Zustand initially.

The website does not require global application state.

Use:

* React state for local UI
* URL search params for product filters
* Server-side data for content

---

# 29. URL Filtering

Product filters should be URL based.

Example:

```text
/products?category=automotive
```

or:

```text
/products?category=industrial
```

This makes filtered pages shareable and SEO-friendly where appropriate.

---

# 30. Deployment

Recommended:

```text
Next.js
Node.js
Linux VPS / Vercel
```

The architecture should remain deployment-independent.

Production build:

```bash
npm run build
npm run start
```

---

# 31. Development Rules for Antigravity

Before writing UI code:

1. Read `design.md`.
2. Read `architecture.md`.
3. Inspect all existing project files.
4. Do not replace working configuration unnecessarily.
5. Build reusable components.
6. Use real MGA content where available.
7. Do not invent company claims.
8. Do not invent product specifications.
9. Do not invent customer relationships.
10. Keep all product data centralized.
11. Keep navigation data centralized.
12. Optimize images.
13. Test desktop and mobile.
14. Test keyboard navigation.
15. Test page loading.
16. Test all navigation links.
17. Test product dropdown.
18. Test carousel.
19. Test contact form.
20. Test product detail routes.

---

# 32. Development Sequence

Build in this order:

### Phase 1

* Project setup
* Global styles
* Typography
* Header
* Footer
* Navigation
* Products mega menu

### Phase 2

* Homepage
* Hero carousel
* Featured products
* Categories
* About
* Applications
* CTA sections

### Phase 3

* Products listing
* Product filters
* Product details
* Specifications
* Related products

### Phase 4

* About page
* Gallery
* Blog
* Brochure
* Contact

### Phase 5

* SEO
* Metadata
* Sitemap
* Robots
* Structured data

### Phase 6

* Performance optimization
* Image optimization
* Accessibility
* Responsive testing
* Lighthouse testing
* Final QA

---

# 33. Final Quality Standard

The website must NOT look like:

* Generic Bootstrap website
* Generic SaaS landing page
* AI-generated template
* Over-designed Dribbble concept
* Excessive animation website

It SHOULD look like:

**A premium, modern, trustworthy Indian industrial manufacturer website.**

The product is the hero.

Typography and whitespace create the premium feel.

Animation adds polish.

Performance remains the priority.
