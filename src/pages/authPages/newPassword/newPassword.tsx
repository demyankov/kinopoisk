import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../components/button/button";
import { Input } from "../../../components/input/input";
import { AppRoute } from "../../../enums/AppRoute";
import { Form } from "../authPageStyles";

export function NewPassword(): JSX.Element {
  const navigate = useNavigate();

  return (
    <Form>
      <h3>New password</h3>
      <Input label="Password" placeholder="Your password" />
      <Input label="Confirm password" placeholder="Confirm password" />
      <Button width="100%" onClick={() => navigate(AppRoute.Auth)}>
        Set password
      </Button>
    </Form>
  );
}
