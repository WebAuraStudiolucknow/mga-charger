import dns from 'node:dns'
dns.setServers(['8.8.8.8', '1.1.1.1'])

import 'dotenv/config'
import { getPayload } from 'payload'
import configPromise from '../payload.config'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

async function seed() {
  console.log('🌱 Starting MGA Charger CMS Data Migration Seed to MongoDB Atlas...')
  console.log('🔗 Connecting URI:', process.env.MONGODB_URI ? process.env.MONGODB_URI.replace(/\/\/([^:]+):([^@]+)@/, '//***:***@') : 'NOT_FOUND')

  const payload = await getPayload({ config: configPromise })

  // 1. Seed Categories
  console.log('📦 Seeding Categories...')
  const categoryMap: Record<string, any> = {}

  const productCategories = [
    { name: 'Automotive Battery Chargers', slug: 'automotive', type: 'product' },
    { name: 'Industrial Battery Chargers', slug: 'industrial', type: 'product' },
    { name: 'Power Supply Units', slug: 'power-supply', type: 'product' },
    { name: 'Testing Equipment', slug: 'testing', type: 'product' },
    { name: 'EV Chargers', slug: 'electric-vehicle-chargers', type: 'product' },
  ]

  for (const cat of productCategories) {
    const existing = await payload.find({
      collection: 'categories',
      where: { slug: { equals: cat.slug } },
    })

    if (existing.docs.length === 0) {
      const created = await payload.create({
        collection: 'categories',
        data: cat as any,
      })
      categoryMap[cat.slug] = created.id
      console.log(`  + Category created: ${cat.name}`)
    } else {
      categoryMap[cat.slug] = existing.docs[0].id
      console.log(`  = Category exists: ${cat.name}`)
    }
  }

  // Gallery categories
  const galleryCategories = [
    { name: 'Manufacturing', slug: 'manufacturing', type: 'gallery' },
    { name: 'Products', slug: 'products-gallery', type: 'gallery' },
    { name: 'Factory', slug: 'factory', type: 'gallery' },
  ]

  for (const cat of galleryCategories) {
    const existing = await payload.find({
      collection: 'categories',
      where: { slug: { equals: cat.slug } },
    })

    if (existing.docs.length === 0) {
      const created = await payload.create({
        collection: 'categories',
        data: cat as any,
      })
      categoryMap[cat.slug] = created.id
    } else {
      categoryMap[cat.slug] = existing.docs[0].id
    }
  }

  // 2. Seed Admin User
  console.log('👤 Seeding Admin User...')
  const existingAdmin = await payload.find({
    collection: 'users',
    where: { email: { equals: 'admin@mgacharger.com' } },
  })

  if (existingAdmin.docs.length === 0) {
    await payload.create({
      collection: 'users',
      data: {
        email: 'admin@mgacharger.com',
        password: 'AdminPassword123!',
        name: 'MGA System Admin',
        role: 'admin',
      },
    })
    console.log('  + Created admin user: admin@mgacharger.com (Password: AdminPassword123!)')
  } else {
    console.log('  = Admin user admin@mgacharger.com exists')
  }

  // 3. Seed Products from products.json & Upload Media
  console.log('⚡ Seeding Products & Uploading Media files...')
  const productsJsonPath = path.resolve(__dirname, '../../../mgacharger/src/data/products.json')

  if (fs.existsSync(productsJsonPath)) {
    const productsData = JSON.parse(fs.readFileSync(productsJsonPath, 'utf-8'))

    for (const prod of productsData) {
      const existingProduct = await payload.find({
        collection: 'products',
        where: { slug: { equals: prod.slug } },
      })

      // Attempt to upload image to Media collection
      let mediaId: string | undefined = undefined
      const imageFilePath = path.resolve(__dirname, '../../../mgacharger/public', prod.image.replace(/^\//, ''))

      if (fs.existsSync(imageFilePath)) {
        const existingMedia = await payload.find({
          collection: 'media',
          where: { alt: { equals: prod.name } },
        })

        if (existingMedia.docs.length > 0) {
          mediaId = existingMedia.docs[0].id
        } else {
          try {
            const createdMedia = await payload.create({
              collection: 'media',
              filePath: imageFilePath,
              data: {
                alt: prod.name,
                caption: prod.shortDescription,
                url: prod.image,
              },
            })
            mediaId = createdMedia.id
            console.log(`  📸 Media file uploaded to Payload: ${prod.name}`)
          } catch (mErr: any) {
            console.warn(`  ⚠️ Media upload warning for ${prod.name}:`, mErr?.message || mErr)
          }
        }
      }

      const catId = categoryMap[prod.category] || categoryMap['automotive']

      if (existingProduct.docs.length === 0) {
        await payload.create({
          collection: 'products',
          data: {
            name: prod.name,
            slug: prod.slug,
            category: catId,
            categoryName: prod.categoryName,
            shortDescription: prod.shortDescription,
            description: prod.description,
            image: mediaId,
            imagePath: prod.image,
            gallery: (prod.gallery || []).map((gPath: string) => ({ image: mediaId, imagePath: gPath })),
            specifications: prod.specifications || [],
            features: (prod.features || []).map((f: string) => ({ feature: f })),
            featured: prod.featured || false,
          } as any,
        })
        console.log(`  + Product created in CMS: ${prod.name}`)
      } else {
        await payload.update({
          collection: 'products',
          id: existingProduct.docs[0].id,
          data: {
            name: prod.name,
            category: catId,
            categoryName: prod.categoryName,
            shortDescription: prod.shortDescription,
            description: prod.description,
            image: mediaId || existingProduct.docs[0].image,
            imagePath: prod.image,
            gallery: (prod.gallery || []).map((gPath: string) => ({ image: mediaId, imagePath: gPath })),
            specifications: prod.specifications || [],
            features: (prod.features || []).map((f: string) => ({ feature: f })),
            featured: prod.featured || false,
          } as any,
        })
        console.log(`  ↻ Product updated in CMS: ${prod.name}`)
      }
    }
  }

  // 4. Seed Blogs
  console.log('📰 Seeding Blogs from static data...')
  const blogEntries = [
    {
      title: "SMPS vs Linear Battery Chargers: Which is Better?",
      excerpt: "Comparing Switched-Mode Power Supply chargers with traditional linear chargers for modern automotive and inverter applications.",
      content: "The debate between SMPS and Linear chargers continues. Linear chargers are known for their simplicity and ruggedness, making them suitable for harsh environments. However, they are heavy and less efficient. SMPS chargers, on the other hand, offer high efficiency, compact size, and precise voltage control, but can be more complex. We break down the pros and cons to help you choose the right technology for your specific application.",
      publishedAt: "2023-11-02T00:00:00.000Z",
      author: "Technical Support",
      slug: "smps-vs-linear-chargers",
      status: "published",
    },
    {
      title: "Maintenance Tips for Industrial Battery Chargers",
      excerpt: "Essential maintenance routines to ensure your industrial charging equipment operates at peak efficiency year-round.",
      content: "Industrial chargers work in demanding environments. Regular maintenance is key to preventing downtime. In this guide, we cover routine checks, such as inspecting cables and connectors, ensuring proper ventilation, cleaning cooling fans, and verifying calibration. Implementing a preventive maintenance schedule can extend the life of your charger by years.",
      publishedAt: "2023-12-12T00:00:00.000Z",
      author: "Service Department",
      slug: "industrial-charger-maintenance",
      status: "published",
    },
    {
      title: "The Future of EV Charging Infrastructure in India",
      excerpt: "How MGA Electronics is adapting its product lineup to meet the growing demands of the electric vehicle market.",
      content: "The EV revolution is here, and reliable charging infrastructure is its backbone. We look at the unique challenges of the Indian market, from voltage fluctuations to extreme temperatures. MGA Electronics is actively developing robust EV charging solutions tailored for 2-wheelers and 3-wheelers, focusing on safety, speed, and grid compatibility.",
      publishedAt: "2024-01-20T00:00:00.000Z",
      author: "Product Strategy",
      slug: "future-of-ev-charging-india",
      status: "published",
    },
  ]

  for (const b of blogEntries) {
    const existing = await payload.find({
      collection: 'blogs',
      where: { slug: { equals: b.slug } },
    })

    if (existing.docs.length === 0) {
      await payload.create({
        collection: 'blogs',
        data: b as any,
      })
      console.log(`  + Blog migrated: ${b.title}`)
    }
  }

  // 5. Seed Testimonials
  console.log('💬 Seeding Testimonials...')
  const testimonialsData = [
    {
      quote: "MGA Electronics has provided us with reliable and efficient battery chargers for our fleet. Their industrial chargers perform exceptionally well under heavy usage.",
      author: "Technical Director",
      company: "Leading EV Manufacturer",
      order: 1,
    },
    {
      quote: "The custom charging solution developed by MGA perfectly matched our specific battery chemistry requirements. Excellent engineering support throughout the process.",
      author: "Operations Manager",
      company: "Industrial Equipment Co.",
      order: 2,
    },
    {
      quote: "We've deployed over 500 MGA chargers across our warehousing network. The failure rate is virtually zero, and the thermal management is top-tier.",
      author: "Fleet Supervisor",
      company: "National Logistics Hub",
      order: 3,
    },
  ]

  for (const t of testimonialsData) {
    const existing = await payload.find({
      collection: 'testimonials',
      where: { author: { equals: t.author } },
    })

    if (existing.docs.length === 0) {
      await payload.create({
        collection: 'testimonials',
        data: t,
      })
      console.log(`  + Testimonial added: ${t.company}`)
    }
  }

  console.log('✅ Seed and Migration to MongoDB Atlas completed successfully!')
  process.exit(0)
}

seed().catch((err) => {
  console.error('❌ Migration seed error:', err)
  process.exit(1)
})
