import React, { useState } from "react";
import { useDispatch } from "react-redux";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import { ButtonsContainer, SignInContainer } from "./sign-in-form.styles";
import {
  emailSingInStart,
  googleSignInStart,
} from "../../store/user/user.action";

const defaultFormFields = {
  email: "",
  password: "",
};
const SignInForm = () => {
  const dispatch = useDispatch();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const handleChange = (event: React.ChangeEvent) => {
    const { value, name } = event.target as HTMLInputElement;
    setFormFields((currentFormFields) => ({
      ...currentFormFields,
      [name]: value,
    }));
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    dispatch(emailSingInStart(email, password));
    resetFormFields();
  };
  const signInWithGoogle = async () => {
    dispatch(googleSignInStart());
  };
  return (
    <SignInContainer>
      <h2>I already have an account</h2>
      <span>sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          title="email"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          required
        />
        <FormInput
          title="password"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          required
        />
        <ButtonsContainer>
          <Button buttonType="base" type="submit">
            sign in
          </Button>
          <Button
            type="button"
            onClick={signInWithGoogle}
            buttonType="google-sign-in"
          >
            google sign in
          </Button>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

export default SignInForm;
