
export interface standardProps<D> extends  React.DetailedHTMLProps<React.HTMLAttributes<D>,D> {
    display?: 'initial' | 'block' | 'inline' | 'flex';
    fullWidth?:boolean
  }