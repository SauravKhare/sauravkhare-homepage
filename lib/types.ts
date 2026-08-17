import { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical";

/**
 * Bridge type between Payload CMS generated rich text and Lexical's SerializedEditorState.
 * Payload's generated type uses `type: any` and `[k: string]: unknown` on rich text nodes.
 * This alias makes the intent clear at consumption sites.
 */
export type PayloadRichText = SerializedEditorState;
