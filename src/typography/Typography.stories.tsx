import React from "react";
import Typography from "./Typography";
import { withKnobs, select } from "@storybook/addon-knobs";
import { color, colors } from "../types/color.types";
import { bold, align } from "./typography.types";
import { size, sizes } from "../types/standard.types";
//@ts-ignore
import mdx from "./Typography.mdx";

export default {
  title: "Typography",
  component: Typography,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: '"안녕하세요"라고 보여주는 컴포넌트',
    docs: {
      page: mdx,
    },
  },
};

export const Seed = () => {
  const color = select("colors", { ...colors, undefind: undefined }, "blackT87") as color["color"];
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
    <Typography color={color} size={size} bold={bold} align={align}>
      기본 값입니다
    </Typography>
  );
};

Seed.story = {
  name: "Default",
};
