import React from "react";
import SeedButton from "./SeedButton";
import { withKnobs, select } from "@storybook/addon-knobs";
//@ts-ignore
import mdx from "./SeedButton.mdx";
import { color, colors } from "../types/color.types";

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
  const value = select("colors", colors, "white") as color["color"];
  const boolean = {
    true: true,
    false: false,
  };
  const fullwidth = select("fullwidth", boolean, false) as boolean;
  const noneBorder = select("noneBorder", boolean, false) as boolean;
  return (
    <SeedButton bgColor={value} fullWidth={fullwidth} noneBorder={noneBorder}>
      테스트 입니다
    </SeedButton>
  );
};

Seed.story = {
  name: "Default",
};
