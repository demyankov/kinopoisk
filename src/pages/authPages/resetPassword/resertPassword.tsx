import { AxiosError } from "axios";
import { useState } from "react";
import { resetPassword } from "../../../api/resetPassword";
import { Button } from "../../../components/button/button";
import { Input } from "../../../components/input/input";
import { Form } from "../authPageStyles";
import { ResertPasswordLink } from "./resertPasswordLink";

export function ResertPassword(): JSX.Element {
  const [email, setEmail] = useState<string>("");
  const [isloading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>();
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  return !isSuccess ? (
    <Form>
      <h3>Resert password</h3>

      <p>You will receive an email with a link to reset your password!</p>
      <Input
        value={email}
        onChange={(e) => setEmail(e.currentTarget.value)}
        label="Email"
        placeholder="Your Email"
        error={error}
      />
      <Button
        width="100%"
        disabled={isloading || !email}
        onClick={() => {
          setIsLoading(true);
          resetPassword(email)
            .then(() => {
              setIsLoading(false);
              setIsSuccess(true);
            })
            .catch((error: AxiosError) => {
              setIsLoading(false);
              setError(JSON.parse(error?.request?.responseText)?.email);
            });
        }}
      >
        Resert
      </Button>
    </Form>
  ) : (
    <ResertPasswordLink email={email} />
  );
}
