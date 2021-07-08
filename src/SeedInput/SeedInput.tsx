import React from "react";
import { SeedInputType } from "./SeedInput.types";

/**
 * Seed-ui의 Default Input
 */

const SeedInput: React.FC<SeedInputType> = ({
  label,
  subLabel,
  fullWidth,
  padding = "10px",
  borderColor,
  borderRadius = 0,
  leftIcon,
  rightIcon,
  fontSize,
  labelSize,
  subLabelSize,
  ...rest
}) => {
  return (
    <div>
      {label && (
        <label className={"seed-label"} style={{ fontSize: labelSize }}>
          {label}
        </label>
      )}
      {subLabel && (
        <label className={"sub-seed-label"} style={{ fontSize: subLabelSize }}>
          {subLabel}
        </label>
      )}
      <div
        className={`seed-input-container seed-input-container-border-${borderColor} ${
          fullWidth && "full-width"
        }`}
        style={{
          borderRadius: borderRadius,
          marginTop: label || subLabel ? 7 : 0,
        }}
      >
        <div>
          {leftIcon && <span style={{ paddingLeft: 10 }}>{leftIcon}</span>}
          <input
            data-testid={`seed-input`}
            className={`seed-input ${fullWidth && "full-width"}`}
            style={{
              padding: padding,
              borderRadius: borderRadius,
              fontSize: fontSize,
            }}
            {...rest}
          />
          {rightIcon && <span style={{ paddingRight: 10 }}>{rightIcon}</span>}
        </div>
      </div>
    </div>
  );
};

export default SeedInput;
