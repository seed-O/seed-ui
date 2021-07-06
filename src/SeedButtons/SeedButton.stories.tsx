import React from "react";
import SeedButton from "./SeedButton";
import { withKnobs, select } from "@storybook/addon-knobs";
//@ts-ignore
import mdx from "./SeedButton.mdx";

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
  const options = {
    black: "black",
    white: "white",
  };

  const value = select("colors", options, "white") as "black" | "white";

  return <SeedButton backgroundColor={value} />;
};

Seed.story = {
  name: "Default",
};

export const black = () => <SeedButton backgroundColor="black" />;
export const white = () => <SeedButton backgroundColor="white" />;
