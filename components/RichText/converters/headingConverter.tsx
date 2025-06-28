import { JSXConverters } from '@payloadcms/richtext-lexical/react'
import { SerializedHeadingNode } from '@payloadcms/richtext-lexical'


export const headingConverter: JSXConverters<SerializedHeadingNode> = {
  heading: ({ node, nodesToJSX }) => {
    const text = nodesToJSX({ nodes: node.children })
    const Tag = node.tag
    if (node.tag === 'h2') {
      const id = text.join("").toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^\w-]/g, '')
        .replace(/^-+|-+$/g, '') // Remove leading/trailing hyphens
        + '-' + Math.random().toString(36).substring(2, 5) // Add uniqueness
      return <h2 id={id}>{text}</h2>
    }
    else {
      return <Tag>{text}</Tag>
    }
  }
}