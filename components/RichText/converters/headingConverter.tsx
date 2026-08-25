import { JSXConverters } from '@payloadcms/richtext-lexical/react'
import { SerializedHeadingNode } from '@payloadcms/richtext-lexical'

let headingCounter = 0

export const headingConverter: JSXConverters<SerializedHeadingNode> = {
  heading: ({ node, nodesToJSX }) => {
    const text = nodesToJSX({ nodes: node.children })
    const Tag = node.tag
    if (node.tag === 'h2') {
      const id = text.join("").toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^\w-]/g, '')
        .replace(/^-+|-+$/g, '')
        + '-' + (headingCounter++).toString(36)
      return <h2 id={id}>{text}</h2>
    }
    else {
      return <Tag>{text}</Tag>
    }
  }
}