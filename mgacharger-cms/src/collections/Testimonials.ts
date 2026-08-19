import type { CollectionConfig } from 'payload'
import { isAdminOrEditor } from '../access/isAdminOrEditor'

export const Testimonials: CollectionConfig = {
  slug: 'testimonials',
  admin: {
    useAsTitle: 'author',
    defaultColumns: ['author', 'company', 'order', 'updatedAt'],
  },
  access: {
    read: () => true,
    create: isAdminOrEditor,
    update: isAdminOrEditor,
    delete: isAdminOrEditor,
  },
  fields: [
    {
      name: 'quote',
      type: 'textarea',
      required: true,
      label: 'Testimonial Quote',
    },
    {
      name: 'author',
      type: 'text',
      required: true,
      label: 'Author Designation / Name',
    },
    {
      name: 'company',
      type: 'text',
      required: true,
      label: 'Client Company Name',
    },
    {
      name: 'order',
      type: 'number',
      label: 'Display Order',
      defaultValue: 0,
    },
  ],
}
