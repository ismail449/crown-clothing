import React, { InputHTMLAttributes } from "react";
import './form-input.styles.scss'

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  title?: string;
}
const FormInput = ({ title, ...otherProps }: FormInputProps) => {
  return (
    <div className="group">
      <input className="form-input" {...otherProps} />
      {title ? (
        <label
          className={`${
            otherProps.value?.toString().length ? "shrink" : ""
          } form-input-label`}
        >
          {title}
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;
