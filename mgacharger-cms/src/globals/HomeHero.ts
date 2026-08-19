import type { GlobalConfig } from 'payload'
import { isAdminOrEditor } from '../access/isAdminOrEditor'

export const HomeHero: GlobalConfig = {
  slug: 'home-hero',
  label: 'Homepage Hero Slides',
  access: {
    read: () => true,
    update: isAdminOrEditor,
  },
  fields: [
    {
      name: 'slides',
      type: 'array',
      required: true,
      label: 'Hero Slides',
      fields: [
        {
          name: 'eyebrow',
          type: 'text',
          required: true,
          label: 'Eyebrow Tagline (e.g., ENGINEERED SINCE 2002)',
        },
        {
          name: 'heading',
          type: 'text',
          required: true,
          label: 'Main Slide Heading',
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
          label: 'Slide Description',
        },
        {
          name: 'ctaLabel',
          type: 'text',
          required: true,
          label: 'CTA Button Label',
        },
        {
          name: 'ctaLink',
          type: 'text',
          required: true,
          label: 'CTA Button URL / Path',
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
          label: 'Slide Background Image',
        },
      ],
    },
  ],
}
