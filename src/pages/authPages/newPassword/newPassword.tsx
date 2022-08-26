import { AxiosError } from "axios";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { resetPasswordConfirm } from "../../../api/resetPasswordConfirm";
import { Button } from "../../../components/button/button";
import { Input } from "../../../components/input/input";
import { AppRoute } from "../../../enums/AppRoute";
import { Form } from "../authPageStyles";

export function NewPassword(): JSX.Element {
  const navigate = useNavigate();
  const { uid, token } = useParams<{ uid: string; token: string }>();
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  return (
    <Form>
      <h3>Email</h3>
      <Input
        value={password}
        label="Password"
        type="password"
        autoComplete="off"
        placeholder="Your password"
        onChange={({ target: { value } }) => {
          setPassword(value);
        }}
      />
      <Input
        value={confirmPassword}
        label="Confirm password"
        type="password"
        autoComplete="off"
        placeholder="Confirm password"
        onChange={({ target: { value } }) => {
          setConfirmPassword(value);
        }}
        error={error}
        errorPosition="static"
      />
      <Button
        width="100%"
        disabled={
          isLoading ||
          !password ||
          password !== confirmPassword ||
          !uid ||
          !token
        }
        onClick={() => {
          if (uid && token) {
            setIsLoading(true);
            resetPasswordConfirm({
              uid: uid,
              token: token,
              new_password: password,
            })
              .then(() => {
                setIsLoading(false);
                navigate(AppRoute.Auth, { replace: true });
              })
              .catch((error: AxiosError) => {
                setIsLoading(false);
                setError(
                  JSON.parse(error?.request?.responseText)?.new_password
                );
              });
          }
        }}
      >
        Set password
      </Button>
    </Form>
  );
}
