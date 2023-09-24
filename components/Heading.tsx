import React from "react";

interface Heading {
  headingType: string;
  classname?: string;
  children: React.ReactNode;
}

const Heading: React.FC<Heading> = ({ headingType, children, classname }) => {
  switch (headingType) {
    case "h1":
      return <h1 className={classname}>{children}</h1>;
    case "h2":
      return <h2 className={classname}>{children}</h2>;
    case "h3":
      return <h3 className={classname}>{children}</h3>;
    case "h4":
      return <h4 className={classname}>{children}</h4>;
    case "h5":
      return <h5 className={classname}>{children}</h5>;
    case "h6":
      return <h6 className={classname}>{children}</h6>;
    default:
      return <p>{children}</p>;
  }
};

export default Heading;
