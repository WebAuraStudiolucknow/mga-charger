import type { GroupField } from 'payload'

export const seoGroup: GroupField = {
  name: 'seo',
  label: 'SEO Metadata',
  type: 'group',
  fields: [
    {
      name: 'metaTitle',
      type: 'text',
      label: 'Meta Title',
      admin: {
        description: 'Overrides default page title for search engines.',
      },
    },
    {
      name: 'metaDescription',
      type: 'textarea',
      label: 'Meta Description',
      admin: {
        description: 'Brief summary of the page for search engine results.',
      },
    },
    {
      name: 'ogImage',
      type: 'upload',
      relationTo: 'media',
      label: 'OpenGraph Image',
      admin: {
        description: 'Image displayed when sharing link on social media.',
      },
    },
    {
      name: 'canonicalUrl',
      type: 'text',
      label: 'Canonical URL',
    },
    {
      name: 'noIndex',
      type: 'checkbox',
      label: 'Prevent indexing (noindex)',
      defaultValue: false,
    },
  ],
}
