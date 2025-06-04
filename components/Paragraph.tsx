import type { ReactNode } from 'react';

export default function Paragraph({
  classname,
  children,
}: {
  classname?: string;
  children?: ReactNode;
}) {
  return <p className={classname}>{children}</p>;
}
