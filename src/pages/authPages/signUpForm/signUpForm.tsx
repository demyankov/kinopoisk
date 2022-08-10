import React from "react";
import { Button } from "../../../components/button/button";
import { Input } from "../../../components/input/input";
import { AppRoute } from "../../../enums/AppRoute";
import { Form, SignLink } from "../authPageStyles";

export function SignUpForm(): JSX.Element {
  return (
    <Form>
      <h3>Sign Up</h3>
      <Input label="Name" placeholder="Your name" />
      <Input label="Email" placeholder="Your Email" />
      <Input label="Password" placeholder="Your password" />
      <Input label="Confirm password" placeholder="Confirm password" />
      <Button width="100%">Sign Up</Button>
      <p>
        Already have an account? <SignLink to={AppRoute.Auth}>Sign In</SignLink>
      </p>
    </Form>
  );
}
