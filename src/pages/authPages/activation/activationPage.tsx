import { Form } from "../authPageStyles";
import { Button } from "../../../components/button/button";
import { AppRoute } from "../../../enums/AppRoute";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ActivateUser } from "../../../api/activationUser";
import { AxiosError } from "axios";

export function ActivationAccount(): JSX.Element {
  const navigate = useNavigate();
  const { uid, token } = useParams<{ uid: string; token: string }>();
  const [isActivated, setIsActivated] = useState<boolean>(false);
  const [error, setError] = useState<AxiosError>();

  useEffect(() => {
    if (uid && token) {
      ActivateUser({ uid: uid, token: token })
        .then((response) => {
          setIsActivated(true);
          console.log(response.data);
        })
        .catch((error) => {
          setError(error);
          console.log(error.message);
          console.log(error.request.response);
        });
    }
  }, [uid, token]);
  console.log(uid, "--------", token);
  console.log("isActivated", isActivated);
  console.log("error", error?.message);
  return (
    <Form>
      {isActivated ? (
        <>
          <h3>Accoun is successfully activated</h3>
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
