import React, { InputHTMLAttributes } from "react";

export interface SeedInputType
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label?: string;
  subLabel?: string;
  fullWidth?: true;
  padding?: string;
  borderColor?: "primary-200";
  borderRadius?: number;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
  fontSize?: number;
  labelSize?: number;
  subLabelSize?: number;
}
