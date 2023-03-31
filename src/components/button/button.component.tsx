import { ButtonHTMLAttributes, FC } from "react";
import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
  ButtonSpinner,
} from "./button.styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonType: "google-sign-in" | "inverted" | "base";
  isLoading?: boolean;
}

const getButton = (buttonType = "base") =>
  ({
    base: BaseButton,
    "google-sign-in": GoogleSignInButton,
    inverted: InvertedButton,
  }[buttonType]);

const Button: FC<ButtonProps> = ({
  children,
  buttonType,
  isLoading = false,
  ...buttonProps
}) => {
  const CustomButton = getButton(buttonType);

  return (
    //@ts-ignore
    <CustomButton disabled={isLoading} {...buttonProps}>
      {isLoading ? <ButtonSpinner /> : children}
    </CustomButton>
  );
};

export default Button;
