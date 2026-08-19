import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Categories } from './collections/Categories'
import { Products } from './collections/Products'
import { Blogs } from './collections/Blogs'
import { News } from './collections/News'
import { Enquiries } from './collections/Enquiries'
import { WarrantyRegistrations } from './collections/WarrantyRegistrations'
import { Gallery } from './collections/Gallery'
import { Testimonials } from './collections/Testimonials'

import { HomeHero } from './globals/HomeHero'
import { SiteSettings } from './globals/SiteSettings'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    components: {
      beforeDashboard: [
        '/components/admin/DashboardStats#DashboardStats',
      ],
    },
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [
    Users,
    Media,
    Categories,
    Products,
    Blogs,
    News,
    Enquiries,
    WarrantyRegistrations,
    Gallery,
    Testimonials,
  ],
  globals: [
    HomeHero,
    SiteSettings,
  ],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || 'mgacharger_payload_secret_key_2026_super_secure',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/mgacharger-cms',
  }),
  sharp,
  localization: {
    locales: ['en'],
    fallback: true,
    defaultLocale: 'en',
  },
})
