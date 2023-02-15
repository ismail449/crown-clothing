import React, { ReactNode } from "react";
import "./button.styles.scss";

type ButtonProps = {
  children: ReactNode;
  htmlType?: "button" | "submit" | "reset";
  type?: "google-sign-in" | "inverted";
};

const Button = ({ children, htmlType, type }: ButtonProps) => {
  return (
    <button className={`button-container ${type}`} type={htmlType}>
      {children}
    </button>
  );
};

export default Button;
