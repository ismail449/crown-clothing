import React, { ReactNode, ButtonHTMLAttributes } from "react";
import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
  ButtonSpinner,
} from "./button.styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  buttonType: "google-sign-in" | "inverted" | "base";
  isLoading?: boolean;
}

const getButton = (buttonType = "base") =>
  ({
    base: BaseButton,
    "google-sign-in": GoogleSignInButton,
    inverted: InvertedButton,
  }[buttonType]);

const Button = ({
  children,
  buttonType,
  isLoading = false,
  ...buttonProps
}: ButtonProps) => {
  const CustomButton = getButton(buttonType);

  return (
    //@ts-ignore
    <CustomButton disabled={isLoading} {...buttonProps}>
      {isLoading ? <ButtonSpinner /> : children}
    </CustomButton>
  );
};

export default Button;
