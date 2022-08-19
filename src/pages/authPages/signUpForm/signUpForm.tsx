import React, { useState } from "react";
import { RegisterUserType } from "../../../api/signUp";
import { Button } from "../../../components/button/button";
import { Input } from "../../../components/input/input";
import { AppRoute } from "../../../enums/AppRoute";
import { Form, SignLink } from "../authPageStyles";

interface FormDataType extends RegisterUserType {
  confirmPassword: string;
}

export function SignUpForm(): JSX.Element {
  const [formData, setFormData] = useState<FormDataType>({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  console.log(formData);
  return (
    <Form>
      <h3>Sign Up</h3>
      <Input
        value={formData.username}
        onChange={({ currentTarget }) => {
          setFormData((prevState) => ({
            ...prevState,
            username: currentTarget.value,
          }));
        }}
        label="Name"
        placeholder="Your name"
      />
      <Input
        value={formData.email}
        onChange={({ currentTarget }) => {
          setFormData((prevState) => ({
            ...prevState,
            email: currentTarget.value,
          }));
        }}
        label="Email"
        placeholder="Your Email"
      />
      <Input
        value={formData.password}
        onChange={({ currentTarget }) => {
          setFormData((prevState) => ({
            ...prevState,
            password: currentTarget.value,
          }));
        }}
        label="Password"
        placeholder="Your password"
      />
      <Input
        value={formData.confirmPassword}
        onChange={({ currentTarget }) => {
          setFormData((prevState) => ({
            ...prevState,
            confirmPassword: currentTarget.value,
          }));
        }}
        label="Confirm password"
        placeholder="Confirm password"
      />
      <Button width="100%">Sign Up</Button>
      <p>
        Already have an account? <SignLink to={AppRoute.Auth}>Sign In</SignLink>
      </p>
    </Form>
  );
}
