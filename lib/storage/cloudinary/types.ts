import type { CollectionOptions } from '@payloadcms/plugin-cloud-storage/types'
import type { UploadCollectionSlug } from 'payload'

export interface CloudinaryConfig {
  cloud_name: string
  api_key: string
  api_secret: string
}

export type CloudinaryCollectionOptions = Omit<CollectionOptions, 'adapter'>

export interface CloudinaryStorageOptions {
  collections: Partial<Record<UploadCollectionSlug, CloudinaryCollectionOptions | true>>
  cloudConfig: CloudinaryConfig
  folder?: string
  enabled?: boolean
}
