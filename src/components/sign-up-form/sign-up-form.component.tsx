import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { FirebaseError } from "firebase/app";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import { SignUpContainer } from "./sign-up-form.styles";
import { signUpStart } from "../../store/user/user.action";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const dispatch = useDispatch();
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Password does not match the confirmed password");
      return;
    }
    try {
      dispatch(signUpStart(email, password, displayName));

      resetFormFields();
    } catch (error) {
      if (error instanceof FirebaseError) {
        if (error.code === "auth/email-already-in-use") {
          alert("Email already used please use another email");
        } else {
          console.log("Could not sign up", error.message);
        }
      }
    }
  };
  const handleChange = (event: React.ChangeEvent) => {
    const { value, name } = event.target as HTMLInputElement;
    setFormFields((currentFormFields) => ({
      ...currentFormFields,
      [name]: value,
    }));
  };

  return (
    <SignUpContainer>
      <h2>I do not have an account</h2>
      <span>sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          title="Display Name"
          name="displayName"
          type="text"
          onChange={handleChange}
          required
          value={displayName}
        />
        <FormInput
          title="Email"
          name="email"
          type="email"
          onChange={handleChange}
          required
          value={email}
        />
        <FormInput
          title="Password"
          name="password"
          type="password"
          onChange={handleChange}
          required
          value={password}
        />
        <FormInput
          title="Confirm Password"
          name="confirmPassword"
          type="password"
          onChange={handleChange}
          required
          value={confirmPassword}
        />
        <Button buttonType="base" type="submit">
          Sign Up
        </Button>
      </form>
    </SignUpContainer>
  );
};

export default SignUpForm;
