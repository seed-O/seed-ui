import React from "react";
import { TypographyType } from "./typography.types";
import "../../sass/main.scss";

const Typography: React.FC<TypographyType<HTMLSpanElement>> = (
  { color = "blackT87", size = "body1", bold = "inherit", align = "left", children },
  props
) => (
  <span
    data-testid={`seed-typography`}
    className={`typo-${size} ${color} typo-weight${bold} typo-align-${align}`}
    {...props}
  >
    {children}
  </span>
);

export default Typography;
