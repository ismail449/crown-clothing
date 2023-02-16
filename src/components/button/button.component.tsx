import React, { ReactNode, ButtonHTMLAttributes } from "react";
import "./button.styles.scss";


interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  buttonType?: "google-sign-in" | "inverted";
}

const Button = ({ children, buttonType, ...buttonProps }: ButtonProps) => {
  return (
    <button onClick={(event)=>{}} className={`button-container ${buttonType}`} {...buttonProps}>
      {children}
    </button>
  );
};

export default Button;
