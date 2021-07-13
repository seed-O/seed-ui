import React from "react";
import { SeedIconButtonProps } from "./SeedButton.types";
import "../../sass/main.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/**
 * Seed-ui의 Default 버튼
 *
 *  fontawesomeicon solid 무료 버젼만 사용가능
 *
 */

const SeedIconButton: React.FC<SeedIconButtonProps> = (
  { bgColor = "white", fullWidth, noneBorder = true, color, size = "h5", icon, padding = "0px" },
  props
) => (
  <button
    data-testid={`seed-iconbutton`}
    className={`seed-button ripple  ${
      noneBorder ? "noneBorder" : "seed-button-border"
    } seed-button-bg-${bgColor} ${fullWidth ? "seed-button-fullwidth" : ""} ${color}
    ${size ? `typo-${size}` : ""}
    `}
    style={{ padding: padding }}
    {...props}
  >
    <FontAwesomeIcon icon={icon} fixedWidth />
  </button>
);

export default SeedIconButton;
