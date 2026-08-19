import type { CollectionConfig } from 'payload'
import { isAdminOrEditor } from '../access/isAdminOrEditor'
import { getImageKit, buildTransformedUrl } from '../lib/imagekit'

export const Media: CollectionConfig = {
  slug: 'media',
  upload: {
    staticDir: 'public/media',
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
      {
        name: 'hero',
        width: 1200,
        height: 800,
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
    useAsTitle: 'alt',
    defaultColumns: ['filename', 'alt', 'imagekitFileId', 'mimeType', 'createdAt'],
  },
  hooks: {
    beforeValidate: [
      ({ req, data }) => {
        if (data) {
          // Auto-populate Alt Text if empty during bulk image upload
          if (!data.alt || !data.alt.trim()) {
            const rawName = req?.file?.name || data?.filename || 'Media Image'
            data.alt = rawName.replace(/\.[^/.]+$/, '').replace(/[-_]/g, ' ')
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
              fileName: file.name || 'upload.png',
              folder: '/mgacharger',
              useUniqueFileName: true,
            })

            data.imagekitFileId = response.fileId
            data.url = response.url
            data.thumbnailUrl = response.thumbnailUrl || buildTransformedUrl(response.filePath, { width: 300, height: 300 })
            data.width = response.width || data.width
            data.height = response.height || data.height
          } catch (err) {
            console.error('ImageKit upload warning (continuing with local file fallback):', err)
            // Fallback local URL if ImageKit is offline/unreachable
            const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3001'
            if (!data.url && file.name) {
              data.url = `${serverUrl}/api/media/file/${file.name}`
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
            console.log(`Successfully purged file ${doc.imagekitFileId} from ImageKit`)
          } catch (err) {
            console.error(`Failed to delete ImageKit file ${doc.imagekitFileId}:`, err)
          }
        }
      },
    ],
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: false,
      label: 'Alt Text',
      admin: {
        description: 'Crucial for accessibility and SEO. Auto-generated from filename if left blank during bulk upload.',
      },
    },
    {
      name: 'caption',
      type: 'text',
      label: 'Caption / Context',
    },
    {
      name: 'imagekitFileId',
      type: 'text',
      label: 'ImageKit File ID',
      admin: {
        readOnly: true,
        description: 'Unique file ID assigned by ImageKit cloud storage.',
      },
    },
    {
      name: 'url',
      type: 'text',
      label: 'CDN URL / Path',
      admin: {
        description: 'Public ImageKit CDN URL for Next.js frontend rendering.',
      },
    },
    {
      name: 'thumbnailUrl',
      type: 'text',
      label: 'Transformed Thumbnail URL',
    },
  ],
}
