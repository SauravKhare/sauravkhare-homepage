import { calculateExperience } from "@/lib/utils";
import { RichText } from "./RichText/RichText";
import { SerializedEditorState, SerializedLexicalNode, SerializedRootNode } from "@payloadcms/richtext-lexical/lexical";


interface HeaderBioProps {
  bio: SerializedEditorState;
}

interface ExtendedSerializedEditorState extends SerializedEditorState<SerializedLexicalNode> {
  root: SerializedRootNode<SerializedLexicalNode> & {
    children: Array<{
      type: string;
      children?: Array<{
        type: string;
        text?: string;
        [key: string]: unknown;
      }>;
      [key: string]: unknown;
    }>;
  };
}

// Helper to replace placeholder in RichText JSON
function replaceExperienceInRichText(
  data: SerializedEditorState<SerializedLexicalNode>,
  experienceText: string
): SerializedEditorState<SerializedLexicalNode> {
  // Early return if data is null or doesn't have root
  if (!data || !data.root) {
    return data;
  }

  const newData = data as ExtendedSerializedEditorState;

  if (!newData.root?.children) {
    return data;
  }

  const updatedData = { ...newData };
  updatedData.root.children = newData.root.children.map(paragraph => {
    const newParagraph = { ...paragraph };
    if ('children' in newParagraph && Array.isArray(newParagraph.children)) {
      newParagraph.children = newParagraph.children.map(child => {
        const newChild = { ...child };
        if ('text' in newChild && typeof newChild.text === "string") {
          newChild.text = newChild.text.replace("{{experience}}", experienceText);
        }
        return newChild;
      });
    }
    return newParagraph;
  });

  return updatedData;
}

export default async function HeaderBio({ bio }: HeaderBioProps) {
  // Early return if bio is null or undefined
  if (!bio) {
    return null;
  }

  const startDate = new Date("2021-01-15");
  const { years, months } = calculateExperience(startDate);
  // Convert to decimal years
  const decimalYears = (years + months / 12).toFixed(1); // "4.9"
  const experienceText = `${decimalYears} years`;

  const updatedBio = replaceExperienceInRichText(bio, experienceText);

  return (
    <RichText data={updatedBio as SerializedEditorState} className="prose text-lg mb-4 font-inter text-primary-text" />
  )
}