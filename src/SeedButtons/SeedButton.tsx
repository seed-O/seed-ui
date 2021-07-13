import React from "react";
import { SeedButtonProps } from "./SeedButton.types";
import "../../sass/main.scss";

/**
 * Seed-ui의 Default 버튼
 *
 * - **backgroundColor** 설정 props `white`, `black`
 *
 */

const SeedButton: React.FC<SeedButtonProps> = (
  { bgColor = "white", fullWidth, noneBorder, children, color, size },
  props
) => (
  <button
    data-testid={`seed-button`}
    className={`seed-button  ${
      noneBorder ? "noneBorder" : "seed-button-border"
    } seed-button-bg-${bgColor} ${fullWidth ? "seed-button-fullwidth" : ""} ${color}
    ${size ? `typo-${size}` : ""}
    `}
    {...props}
  >
    {children}
  </button>
);

export default SeedButton;
