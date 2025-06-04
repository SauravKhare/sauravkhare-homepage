import { cn } from '@/lib/utils';

import Heading from './Heading';
import Paragraph from './Paragraph';
import { ReactNode } from 'react';

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
    <section className={cn(`mb-16 ${className}`)}>
      <Heading
        headingLevel="h4"
        classname="mb-1 font-normal text-lg font-space-grotesk text-accent-yellow"
      >
        {title}
      </Heading>
      {subtitle && <Paragraph classname="mb-3">{subtitle}</Paragraph>}
      {children}
    </section>
  );
}
