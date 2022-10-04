import { Form } from "../authPageStyles";
import { Button } from "../../../components/Button/Button";
import { AppRoute } from "../../../enums/AppRoute";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ActivateUser } from "../../../api/activationUser";
import { AxiosError } from "axios";
import { Error } from "../../../components/Styles/error";

export function ActivationAccount(): JSX.Element {
  const navigate = useNavigate();
  const { uid, token } = useParams<{ uid: string; token: string }>();
  const [isActivated, setIsActivated] = useState<boolean>(false);
  const [error, setError] = useState<AxiosError>();

  useEffect(() => {
    if (uid && token) {
      ActivateUser({ uid: uid, token: token })
        .then(() => {
          setIsActivated(true);
        })
        .catch((error) => {
          setIsActivated(false);
          setError(error);
        });
    }
  }, [uid, token]);

  return (
    <Form>
      {isActivated ? (
        <>
          <h3>Account is successfully activated</h3>
          <Error>{error?.message}</Error>
          <Button
            width="100%"
            onClick={() => {
              navigate(`${AppRoute.SignIn}`);
            }}
          >
            Sign In
          </Button>
        </>
      ) : (
        <>
          <h3>The account is not activated</h3>
          <Button
            width="100%"
            onClick={() => {
              navigate(`${AppRoute.Main}`);
            }}
          >
            To Home
          </Button>
        </>
      )}
    </Form>
  );
}
