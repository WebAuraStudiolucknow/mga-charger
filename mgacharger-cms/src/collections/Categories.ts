import type { CollectionConfig } from 'payload'
import { isAdminOrEditor } from '../access/isAdminOrEditor'

export const Categories: CollectionConfig = {
  slug: 'categories',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'slug', 'type', 'updatedAt'],
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
      label: 'Category Name',
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      index: true,
      label: 'Category Slug',
      admin: {
        description: 'URL-friendly identifier (e.g., automotive-battery-chargers)',
      },
    },
    {
      name: 'type',
      type: 'select',
      required: true,
      defaultValue: 'product',
      options: [
        { label: 'Product Category', value: 'product' },
        { label: 'Gallery Category', value: 'gallery' },
        { label: 'Blog Category', value: 'blog' },
      ],
      admin: {
        description: 'Determines where this category appears in content forms.',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Category Description',
    },
  ],
}
