import { JSXConverters } from "@payloadcms/richtext-lexical/react";
import { SerializedHeadingNode } from "@payloadcms/richtext-lexical";

export const headingInlineConverter: JSXConverters<SerializedHeadingNode> = {
  heading: ({ node, nodesToJSX }) => {
    const text = nodesToJSX({ nodes: node.children });
    return <>{text}</>;
  },
};
