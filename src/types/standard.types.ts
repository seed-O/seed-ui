
export interface standardProps<D> extends  React.DetailedHTMLProps<React.HTMLAttributes<D>,D> {
    display?: 'initial' | 'block' | 'inline' | 'flex';
    fullWidth?:boolean
  }

  export interface size  {
    size : "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "s1" | "s2" | "body1" | "body2" | "button" | "caption" | "overline";  
}


export const sizes = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  s1: "s1",
  s2: "s2",
  body1: "body1",
  body2: "body2",
  button: "button",
  caption: "caption",
  overline: "overline",
};