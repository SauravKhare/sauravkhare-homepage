import { ReactNode } from "react";

const Paragraph = ({
  classname,
  children,
}: {
  classname: string;
  children?: ReactNode;
}) => {
  return <p className={classname}>{children}</p>;
};

export default Paragraph;
