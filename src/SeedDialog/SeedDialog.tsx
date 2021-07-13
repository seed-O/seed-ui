import React from "react";
import { DialogActionProps, DialogProps, DialogTitleProps } from "./dialog.types";
/*

dialog외 클릭시 창닫기


*/

const SeedDialog: React.FC<DialogProps> = (
  { opened, onClose, padding = "15px", children },
  props
) => {
  return (
    <dialog open={opened} onClick={onClose} className="seedDialog" {...props}>
      <div onClick={(e) => e.stopPropagation()} style={{ padding: padding }}>
        {children}
      </div>
    </dialog>
  );
};

export default SeedDialog;

export const SeedDialogTitle: React.FC<DialogTitleProps> = ({ color, children }, props) => (
  <h4 className={`seedDialog-Title`} {...props}>
    {children}
  </h4>
);
{
  /* <hr style={{ border: "solid #dedede", borderWidth: "1px 0 0" }} /> */
}

export const SeedDialogAction: React.FC<DialogActionProps> = ({ children }) => (
  <div className={`seedDialog-action`}>{children}</div>
);
