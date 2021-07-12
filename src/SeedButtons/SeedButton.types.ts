import{IconName} from '@fortawesome/fontawesome-common-types'
import { color } from "../types/color.types";
import { size, standardProps } from "../types/standard.types";

export interface SeedButtonProps extends standardProps<HTMLButtonElement> {
    bgColor?: color['color'];
    noneBorder?: boolean;
    color?:color['color'];
    size?:size['size'];
    icon?:IconName;
    
}

export interface SeedIconButtonProps extends standardProps<HTMLButtonElement> {
    bgColor?: color['color'];
    noneBorder?: boolean;
    color?:color['color'];
    size?:size['size'];
    icon: IconName;
    padding? :string;
}
