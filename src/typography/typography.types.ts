import React from "react";
import { color } from "../types/color.types";

export interface size  {
     size : "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "s1" | "s2" | "body1" | "body2" | "button" | "caption" | "overline";  
}

export interface align { 
    align :  "center" | "left"  | "right" | "justify";
}

export interface bold {
    bold: "bold" | "normal" | "initial" | "inherit" | "900" | "800" | "700" | "600" | "500" | "400" | "300" | "200" | "100";
}


export interface TypographyType<D> extends React.DetailedHTMLProps<React.HTMLAttributes<D>,D> {
    props?: {
      align?: align['align'];
      color?: color['color'];
      display?: 'initial' | 'block' | 'inline';
      bold?:bold['bold'];
      size?:size['size'];
    };

    classKey?: size;
  }

/* 
 1. 크기 변경
 2. 정렬 변경
 3. 색상 변경
 4. 굵기 변경
 5. content react node
 
*/

