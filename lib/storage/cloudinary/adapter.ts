import type {
  ClientUploadsConfig,
  GeneratedAdapter,
  HandleDelete,
  HandleUpload,
  StaticHandler,
} from '@payloadcms/plugin-cloud-storage/types'
import type { Field, PayloadRequest, UploadCollectionSlug } from 'payload'
import type { UploadApiResponse } from 'cloudinary'

import { APIError } from 'payload'

import type { CloudinaryConfig } from './types'

interface CreateCloudinaryAdapterArgs {
  clientUploads?: ClientUploadsConfig
  cloudConfig: CloudinaryConfig
  folder?: string
}

function getResourceType(mimeType: string): 'image' | 'video' | 'raw' {
  if (mimeType.startsWith('image/')) return 'image'
  if (mimeType.startsWith('video/')) return 'video'
  return 'raw'
}

function getFileExtension(filename: string): string {
  const match = filename.match(/\.[^/.]+$/)
  return match ? match[0] : ''
}

function getCloudinaryPublicId(
  prefix: string | undefined,
  filename: string,
  { keepExtension = false }: { keepExtension?: boolean } = {},
): string {
  const name = keepExtension ? filename : filename.replace(/\.[^/.]+$/, '')
  return prefix ? `${prefix}/${name}` : name
}

export function createCloudinaryAdapter({
  clientUploads,
  cloudConfig,
  folder,
}: CreateCloudinaryAdapterArgs): () => GeneratedAdapter {
  const fields: Field[] = [
    {
      name: '_key',
      type: 'text',
      admin: {
        disableBulkEdit: true,
        disableListColumn: true,
        disableListFilter: true,
        hidden: true,
      },
    },
  ]

  return (): GeneratedAdapter => ({
    name: 'cloudinary',
    clientUploads,
    fields,

    handleUpload: async ({ data, file, req }) => {
      try {
        const cloudinary = (await import('cloudinary')).v2
        cloudinary.config(cloudConfig)

        const resourceType = getResourceType(file.mimeType)
        const basePublicId = getCloudinaryPublicId(folder, file.filename)
        const extension = getFileExtension(file.filename)
        const publicId = resourceType === 'raw' ? `${basePublicId}${extension}` : basePublicId

        const uploadResult = await new Promise<UploadApiResponse>((resolve, reject) => {
          const stream = cloudinary.uploader.upload_stream(
            {
              resource_type: resourceType,
              public_id: publicId,
              overwrite: false,
              use_filename: false,
            },
            (errorOrResponse, result) => {
              // Cloudinary SDK wraps errors differently for unexpected status codes (e.g. 403)
              // For expected codes (200, 400, 401, 404, 420, 500): (error, result)
              // For unexpected codes (e.g. 403): ({ error: {...} }) - single nested argument
              if (errorOrResponse) {
                const actualError = errorOrResponse.error || errorOrResponse
                const message = actualError.message || actualError.msg || 'Unknown Cloudinary error'
                const httpCode = actualError.http_code || actualError.statusCode
                reject(new Error(`Cloudinary upload failed (${httpCode || 'unknown'}): ${message}`))
                return
              }
              if (!result) return reject(new Error('No result returned from Cloudinary'))
              resolve(result)
            },
          )
          stream.end(file.buffer)
        })

        const sizes = data.sizes as Record<string, { _key?: string; filename?: string }> | undefined
        const foundSize = Object.keys(sizes || {}).find((key) => sizes?.[key]?.filename === file.filename)

        if (foundSize && sizes && sizes[foundSize]) {
          sizes[foundSize]._key = uploadResult.public_id
        } else {
          data._key = uploadResult.public_id
          const uploadedName = uploadResult.public_id.split('/').pop() || file.filename
          data.filename =
            resourceType === 'raw'
              ? uploadedName
              : `${uploadedName}.${uploadResult.format || extension.replace(/^\./, '')}`
          data.filesize = uploadResult.bytes
        }

        return data
      } catch (error: unknown) {
        const message = error instanceof Error ? error.message : 'Unknown error'
        req.payload.logger.error({ err: error, msg: `Cloudinary upload failed: ${message}` })
        if (error instanceof APIError) throw error
        throw new APIError(`Cloudinary upload failed: ${message}`)
      }
    },

    handleDelete: async ({ doc, filename, req }) => {
      try {
        const cloudinary = (await import('cloudinary')).v2
        cloudinary.config(cloudConfig)

        const docRecord = doc as unknown as Record<string, unknown>
        const mimeType = docRecord.mimeType as string | undefined
        const resourceType = mimeType ? getResourceType(mimeType) : 'raw'
        const basePublicId = getCloudinaryPublicId(folder, filename)
        const publicId =
          resourceType === 'raw' ? `${basePublicId}${getFileExtension(filename)}` : basePublicId

        await cloudinary.uploader.destroy(publicId, { resource_type: resourceType })
      } catch (error: unknown) {
        const message = error instanceof Error ? error.message : 'Unknown error'
        req.payload.logger.error({ err: error, msg: `Cloudinary delete failed for ${filename}: ${message}` })
        throw new APIError(`Cloudinary delete failed for ${filename}: ${message}`)
      }
    },

    generateURL: ({ filename, prefix }) => {
      const cloudName = cloudConfig.cloud_name
      const ext = filename.split('.').pop()
      const isImage = ['jpg', 'jpeg', 'png', 'gif', 'webp', 'avif', 'svg'].includes(ext || '')

      if (isImage) {
        const publicId = getCloudinaryPublicId(prefix || folder, filename)
        return `https://res.cloudinary.com/${cloudName}/image/upload/f_auto,q_auto/v1/${publicId}.${ext}`
      }

      return `https://res.cloudinary.com/${cloudName}/raw/upload/${getCloudinaryPublicId(prefix || folder, filename, { keepExtension: true })}`
    },

    staticHandler: (async (req: PayloadRequest, { params: { collection, filename, prefix } }) => {
      try {
        const cloudinary = (await import('cloudinary')).v2
        cloudinary.config(cloudConfig)

        const basePublicId = getCloudinaryPublicId(prefix || folder, filename)
        const collectionSlug = collection as UploadCollectionSlug
        const collectionConfig = req.payload.collections[collectionSlug]?.config

        let retrievedDoc: Record<string, unknown> | undefined

        if (!retrievedDoc) {
          const or: Array<Record<string, unknown>> = [
            { filename: { equals: filename } },
          ]

          if (collectionConfig?.upload && typeof collectionConfig.upload === 'object' && collectionConfig.upload.imageSizes) {
            collectionConfig.upload.imageSizes.forEach(({ name }: { name: string }) => {
              or.push({ [`sizes.${name}.filename`]: { equals: filename } })
            })
          }

          const result = await req.payload.db.findOne({
            collection: collectionSlug,
            req,
            where: { or: or as any },
          })

          if (result) {
            retrievedDoc = result as Record<string, unknown>
          }
        }

        if (!retrievedDoc) {
          return new Response(null, { status: 404, statusText: 'Not Found' })
        }

        const docMimeType = retrievedDoc.mimeType as string | undefined
        const resourceType = docMimeType ? getResourceType(docMimeType) : 'raw'
        const publicId =
          resourceType === 'raw'
            ? `${basePublicId}${getFileExtension(filename)}`
            : basePublicId

        const url = cloudinary.url(publicId, {
          resource_type: resourceType,
          secure: true,
        })

        const headResponse = await fetch(url, { method: 'HEAD' })
        if (!headResponse.ok) {
          return new Response(null, { status: 404, statusText: 'Not Found' })
        }

        const response = await fetch(url)
        if (!response.ok || !response.body) {
          return new Response(null, { status: 404, statusText: 'Not Found' })
        }

        const headers = new Headers()
        const contentType = response.headers.get('content-type')
        if (contentType) headers.set('Content-Type', contentType)

        const etag = response.headers.get('etag')
        if (etag) headers.set('ETag', etag)

        const cacheControl = response.headers.get('cache-control')
        if (cacheControl) headers.set('Cache-Control', cacheControl)

        const etagFromHeaders = req.headers.get('etag') || req.headers.get('if-none-match')
        if (etagFromHeaders && etag && etagFromHeaders === etag) {
          return new Response(null, { headers, status: 304 })
        }

        const rangeHeader = req.headers.get('range')
        if (rangeHeader) {
          const fileSize = Number(headResponse.headers.get('content-length'))
          const rangeMatch = rangeHeader.match(/bytes=(\d+)-(\d*)/)
          if (rangeMatch) {
            const start = parseInt(rangeMatch[1], 10)
            const end = rangeMatch[2] ? parseInt(rangeMatch[2], 10) : fileSize - 1

            const rangeResponse = await fetch(url, {
              headers: { Range: `bytes=${start}-${end}` },
            })

            if (rangeResponse.ok && rangeResponse.body) {
              const rangeHeaders = new Headers(headers)
              rangeHeaders.set('Content-Range', `bytes ${start}-${end}/${fileSize}`)
              rangeHeaders.set('Content-Length', String(end - start + 1))
              return new Response(rangeResponse.body, {
                headers: rangeHeaders,
                status: 206,
              })
            }
          }
        }

        return new Response(response.body, { headers, status: 200 })
      } catch (error: unknown) {
        req.payload.logger.error({ err: error, msg: 'Unexpected error in staticHandler' })
        return new Response('Internal Server Error', { status: 500 })
      }
    }) as StaticHandler,
  })
}
