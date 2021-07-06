import React from "react";
import { SeedButtonProps } from "./SeedButton.types";
import "./SeedButton.scss";

/**
 * Seed-ui의 Default 버튼
 *
 * - **backgroundColor** 설정 props `white`, `black`
 *
 */

const SeedButton: React.FC<SeedButtonProps> = ({
  backgroundColor = "white",
}) => (
  <button
    data-testid={`seed-button`}
    className={`seed-button seed-button-${backgroundColor}`}
  >
    Test
  </button>
);

export default SeedButton;
