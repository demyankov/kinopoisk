import { Button } from "../../../components/button/button";
import { Input } from "../../../components/input/input";
import { Form } from "../authPageStyles";

export function ResertPassword(): JSX.Element {
  return (
    <Form>
      <h3>Resert password</h3>
      <p>You will receive an email with a link to reset your password!</p>
      <Input label="Email" placeholder="Your Email" />
      <Button width="100%">Resert</Button>
    </Form>
  );
}
