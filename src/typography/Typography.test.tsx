import React, { ReactNode } from "react";
import { render } from "@testing-library/react";

import { TypographyType } from "./typography.types";
import Typograpy from "./Typography";

describe("typograpy Component", () => {
  let props: TypographyType<HTMLSpanElement>;

  beforeEach(() => {
    props = {
      color: "blackT38",
    };
  });

  const renderComponent = () => render(<Typograpy {...props} />);

  it("기본값으로 body1 className을 가져rka", () => {
    const { getByText } = renderComponent();
  });
});
