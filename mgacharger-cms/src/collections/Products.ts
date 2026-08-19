import type { CollectionConfig } from 'payload'
import { isAdminOrEditor } from '../access/isAdminOrEditor'
import { seoGroup } from '../fields/seo'

export const Products: CollectionConfig = {
  slug: 'products',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'slug', 'category', 'featured', 'updatedAt'],
  },
  access: {
    read: () => true,
    create: isAdminOrEditor,
    update: isAdminOrEditor,
    delete: isAdminOrEditor,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: 'Product Title / Name',
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      index: true,
      label: 'URL Slug',
      admin: {
        description: 'Unique URL slug (e.g., active-12-volt-12-amp)',
      },
    },
    {
      name: 'category',
      type: 'relationship',
      relationTo: 'categories',
      required: true,
      filterOptions: {
        type: { equals: 'product' },
      },
      label: 'Product Category',
    },
    {
      name: 'categoryName',
      type: 'text',
      label: 'Category Display Name Override',
      admin: {
        description: 'Optional display label (e.g., Automotive Battery Chargers)',
      },
    },
    {
      name: 'shortDescription',
      type: 'textarea',
      required: true,
      label: 'Short Description (Catalog Summary)',
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
      label: 'Full Description',
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: false,
      label: 'Primary Product Image',
    },
    {
      name: 'imagePath',
      type: 'text',
      label: 'Static Image Path Fallback',
      admin: {
        description: 'Path from Next.js static assets (e.g., /products/prod_active_12v.png)',
      },
    },
    {
      name: 'gallery',
      type: 'array',
      label: 'Product Image Gallery',
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
        },
        {
          name: 'imagePath',
          type: 'text',
          label: 'Static Image Path Fallback',
        },
      ],
    },
    {
      name: 'specifications',
      type: 'array',
      label: 'Technical Specifications (Key/Value Rows)',
      admin: {
        description: 'Product specifications table entries (e.g., Output Voltage: 12V DC)',
      },
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
          label: 'Specification Label',
        },
        {
          name: 'value',
          type: 'text',
          required: true,
          label: 'Specification Value',
        },
      ],
    },
    {
      name: 'features',
      type: 'array',
      label: 'Key Features & Capabilities',
      fields: [
        {
          name: 'feature',
          type: 'text',
          required: true,
          label: 'Feature Highlight',
        },
      ],
    },
    {
      name: 'featured',
      type: 'checkbox',
      label: 'Featured Product (Show on Homepage)',
      defaultValue: false,
    },
    seoGroup,
  ],
}
