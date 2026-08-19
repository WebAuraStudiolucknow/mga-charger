import type { CollectionConfig } from 'payload'
import { isAdminOrEditor } from '../access/isAdminOrEditor'
import { getImageKit, buildTransformedUrl } from '../lib/imagekit'

export const Gallery: CollectionConfig = {
  slug: 'gallery',
  upload: {
    staticDir: 'public/gallery',
    adminThumbnail: 'thumbnail',
    imageSizes: [
      {
        name: 'thumbnail',
        width: 300,
        height: 300,
        position: 'centre',
      },
      {
        name: 'card',
        width: 600,
        height: 400,
        position: 'centre',
      },
    ],
  },
  access: {
    read: () => true,
    create: isAdminOrEditor,
    update: isAdminOrEditor,
    delete: isAdminOrEditor,
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['filename', 'title', 'categoryName', 'createdAt'],
  },
  hooks: {
    beforeValidate: [
      ({ req, data }) => {
        if (data) {
          // Auto-populate title if empty during bulk upload
          if (!data.title || !data.title.trim()) {
            const rawName = req?.file?.name || data?.filename || 'Gallery Image'
            data.title = rawName.replace(/\.[^/.]+$/, '').replace(/[-_]/g, ' ')
          }
        }
        return data
      },
    ],
    beforeChange: [
      async ({ req, data }) => {
        const file = req.file
        if (file && file.data) {
          try {
            const ik = getImageKit()
            const response = await ik.upload({
              file: file.data,
              fileName: file.name || 'gallery-upload.png',
              folder: '/mgacharger/gallery',
              useUniqueFileName: true,
            })

            data.imagekitFileId = response.fileId
            data.url = response.url
            data.thumbnailUrl = response.thumbnailUrl || buildTransformedUrl(response.filePath, { width: 300, height: 300 })
            data.width = response.width || data.width
            data.height = response.height || data.height
          } catch (err) {
            console.error('Gallery ImageKit upload warning (continuing with local file fallback):', err)
            const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3001'
            if (!data.url && file.name) {
              data.url = `${serverUrl}/api/gallery/file/${file.name}`
            }
          }
        }
        return data
      },
    ],
    afterDelete: [
      async ({ doc }) => {
        if (doc && doc.imagekitFileId) {
          try {
            const ik = getImageKit()
            await ik.deleteFile(doc.imagekitFileId)
            console.log(`Successfully purged gallery file ${doc.imagekitFileId} from ImageKit`)
          } catch (err) {
            console.error(`Failed to delete gallery ImageKit file ${doc.imagekitFileId}:`, err)
          }
        }
      },
    ],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: false,
      label: 'Image Title / Caption',
      admin: {
        description: 'Auto-generated from filename during bulk upload if left blank.',
      },
    },
    {
      name: 'categoryName',
      type: 'text',
      label: 'Category Name',
      defaultValue: 'Manufacturing & Factory',
    },
    {
      name: 'category',
      type: 'relationship',
      relationTo: 'categories',
      required: false,
      filterOptions: {
        type: { equals: 'gallery' },
      },
      label: 'Category (Optional)',
    },
    {
      name: 'imagekitFileId',
      type: 'text',
      label: 'ImageKit File ID',
      admin: {
        readOnly: true,
      },
    },
    {
      name: 'url',
      type: 'text',
      label: 'CDN URL / Path',
      admin: {
        description: 'Public ImageKit or Server URL for frontend gallery rendering.',
      },
    },
    {
      name: 'thumbnailUrl',
      type: 'text',
      label: 'Transformed Thumbnail URL',
    },
  ],
}
