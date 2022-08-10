import React from "react";
import { Button } from "../../../components/button/button";
import { Input } from "../../../components/input/input";
import { AppRoute } from "../../../enums/AppRoute";
import { Form, SignLink } from "../authPageStyles";

export function SignInForm(): JSX.Element {
  return (
    <Form>
      <h3>Sign In</h3>
      <Input label="Email" placeholder="Your Email" />
      <div>
        <Input label="Password" placeholder="Your password" />
        <SignLink to={AppRoute.Resert}>Forgot your password?</SignLink>
      </div>
      <Button width="100%">Sign In</Button>
      <p>
        Don't have an account? <SignLink to={AppRoute.SignUp}>Sign Up</SignLink>
      </p>
    </Form>
  );
}
