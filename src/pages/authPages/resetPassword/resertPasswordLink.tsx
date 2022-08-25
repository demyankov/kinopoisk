import { Form } from "../authPageStyles";
import { Button } from "../../../components/button/button";
import { AppRoute } from "../../../enums/AppRoute";
import { P } from "../../../components/styles/P";
import { useNavigate } from "react-router-dom";

export function ResertPasswordLink({ email }: { email: string }): JSX.Element {
  const navigate = useNavigate();

  return (
    <Form>
      <h3>Resert password</h3>
      <P>
        You will receive an email {email} with a link to resert your password.
      </P>
      <Button
        width="100%"
        onClick={() => {
          navigate(`${AppRoute.Main}`);
        }}
      >
        Home
      </Button>
    </Form>
  );
}
