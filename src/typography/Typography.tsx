import React from "react";
import { TypographyType } from "./typography.types";
import "../../sass/main.scss";

const Typograpy: React.FC<TypographyType<HTMLSpanElement>> = (
  { props: { color = "blackT87", size = "body1", bold = "inherit", align = "left" }, children },
  props
) => {
  return (
    <span
      data-testid={`seed-typograpy`}
      className={`typo-${size} ${color} typo-weight${bold} typo-align-${align}`}
      {...props}
    >
      {children}
    </span>
  );
};

export default Typograpy;
