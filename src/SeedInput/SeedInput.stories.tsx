import React from "react";
import SeedInput from "./SeedInput";
import { withKnobs, select, text, number } from "@storybook/addon-knobs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
// @ts-ignore
import mdx from "./SeedInput.mdx";

export default {
  title: "SeedInput",
  component: SeedInput,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: "SeedUi Input 컴포넌트",
    docs: {
      page: mdx,
    },
  },
};

export const Seed = () => {
  const fullWidthOptions = {
    undefined: undefined,
    true: true,
  };

  const borderColorOptions = {
    undefined: undefined,
    "primary-200": "primary-200",
  };

  const labelValue = text("Label", "라벨");
  const subLabelValue = text("Sub-Label", "서브라벨");
  const placeHolderValue = text("PlaceHolder", "입력필드");
  const paddingValue = text("Padding", "10px");
  const fullWidthValue = select("FullWidth", fullWidthOptions, undefined);
  const borderColorValue = select(
    "Border-Color",
    borderColorOptions,
    undefined
  );
  const borderRadiusValue = number("Border-Radius", 0);
  const fontSizeValue = number("Font-Size", undefined);
  const labelSizeValue = number("Label-Font-Size", undefined);
  const subLabelSizeValue = number("Sub-Label-Font-Size", undefined);

  return (
    <SeedInput
      label={labelValue}
      subLabel={subLabelValue}
      placeholder={placeHolderValue}
      padding={paddingValue}
      fullWidth={fullWidthValue}
      borderColor={borderColorValue}
      borderRadius={borderRadiusValue}
      fontSize={fontSizeValue}
      labelSize={labelSizeValue}
      subLabelSize={subLabelSizeValue}
    />
  );
};

Seed.story = {
  name: "Default",
};

export const SeedLeftIconInput = () => {
  return (
    <div>
      <SeedInput leftIcon={<FontAwesomeIcon icon={faCoffee} />} />
    </div>
  );
};

SeedLeftIconInput.story = {
  name: "Left-Icon-input",
};

export const SeedRightIconInput = () => {
  return (
    <div>
      <SeedInput rightIcon={<FontAwesomeIcon icon={faCoffee} />} />
    </div>
  );
};

SeedRightIconInput.story = {
  name: "Right-Icon-input",
};
