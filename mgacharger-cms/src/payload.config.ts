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

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)
const defaultOrigins = ['http://localhost:3000', 'https://mga-charger.vercel.app']
const configuredOrigins = (process.env.CORS_ORIGINS || '')
  .split(',')
  .map((origin) => origin.trim())
  .filter(Boolean)
const allowedOrigins = [...new Set([...defaultOrigins, ...configuredOrigins])]

export default buildConfig({
  cors: allowedOrigins,
  csrf: allowedOrigins,
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    components: {
      beforeDashboard: [
        '@/components/admin/DashboardStatsWrapper#DashboardStatsWrapper',
      ],
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
