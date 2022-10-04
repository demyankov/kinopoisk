import { AxiosError } from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getTokens } from "../../../api/getTokens";
import { Button } from "../../../components/Button/Button";
import { Input } from "../../../components/Input/Input";
import { AppRoute } from "../../../enums/AppRoute";
import { useAppDispatch } from "../../../store/rootStore";
import { signInAction } from "../../../store/auth/signIn.actions";
import {
  signInErrorSelector,
  signInUserSelector,
} from "../../../store/auth/signIn.selector";
import { Form, SignLink } from "../authPageStyles";

export function SignInForm(): JSX.Element {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const user = useSelector(signInUserSelector);
  const [tokenError, setTokenError] = useState<AxiosError>();
  const userError = useSelector(signInErrorSelector)?.message;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (user.username) {
      navigate(`${AppRoute.Main}`, { replace: true });
    }
  }, [user]);

  return (
    <Form>
      <h3>Sign In</h3>
      <Input
        value={email}
        label="Email"
        type="email"
        autoComplete="on"
        placeholder="Your Email"
        onChange={(event) => {
          setEmail(event.currentTarget.value);
        }}
      />
      <div>
        <Input
          value={password}
          label="Password"
          type="password"
          autoComplete="off"
          placeholder="Your password"
          error={`${tokenError ? tokenError?.request?.responseText : ""} ${
            userError ? userError : ""
          } `}
          errorPosition="static"
          onChange={(event) => {
            setPassword(event.currentTarget.value);
          }}
        />
        <SignLink to={AppRoute.ResertPassword}>Forgot your password?</SignLink>
      </div>
      <Button
        width="100%"
        disabled={!email || !password}
        onClick={() => {
          getTokens({ email: email, password: password })
            .then(() => {
              dispatch(signInAction());
            })
            .catch((error) => {
              setTokenError(error);
            });
        }}
      >
        Sign In
      </Button>
      <p>
        Don't have an account? <SignLink to={AppRoute.SignUp}>Sign Up</SignLink>
      </p>
    </Form>
  );
}
