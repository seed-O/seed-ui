import React from "react";
import { color } from "../types/color.types";
import { size, standardProps } from "../types/standard.types";


export interface align { 
    align :  "center" | "left"  | "right" | "justify";
}

export interface bold {
    bold: "bold" | "normal" | "initial" | "inherit" | "900" | "800" | "700" | "600" | "500" | "400" | "300" | "200" | "100";
}


export interface TypographyType<D> extends standardProps<D>{
      align?: align['align'];
      color?: color['color'];
      display?: 'initial' | 'block' | 'inline';
      bold?:bold['bold'];
      size?:size['size'];
  }

/* 
 1. 크기 변경
 2. 정렬 변경
 3. 색상 변경
 4. 굵기 변경
 5. content react node
 
*/

