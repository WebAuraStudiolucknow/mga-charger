import type { CollectionConfig } from 'payload'
import { isAdminOrEditor } from '../access/isAdminOrEditor'

export const Blogs: CollectionConfig = {
  slug: 'blogs',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'author', 'status', 'publishedAt'],
  },
  access: {
    read: ({ req: { user } }) => {
      if (user) return true
      return {
        status: {
          equals: 'published',
        },
      }
    },
    create: isAdminOrEditor,
    update: isAdminOrEditor,
    delete: isAdminOrEditor,
  },
  fields: [
    {
      name: 'htmlImportTool',
      type: 'ui',
      admin: {
        components: {
          Field: '@/components/admin/BlogHtmlImportWrapper#BlogHtmlImportWrapper',
        },
      },
    },
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Article Title',
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      index: true,
      label: 'URL Slug',
    },
    {
      name: 'excerpt',
      type: 'textarea',
      required: true,
      label: 'Summary / Excerpt',
    },
    {
      name: 'content',
      type: 'textarea',
      required: true,
      label: 'Blog Content (HTML Supported)',
      admin: {
        description: 'You can write plain text or full HTML markup (e.g. <h2>Title</h2>, <p>Text</p>, <ul><li>List item</li></ul>, <img src="..." />) for customized styling.',
      },
    },
    {
      name: 'featuredImage',
      type: 'upload',
      relationTo: 'media',
      required: false,
      label: 'Featured Image',
    },
    {
      name: 'imagePath',
      type: 'text',
      label: 'Static Image Path Fallback',
    },
    {
      name: 'author',
      type: 'text',
      required: true,
      label: 'Author Name / Department',
    },
    {
      name: 'publishedAt',
      type: 'date',
      required: true,
      defaultValue: () => new Date().toISOString(),
      label: 'Publication Date',
    },
    {
      name: 'status',
      type: 'select',
      required: true,
      defaultValue: 'draft',
      options: [
        { label: 'Draft', value: 'draft' },
        { label: 'Published', value: 'published' },
      ],
      label: 'Publishing Status',
    },
  ],
}
