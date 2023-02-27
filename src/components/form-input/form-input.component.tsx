import React, { InputHTMLAttributes } from "react";
import { Group, Input, FormInputLabel } from "./form-input.styles";

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  title?: string;
}
const FormInput = ({ title, ...otherProps }: FormInputProps) => {
  return (
    <Group>
      <Input {...otherProps} />
      {title ? (
        <FormInputLabel
          shrink={otherProps.value?.toLocaleString().length ? true : false}
        >
          {title}
        </FormInputLabel>
      ) : null}
    </Group>
  );
};

export default FormInput;
