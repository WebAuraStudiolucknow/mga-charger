# MGA Electronics — Website Design System & UI Specification

## 1. Design Direction

MGA Electronics website should feel like a **modern Indian industrial product manufacturer**, not like a generic corporate template.

### Core design principles

* Minimal
* Clean
* Product-first
* Professional
* Industrial
* Trustworthy
* Fast
* Spacious
* Strong typography
* High-quality product photography
* Subtle animations
* No unnecessary gradients
* No excessive glassmorphism
* No excessive rounded cards
* No flashy 3D effects
* No overloaded sections

The website should communicate:

> **MGA Electronics manufactures reliable battery charging and power solutions for automotive, industrial and energy applications.**

The visual language should be closer to a premium industrial product catalog than a typical service-company website.

---

# 2. Color System

Use a predominantly white interface.

### Primary

* Background: `#FFFFFF`
* Secondary background: `#F7F8FA`
* Primary text: `#111111`
* Secondary text: `#5F6368`
* Border: `#E7E8EA`

### Brand accent

Use MGA's existing brand identity where appropriate, but keep the accent restrained.

Suggested accent:

* Primary Accent: `#E31E24`
* Dark Accent: `#B51218`
* Light Accent Background: `#FFF3F3`

Do NOT make the entire website red.

Red should primarily appear on:

* Primary CTA
* Active navigation state
* Small highlights
* Product badges
* Important numbers
* Hover states

---

# 3. Typography

Use a modern sans-serif font.

Recommended:

* Inter
* Geist
* Manrope

Preferred:

**Inter**

Typography should have strong hierarchy.

### Example

Hero heading:

`Reliable Power. Engineered for Performance.`

Large desktop heading:

* 56–72px
* Weight: 600–700
* Line-height: 0.95–1.05

Section heading:

* 36–48px
* Weight: 600

Body:

* 16–18px
* Line-height: 1.6

Product title:

* 20–24px
* Weight: 600

Avoid overly decorative fonts.

---

# 4. Layout

Use a wide container.

Desktop:

`max-width: 1280px`

Large desktop:

`max-width: 1400px`

Mobile:

`padding: 20px`

Desktop horizontal padding:

`32px–48px`

Sections should have generous vertical spacing.

Typical:

`96px–140px`

Do not make every section extremely tall.

---

# 5. Navigation

Create a premium sticky navbar.

### Top utility bar

Very thin top bar.

Left:

`Since 2002`

Right:

`+91-7499394690`
`+91-9076731251`
`mgacharger@yahoo.com`

On mobile, simplify this.

### Main navbar

Logo on left.

Navigation:

* Home
* About Us
* Products
* Blogs
* Gallery
* Brochure
* Contact Us

CTA:

`Request a Quote`

### Navbar behavior

Desktop:

* Sticky
* White background
* Very subtle bottom border
* Slight shadow only after scrolling
* Active page clearly highlighted

Do NOT use a giant navbar.

### Products dropdown

Products must have a mega-menu.

Two-column layout.

Column 1:

**Battery Chargers**

* Automotive Battery Chargers
* Automatic Battery Chargers
* SMPS Battery Chargers
* Battery Chargers
* Industrial Battery Chargers
* Industrial Chargers
* Prince Battery Chargers

Column 2:

**Power & Testing**

* Power Supply
* Battery Load Testers
* Testing Equipment
* 2 Wheeler Chargers
* 4 Wheeler Chargers
* Electric Vehicle Chargers
* Inverter Chargers

At the bottom:

`View All Products →`

The dropdown should open smoothly.

Animation:

* opacity
* translateY
* 150–220ms

No exaggerated animation.

---

# 6. Hero Section

Hero must immediately communicate that MGA is a manufacturer.

Use a **carousel**.

Do NOT use a typical huge marketing banner with random stock photos.

Each slide should contain:

Left:

* Small eyebrow
* Large heading
* Short description
* CTA
* Secondary CTA

Right:

* High-quality product image
* Product/environment image
* Subtle background treatment

### Slide 1

Eyebrow:

`ENGINEERED SINCE 2002`

Heading:

`Reliable Power. Built for Real-World Performance.`

Description:

`Advanced battery chargers and power solutions engineered for automotive, industrial and energy applications.`

Buttons:

`Explore Products`

`Request a Quote`

### Slide 2

Heading:

`Smart Charging Solutions for Modern Batteries`

Description:

Highlight automatic charging, protection and efficient power management.

CTA:

`Explore Chargers`

### Slide 3

Heading:

`Power Solutions Built Around Your Requirements`

Description:

Highlight customization and OEM manufacturing.

CTA:

`Talk to Our Team`

### Carousel behavior

* Auto-play: 5–6 seconds
* Pause on hover
* Keyboard accessible
* Swipe on mobile
* Arrow controls
* Small progress indicators
* Smooth transitions

Use CSS transforms rather than heavy animation libraries where possible.

---

# 7. Trust Strip

Immediately below hero.

Minimal horizontal section.

Example:

`20+ Years`
`Indian Manufacturer`
`OEM Solutions`
`Export Capabilities`
`Technical Support`

Use simple typography/icons.

No giant cards.

---

# 8. Featured Products

Heading:

`Built for Every Charging Requirement`

Subheading:

`Explore MGA's range of battery chargers, testing equipment and power solutions.`

Show 6–8 products.

Product card:

* Product image
* Category
* Product name
* Short specification
* `View Product →`

Cards should be clean white cards with subtle borders.

Avoid heavy shadows.

Product image area should have light gray background.

---

# 9. Product Card Design

Each card:

```text
┌──────────────────────────┐
│                          │
│      PRODUCT IMAGE       │
│                          │
├──────────────────────────┤
│ AUTOMOTIVE CHARGER       │
│ ECO-9 MINI               │
│                          │
│ 9A • 120–240V            │
│                          │
│ View Details →           │
└──────────────────────────┘
```

Hover:

* Image slightly scales: `1.02–1.04`
* Arrow moves 4px
* Border becomes accent color
* No giant card movement

---

# 10. Product Categories

Create a visual category section.

Categories:

* Automotive
* Industrial
* Electric Vehicle
* Inverter
* Battery Chargers
* Testing Equipment
* Power Supply

Each category should have:

* Small image/icon
* Category name
* Product count
* Arrow

---

# 11. About Section

Two-column layout.

Left:

Large company/product image.

Right:

Small eyebrow:

`ABOUT MGA ELECTRONICS`

Heading:

`Powering Industries Since 2002`

Content:

MGA Electronics is a manufacturer and exporter of battery chargers and customized power solutions.

Highlight:

* Since 2002
* Lucknow, India
* Manufacturer
* OEM / Custom Solutions

CTA:

`More About MGA →`

Keep text concise.

---

# 12. Why Choose MGA

Use 4 simple feature blocks.

### Engineering

Products designed for dependable real-world operation.

### Customization

OEM and customized charger solutions.

### Technical Support

Professional technical assistance.

### Reliable Manufacturing

Experience built over two decades.

Use minimal line icons.

---

# 13. Industries / Applications

Section title:

`Powering Different Applications`

Show application categories:

* Automotive
* Commercial Vehicles
* Inverters
* Electric Vehicles
* Industrial Equipment
* Battery Manufacturing
* Renewable Energy
* Specialized Battery Systems

Use large horizontal visual cards.

---

# 14. Custom Solutions Section

This should be an important conversion section.

Background can be slightly darker.

Heading:

`Need a Charger Built for Your Application?`

Description:

`MGA develops customized battery charging and power solutions based on voltage, current, battery chemistry and application requirements.`

CTA:

`Discuss Your Requirement`

Secondary:

`Download Brochure`

---

# 15. Product Showcase

Create a larger editorial-style product section.

Example:

Left:

Large product image.

Right:

`FEATURED PRODUCT`

`Intelligent Hawk 9`

Short product description.

Specifications:

* Automatic charging
* Digital display
* Multi-battery support
* Protection system
* Compact design

CTA:

`View Product`

---

# 16. Numbers / Company Stats

Keep this section extremely minimal.

Possible metrics:

* 20+ Years Experience
* 100+ Products
* Multiple Industries
* OEM Solutions

Do not use fake numbers.

Only use verified company statistics.

---

# 17. Client / Brand Trust

Existing website mentions clients such as:

* Luminous
* Exide
* Terra Motor
* Goldstar
* Massimo
* Eastman
* Tuffbull
* Genus
* Livfast
* Hi Power

Display these as logos in a clean horizontal marquee or grid.

Important:

Do not claim partnership unless MGA officially confirms the relationship.

Use:

`Trusted by battery and energy industry customers`

instead of making unsupported partnership claims.

---

# 18. Testimonials

Minimal testimonial section.

Use 2–3 testimonials.

Layout:

Large quote on left.

Customer/company information on right.

Carousel optional.

Avoid giant testimonial cards.

---

# 19. Blogs Section

Homepage should show latest 3 blogs.

Card:

* Featured image
* Category
* Date
* Title
* Short excerpt
* Read Article →

Potential topics:

* Battery charging basics
* Lead-acid battery charging
* EV battery charging
* Industrial charger selection
* Battery maintenance
* SMPS charger technology

---

# 20. Gallery Preview

Show a clean masonry/grid layout.

Categories:

* Manufacturing
* Products
* Factory
* Events
* Team

CTA:

`View Gallery →`

Images must be optimized.

Use thumbnails instead of loading original high-resolution images.

---

# 21. Brochure CTA

Simple full-width section.

Heading:

`Explore the Complete MGA Product Range`

Description:

`Download our latest product brochure and explore battery chargers, testing equipment and power solutions.`

Button:

`Download Brochure`

---

# 22. Contact Section

Two-column.

Left:

`Let's Discuss Your Requirement`

Contact information:

Phone

Email

Address

Business hours

Right:

Contact form.

Fields:

* Name
* Company
* Email
* Phone
* Product / Requirement
* Message

CTA:

`Send Enquiry`

Optional:

WhatsApp button.

---

# 23. Footer

Footer should contain:

### MGA Electronics

Short company description.

### Navigation

* Home
* About Us
* Products
* Blogs
* Gallery
* Brochure
* Contact Us

### Products

* Battery Chargers
* Automotive Chargers
* Industrial Chargers
* EV Chargers
* Testing Equipment
* Power Supply

### Contact

Phone

Email

Address

Bottom:

`© MGA Electronics. All Rights Reserved.`

Privacy Policy

Terms & Conditions

---

# 24. Product Listing Page

URL:

`/products`

Layout:

Header:

`Our Products`

Description.

Then category filters.

Desktop:

Left filter / categories.

Right product grid.

Product grid:

* 3 columns desktop
* 2 columns tablet
* 1 column mobile

Product cards should show:

* Image
* Category
* Name
* Key specification
* View Details

Do not add fake prices if MGA sells primarily through enquiry.

Primary CTA:

`View Details`

Secondary:

`Request Quote`

---

# 25. Product Detail Page

URL:

`/products/[slug]`

This page should feel like a premium product-selling page.

Layout:

Left:

Large product gallery.

Right:

* Category
* Product name
* Short description
* Key specifications
* Request Quote button
* Download brochure

Below:

### Product Overview

### Key Features

### Specifications

Use a clean specification table.

Example:

| Specification | Details             |
| ------------- | ------------------- |
| Brand         | MGA                 |
| Model         | ECO-9 Mini          |
| Output        | 9 Amp               |
| Voltage       | 120–240V            |
| Battery Type  | Lead Acid / Tubular |
| Warranty      | 1 Year              |

Only show specifications available for that specific product.

---

# 26. Gallery Page

URL:

`/gallery`

Use:

* Category tabs
* Responsive grid
* Lazy loading
* Lightbox

Animations should be subtle.

---

# 27. Blog Page

URL:

`/blogs`

Layout:

Featured article.

Then:

3-column article grid.

Each article:

* Image
* Category
* Date
* Title
* Excerpt
* Read More

Blog detail:

`/blogs/[slug]`

SEO-friendly content structure.

---

# 28. About Page

URL:

`/about-us`

Sections:

1. Hero
2. Company story
3. Since 2002
4. Manufacturing capability
5. Product expertise
6. OEM/custom solutions
7. Quality & reliability
8. Applications
9. CTA

---

# 29. Animation System

Animations should feel premium but restrained.

Use:

* Fade-up
* Fade-in
* Small translate
* Image scale 1.02–1.04
* Smooth hover
* Navbar dropdown
* Carousel transition
* Number counter only where meaningful

Recommended duration:

* Micro interaction: 150–200ms
* UI transition: 200–300ms
* Section reveal: 500–700ms

Use `prefers-reduced-motion`.

Never animate everything.

---

# 30. Performance Requirements

Performance is a first-class design requirement.

### Images

Use Next.js Image.

Always provide:

* width
* height
* sizes
* priority only for hero images

Use:

* WebP
* AVIF where appropriate

Lazy-load:

* Gallery
* Blog images
* Product images below fold
* Client logos

### Hero

Only the first hero image should have high priority.

Do not load all carousel images immediately if unnecessary.

Use optimized responsive image sources.

### Fonts

Avoid loading many font weights.

Prefer:

* 400
* 500
* 600
* 700

### JavaScript

Avoid unnecessary client components.

Prefer Server Components.

Only use `"use client"` for:

* Navbar interaction
* Carousel
* Filters
* Gallery lightbox
* Forms
* Interactive UI

---

# 31. Responsive Design

### Desktop

1280px+

### Laptop

1024–1279px

### Tablet

768–1023px

### Mobile

Below 768px

Mobile navbar:

Logo

Menu button

Full-screen/slide-in navigation.

Products opens accordion.

Do not use desktop mega menu on mobile.

---

# 32. Accessibility

Must support:

* Keyboard navigation
* Visible focus states
* Semantic HTML
* Proper heading hierarchy
* Alt text
* Accessible buttons
* Accessible carousel controls
* Reduced motion
* Sufficient contrast

---

# 33. SEO UI Requirements

Each page must have:

* Unique title
* Meta description
* Canonical URL
* Open Graph metadata
* Structured headings

Product pages should use Product/Organization structured data only when the information is accurate.

Blog pages should use Article structured data.

Organization schema should include verified company information.

---

# 34. Overall Visual Rule

The final design should make the user think:

**"This is a serious battery technology manufacturer."**

Not:

**"This is a template website."**

Use whitespace, typography, product photography and layout to create the premium feel.

Avoid:

* excessive gradients
* excessive shadows
* giant rounded containers
* neon colors
* excessive glass effects
* unnecessary 3D
* animated backgrounds
* stock-business imagery
* excessive icons
* generic SaaS layouts
