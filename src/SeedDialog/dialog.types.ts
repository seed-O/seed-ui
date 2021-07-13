import { color } from "../types/color.types";
import { standardProps } from "../types/standard.types";


export interface DialogProps extends standardProps<HTMLDialogElement> {
    opened:boolean;
    onClose:Function;
    padding? :string;
}

export interface DialogTitleProps extends standardProps<HTMLHeadingElement> {
   color?:color['color'];

}

export interface DialogActionProps extends standardProps<HTMLDivElement> {

 }
 