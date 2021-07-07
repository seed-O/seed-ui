import React, { ReactNode } from "react";

interface size  {
     size : "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "s1" | "s2" | "body1" | "body2" | "button" | "caption" | "overline";  
}

interface align { 
    align :  "center" | "left"  | "right";
}

interface primaryColor { 
    primaryColor : "primary900" | "primary800" | "primary700" | "primary600" | "primary500" | "primary400" | "primary300" | "primary200" | "primary100" | "primary50" | "primaryT48" | "primaryT40" | "primaryT32" | "primaryT24" | "primaryT16" | "primaryT8";
}
interface blackColor {
    black: "black900" | "black800" | "black700" | "black600" | "black500" | "black400" | "black300" | "black200" | "black100" | "black50" | "blackT48" | "blackT40" | "blackT32" | "blackT24" | "blackT16" | "blackT8";
}
interface generalColor {
    general: "blackT87" | "blackT60" | "blackT38";
}
interface supportColor {
    support: "success600" | "info600" | "warning600" | "error600";
}

interface bold {
    bold: "bold" | "normal" | "initial" | "inherit" | "900" | "800" | "700" | "600" | "500" | "400" | "300" | "200" | "100";
}

export interface color {color : primaryColor['primaryColor'] | blackColor['black'] | generalColor['general'] | supportColor['support']}


export interface TypographyType<D extends React.ElementType = 'span'> {
    props: {
      align?: align['align'];
      color?: color['color'];
      display?: 'initial' | 'block' | 'inline';
      bold?:bold;
      size?:size;
    };
    component?:D ;
    classKey?: size;
  }

interface Typography<D extends React.ElementType = 'span'> {
}
/* 
 1. 크기 변경
 2. 정렬 변경
 3. 색상 변경
 4. 굵기 변경
 5. content react node
 
*/

