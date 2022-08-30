import React, { useState } from "react";
import { Form, SignLink } from "../authPageStyles";
import { Button } from "../../../components/button/button";
import { Input } from "../../../components/input/input";
import { AppRoute } from "../../../enums/AppRoute";
import { signUp } from "../../../api/signUp";
import {
  FormDataType,
  RegistrationErrorType,
} from "../../../types/signUpTypes";
import { SignUpSuccess } from "./signUpSuccess";

export function SignUpForm(): JSX.Element {
  const [formData, setFormData] = useState<FormDataType>({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [error, setError] = useState<RegistrationErrorType>();

  return !isSuccess ? (
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
        error={error?.username}
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
        type="email"
        error={error?.email}
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
        type="password"
        autoComplete="off"
        error={error?.password}
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
        type="password"
        autoComplete="off"
      />
      <Button
        width="100%"
        disabled={
          isLoading ||
          !formData.username ||
          !formData.email ||
          !formData.password ||
          formData.password !== formData.confirmPassword
        }
        onClick={() => {
          setIsLoading(true);
          signUp({
            username: formData.username,
            email: formData.email,
            password: formData.password,
          })
            .then(() => {
              setIsLoading(false);
              setIsSuccess(true);
            })
            .catch((e) => {
              setError(JSON.parse(e.request?.responseText));
              setIsLoading(false);
            });
        }}
      >
        Sign Up
      </Button>
      <p>
        Already have an account? <SignLink to={AppRoute.Auth}>Sign In</SignLink>
      </p>
    </Form>
  ) : (
    <SignUpSuccess email={formData.email} />
  );
}
