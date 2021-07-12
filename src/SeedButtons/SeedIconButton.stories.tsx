import React from "react";
import { withKnobs, select, text } from "@storybook/addon-knobs";
import SeedIconButton from "./SeedIconButton";
//@ts-ignore
import mdx from "./SeedIconButton.mdx";
import { color, colors } from "../types/color.types";
import { size, sizes } from "../types/standard.types";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas, IconName } from "@fortawesome/free-solid-svg-icons";

library.add(fas);

export default {
  title: "SeedIconButton",
  component: SeedIconButton,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: '"아이콘 버튼" 컴포넌트',
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
  const size = select("font-size", { ...sizes, undefined: "h5" }, undefined) as size["size"];

  const icons = text("icon", "angle-left") as IconName;

  return (
    <SeedIconButton
      bgColor={value}
      fullWidth={fullwidth}
      noneBorder={noneBorder}
      color={color}
      size={size}
      icon={icons}
    />
  );
};

Seed.story = {
  name: "Default",
};

// export const SeedRightIconInput = () => {
//   return (
//     <div>
//       <SeedIconButton icon="coffee" />
//     </div>
//   );
// };

// SeedRightIconInput.story = {
//   name: "Right-Icon-input",
// };
