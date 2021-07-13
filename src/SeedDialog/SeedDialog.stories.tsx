import React, { useState } from "react";
import { withKnobs, select, text } from "@storybook/addon-knobs";
import SeedDialog, { SeedDialogTitle, SeedDialogAction } from "./SeedDialog";
//@ts-ignore
import { color, colors } from "../types/color.types";
import { size, sizes } from "../types/standard.types";

export default {
  title: "SeedDialog",
  component: SeedDialog,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: "다이얼로그 컴포넌트 다이얼로그 밖을 클릭하면 closed됩니다.",
    docs: {
      //   page: mdx,
    },
  },
};

export const Seed = () => {
  const [open, setOpen] = useState<boolean>(false);

  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <button onClick={() => setOpen(!open)}> open </button>
      <SeedDialog opened={open} onClose={onClose}>
        테스트 다이얼로그입니다.
      </SeedDialog>
    </>
  );
};

Seed.story = {
  name: "default",
};

export const SeedTitle = () => {
  const [open, setOpen] = useState<boolean>(false);

  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <button onClick={() => setOpen(!open)}> open </button>
      <SeedDialog opened={open} onClose={onClose}>
        <SeedDialogTitle>타이틀 입니다.</SeedDialogTitle>
        기본 내용입니다.
      </SeedDialog>
    </>
  );
};

SeedTitle.story = {
  name: "SeedDialog-Title",
};

export const SeedAction = () => {
  const [open, setOpen] = useState<boolean>(false);

  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <button onClick={() => setOpen(!open)}> open </button>
      <SeedDialog opened={open} onClose={onClose}>
        <SeedDialogTitle>Seed Dialog Action </SeedDialogTitle>
        seed dialog aciont 컴포넌트를 추가한 다이얼로그 입니다.
        <SeedDialogAction>
          <button onClick={onClose}>확인</button>
        </SeedDialogAction>
      </SeedDialog>
    </>
  );
};

SeedAction.story = {
  name: "SeedDialog-action",
};
