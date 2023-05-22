import * as React from "react";
import Checkbox from "@mui/material/Checkbox";


export default function IconCheckboxes({ icon, iconUnchecked, action, checked }) {
  return (
      <Checkbox
        id="input"
        onClick={action}
        icon={iconUnchecked}
        checkedIcon={icon}  
        checked={checked}
      />
  );
}
