import { NodeFormat } from "@payloadcms/richtext-lexical";
import type { SerializedTextNode } from "@payloadcms/richtext-lexical";
import type { JSXConverters } from "@payloadcms/richtext-lexical/react";
import type { CSSProperties, ReactNode } from "react";

const LEGACY_STATE_COLORS: Record<string, string> = {
  indigo: "#4338ca",
  amber: "#d97706",
  red: "#dc2626",
  teal: "#0f766e",
};

function cssTextToStyle(cssText?: string): Record<string, string> {
  const style: Record<string, string> = {};
  if (!cssText) return style;
  for (const declaration of cssText.split(";")) {
    const separatorIndex = declaration.indexOf(":");
    if (separatorIndex === -1) continue;
    const property = declaration.slice(0, separatorIndex).trim();
    const value = declaration.slice(separatorIndex + 1).trim();
    if (property && value) style[property] = value;
  }
  return style;
}

function styleForNode(node: SerializedTextNode): CSSProperties | undefined {
  const style: Record<string, string> = cssTextToStyle(node.style);

  const states = (node as { $?: Record<string, string> }).$;
  if (states?.color && LEGACY_STATE_COLORS[states.color]) {
    style.color = LEGACY_STATE_COLORS[states.color];
  }

  return Object.keys(style).length > 0 ? (style as CSSProperties) : undefined;
}

export const textWithStyleConverter: JSXConverters<SerializedTextNode> = {
  text: ({ node }) => {
    let content: ReactNode = node.text;
    const stateStyle = styleForNode(node);

    if (node.format & NodeFormat.IS_BOLD) {
      content = <strong>{content}</strong>;
    }
    if (node.format & NodeFormat.IS_ITALIC) {
      content = <em>{content}</em>;
    }
    if (node.format & NodeFormat.IS_STRIKETHROUGH) {
      content = <span style={{ textDecoration: "line-through" }}>{content}</span>;
    }
    if (node.format & NodeFormat.IS_UNDERLINE) {
      content = <span style={{ textDecoration: "underline" }}>{content}</span>;
    }
    if (node.format & NodeFormat.IS_CODE) {
      content = <code>{content}</code>;
    }
    if (node.format & NodeFormat.IS_SUBSCRIPT) {
      content = <sub>{content}</sub>;
    }
    if (node.format & NodeFormat.IS_SUPERSCRIPT) {
      content = <sup>{content}</sup>;
    }

    if (!stateStyle) return content;

    return <span style={stateStyle}>{content}</span>;
  },
};
