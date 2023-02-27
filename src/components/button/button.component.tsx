import React, { ReactNode, ButtonHTMLAttributes } from "react";
import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from "./button.styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  buttonType: "google-sign-in" | "inverted" | "base";
}

const getButton = (buttonType = "base") =>
  ({
    base: BaseButton,
    "google-sign-in": GoogleSignInButton,
    inverted: InvertedButton,
  }[buttonType]);

const Button = ({ children, buttonType, ...buttonProps }: ButtonProps) => {
  const CustomButton = getButton(buttonType);
  return <CustomButton {...buttonProps}>{children}</CustomButton>;
};

export default Button;
