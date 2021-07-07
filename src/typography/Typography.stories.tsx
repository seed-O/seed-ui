import React from "react";
import Typograpy from "./Typography";
import { withKnobs, select } from "@storybook/addon-knobs";
import { color } from "./typography.types";
//@ts-ignore

export default {
  title: "Typograpy",
  component: Typograpy,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: '"안녕하세요"라고 보여주는 컴포넌트',
  },
};

export const Seed = () => {
  const options = {
    primary900: "primary700",
    primary800: "primary700",
    primary700: "primary700",
    primary600: "primary700",
    primary500: "primary700",
    primary400: "primary700",
    primary300: "primary700",
    primary200: "primary700",
    primary100: "primary700",
    primary50: "primary700",
    blackT87: "blackT87",
    blackT60: "blackT60",
    blackT38: "blackT38",
  };

  const value = select("colors", options, "blackT38") as color["color"];

  return (
    <Typograpy props={{ color: value }} component="span">
      기본 값입니다
    </Typograpy>
  );
};

Seed.story = {
  name: "Default",
};

export const blackT38 = () => <Typograpy props={{ color: "blackT38" }}>기본 값입니다.</Typograpy>;
export const primary700 = () => (
  <Typograpy props={{ color: "primary700" }}>기본 값입니다.</Typograpy>
);
