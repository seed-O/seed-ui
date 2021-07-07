import React from "react";
import { TypographyType } from "./typography.types";
import "../../sass/main.scss";

const Typograpy: React.FC<TypographyType> = ({
  props: { color = "blackT87", size = "body1", bold = "inherit", align = "left" },
  children,
}) => {
  return (
    <span data-testid={`seed-typograpy`} className={`${size} ${color}`}>
      {children}
    </span>
  );
};

export default Typograpy;
