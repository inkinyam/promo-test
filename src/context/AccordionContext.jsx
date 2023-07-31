import React from "react";

export const AccordionContext = React.createContext ({
  activeItem: undefined,
  switchItem: () => {}
});