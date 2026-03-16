import { cn } from "@/lib/utils";

import Heading from "@/components/Heading";
import Paragraph from "@/components/Paragraph";
import { ReactNode } from "react";

interface SectionContainerProps {
  children: ReactNode;
  title: string;
  subtitle?: string;
  className?: string;
}

export default function SectionContainer({
  children,
  title,
  subtitle,
  className,
}: SectionContainerProps) {
  return (
    <section className={cn(`mb-32 ${className ?? className}`)}>
      <Heading
        headingLevel="h4"
        classname="mb-6 font-heading font-bold text-3xl text-accent"
      >
        {title}
      </Heading>
      {subtitle && <Paragraph classname="text-ink">{subtitle}</Paragraph>}
      {children}
    </section>
  );
}
