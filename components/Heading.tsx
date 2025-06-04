type HeadingProps = {
  headingLevel: 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
  classname?: string;
  children: React.ReactNode;
  id?: string;
};

export default function Heading({
  headingLevel: Tag,
  children,
  classname,
  id,
}: HeadingProps) {
  return (
    <Tag className={classname} id={id}>
      {children}
    </Tag>
  );
}
