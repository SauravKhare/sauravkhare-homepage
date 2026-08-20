import type { Plugin } from 'payload'

import { cloudStoragePlugin } from '@payloadcms/plugin-cloud-storage'

import { createCloudinaryAdapter } from './adapter'
import type { CloudinaryStorageOptions } from './types'

export type { CloudinaryStorageOptions, CloudinaryConfig, CloudinaryCollectionOptions } from './types'

export function cloudinaryStorage(options: CloudinaryStorageOptions): Plugin {
  return (incomingConfig) => {
    const isDisabled = options.enabled === false

    if (isDisabled) {
      return incomingConfig
    }

    const adapter = createCloudinaryAdapter({
      cloudConfig: options.cloudConfig,
      folder: options.folder,
    })

    const collectionsWithAdapter = Object.entries(options.collections).reduce(
      (acc, [slug, collOptions]) => {
        const mergedOptions = {
          ...(collOptions === true ? {} : collOptions),
          adapter,
        }
        return {
          ...acc,
          [slug]: mergedOptions,
        }
      },
      {} as Record<string, any>,
    )

    return cloudStoragePlugin({
      collections: collectionsWithAdapter,
    })(incomingConfig)
  }
}
