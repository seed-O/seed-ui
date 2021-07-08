import React from "react";
import { render } from "@testing-library/react";

import SeedButton from "./SeedButton";
import { SeedButtonProps } from "./SeedButton.types";

describe("SeedButton Component", () => {
  let props: SeedButtonProps;

  beforeEach(() => {
    props = {
      bgColor: "black800",
    };
  });

  const renderComponent = () => render(<SeedButton {...props} />);

  it("seed-button className을 가져야함", () => {
    const { getByTestId } = renderComponent();

    const SeedButtonComponent = getByTestId("seed-button");

    expect(SeedButtonComponent).toHaveClass("seed-button");
  });
});
