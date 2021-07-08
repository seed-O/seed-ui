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

export interface color {color : primaryColor['primaryColor'] | blackColor['black'] | generalColor['general'] | supportColor['support']}


export const colors = {
    primary900: "primary900",
    primary800: "primary800",
    primary700: "primary700",
    primary600: "primary600",
    primary500: "primary500",
    primary400: "primary400",
    primary300: "primary300",
    primary200: "primary200",
    primary100: "primary100",
    primary50: "primary50",
    primaryT48: "primaryT48",
    primaryT40: "primaryT40",
    primaryT32: "primaryT32",
    primaryT24: "primaryT24",
    primaryT16: "primaryT16",
    primaryT8: "primaryT8",
    black900: "black900",
    black800: "black800",
    black700: "black700",
    black600: "black600",
    black500: "black500",
    black400: "black400",
    black300: "black300",
    black200: "black200",
    black100: "black100",
    black50: "black50",
    blackT87: "blackT87",
    blackT60: "blackT60",
    blackT38: "blackT38",
    blackT48: "blackT48",
    blackT40: "blackT40",
    blackT32: "blackT32",
    blackT24: "blackT24",
    blackT16: "blackT16",
    blackT8: "blackT8",
    white:"white"
  };