import { color } from "../types/color.types";
import { standardProps } from "../types/standard.types";

export interface SeedButtonProps extends standardProps<HTMLButtonElement> {
    bgColor?: color['color'];
    noneBorder?: boolean;
}

