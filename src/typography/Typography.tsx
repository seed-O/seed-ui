import React from "react";
import { TypographyType } from "./typography.types";
import "../../sass/main.scss";

const Typograpy: React.FC<TypographyType> = ({ props, children }) => {
  const size = props.size || "body1";

  return (
    <span data-testid={`seed-typograpy`} className={`${size} ${props.color}`}>
      {children}
    </span>
  );
};

export default Typograpy;
