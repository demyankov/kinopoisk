import { Form } from "../authPageStyles";
import { Button } from "../../../components/Button/Button";
import { AppRoute } from "../../../enums/AppRoute";
import { P } from "../../../components/Styles/P";
import { useNavigate } from "react-router-dom";

export function SignUpSuccess({ email }: { email: string }): JSX.Element {
  const navigate = useNavigate();

  return (
    <Form>
      <h3>Registration completed successfully</h3>
      <P>To activate your account, follow the link sent to the email {email}</P>
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
