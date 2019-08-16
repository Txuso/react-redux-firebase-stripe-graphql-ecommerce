import { CustomButtonContainer } from "./custom-button.styled";
import React from "react";

const CustomButton = ({ children, ...props }) => (
  <CustomButtonContainer {...props}>{children}</CustomButtonContainer>
);

export default CustomButton;
