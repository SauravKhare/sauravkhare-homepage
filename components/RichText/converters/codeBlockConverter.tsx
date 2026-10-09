import type { SerializedBlockNode } from '@payloadcms/richtext-lexical'
import type { JSXConverters } from '@payloadcms/richtext-lexical/react'

type CodeBlockFields = {
  blockType?: string
  language?: string
  code?: string
}

export const codeBlockConverter: JSXConverters<SerializedBlockNode> = {
  block: ({ node }) => {
    const fields = node.fields as CodeBlockFields
    if (fields.blockType !== 'Code') return null

    return (
      <pre className="blog-code my-8 overflow-x-auto p-5 font-mono text-xs leading-[1.85] text-foreground/80 sm:p-7">
        <code>{fields.code}</code>
      </pre>
    )
  },
}
