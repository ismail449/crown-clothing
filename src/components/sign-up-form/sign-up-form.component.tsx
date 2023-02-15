import React, { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import './sign-up-form.styles.scss'

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
type FormDataType = {
  title: string;
  type: "text" | "password" | "email";
  required: boolean;
  name: string;
  value: string;
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
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
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Email already used please use another email");
      } else {
        console.log("Could not sign up", error.message);
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
  const formData: FormDataType[] = [
    {
      title: "Display Name",
      type: "text",
      required: true,
      name: "displayName",
      value: displayName,
    },
    {
      title: "Email",
      type: "email",
      required: true,
      name: "email",
      value: email,
    },
    {
      title: "Password",
      type: "password",
      required: true,
      name: "password",
      value: password,
    },
    {
      title: "Confirm Password",
      type: "password",
      required: true,
      name: "confirmPassword",
      value: confirmPassword,
    },
  ];
  return (
    <div className="sign-up-container" >
      <h2>Do not have an account?</h2>
      <span>sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        {formData.map((data) => {
          return (
            <FormInput
              key={data.name}
              {...data}
              onChange={handleChange}
            />
          );
        })}

        <Button htmlType="submit">Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
