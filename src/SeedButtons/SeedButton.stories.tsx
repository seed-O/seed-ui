import React from "react";
import SeedButton from "./SeedButton";
import { withKnobs, select } from "@storybook/addon-knobs";
//@ts-ignore
import mdx from "./SeedButton.mdx";
import { color, colors } from "../types/color.types";
import { size, sizes } from "../types/standard.types";

export default {
  title: "SeedButton",
  component: SeedButton,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: '"안녕하세요"라고 보여주는 컴포넌트',
    docs: {
      page: mdx,
    },
  },
};

export const Seed = () => {
  const value = select("bgColors", { ...colors, undefined: undefined }, "white") as color["color"];
  const boolean = {
    true: true,
    undefined: undefined,
  };
  const fullwidth = select("fullwidth", boolean, undefined) as boolean;
  const noneBorder = select("noneBorder", boolean, undefined) as boolean;
  const color = select(
    "font-color",
    { ...colors, undefined: undefined },
    undefined
  ) as color["color"];
  const size = select("font-size", { ...sizes, undefined: undefined }, undefined) as size["size"];

  return (
    <SeedButton
      bgColor={value}
      fullWidth={fullwidth}
      noneBorder={noneBorder}
      color={color}
      size={size}
    >
      테스트 입니다
    </SeedButton>
  );
};

Seed.story = {
  name: "Default",
};
