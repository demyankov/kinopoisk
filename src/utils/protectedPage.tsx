import { Navigate } from "react-router-dom";
import { AppRoute } from "../enums/AppRoute";
import { UserType } from "../types/userType";

export function ProtectedPage({
  authorizedOnly = true,
  redirectPage = AppRoute.SignIn,
  user = {},
  children,
}: {
  authorizedOnly?: boolean;
  redirectPage?: string;
  user?: UserType | {};
  children: JSX.Element;
}): JSX.Element {
  if (Object.keys(user).length && authorizedOnly) {
    return children;
  }

  return <Navigate to={redirectPage} replace />;
}
