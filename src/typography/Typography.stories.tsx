import React from "react";
import Typograpy from "./Typography";
import { withKnobs, select } from "@storybook/addon-knobs";
import { color } from "../types/color.types";
import { size, bold, align } from "./typography.types";
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
  const colors = {
    primary900: "primary900",
    primary800: "primary800",
    primary700: "primary700",
    primary600: "primary600",
    primary500: "primary500",
    primary400: "primary400",
    primary300: "primary300",
    primary200: "primary200",
    primary100: "primar100",
    primary50: "primary50",
    primaryT48: "primaryT48",
    primaryT40: "primaryT40",
    primaryT32: "primaryT32",
    primaryT24: "primaryT24",
    primaryT16: "primaryT16",
    primaryT8: "primaryT8",
    black900: "black900",
    black800: "black800",
    black700: "black700",
    black600: "black600",
    black500: "black500",
    black400: "black400",
    black300: "black300",
    black200: "black200",
    black100: "black100",
    black50: "black50",
    blackT87: "blackT87",
    blackT60: "blackT60",
    blackT38: "blackT38",
    blackT48: "blackT48",
    blackT40: "blackT40",
    blackT32: "blackT32",
    blackT24: "blackT24",
    blackT16: "blackT16",
    blackT8: "blackT8",
  };

  const color = select("colors", colors, "blackT87") as color["color"];

  const sizes = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    h6: "h6",
    s1: "s1",
    s2: "s2",
    body1: "body1",
    body2: "body2",
    button: "button",
    caption: "caption",
    overline: "overline",
  };

  const size = select("sizes", sizes, "body1") as size["size"];

  const bolds = {
    100: "100",
    200: "200",
    300: "300",
    400: "400",
    500: "500",
    600: "600",
    700: "700",
    800: "800",
    900: "900",
    normal: "nomarl",
    bold: "bold",
    initial: "initial",
    inherit: "inherit",
  };
  const bold = select("weight", bolds, "normal") as bold["bold"];

  const aligns = {
    left: "left",
    right: "right",
    center: "center",
    justify: "justify",
  };

  const align = select("aligns", aligns, "left") as align["align"];

  return (
    <Typograpy props={{ color: color, size: size, bold: bold, align: align }}>
      기본 값입니다
    </Typograpy>
  );
};

Seed.story = {
  name: "Default",
};
