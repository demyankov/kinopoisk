import { LoaderWrapper } from "./loaderStyles";
import { MutatingDots as Loader } from "react-loader-spinner";
import { LoaderProps } from "./loaderType";

export function AppLoader({ ...props }: LoaderProps): JSX.Element {
  return (
    <LoaderWrapper>
      <Loader {...props} />
    </LoaderWrapper>
  );
}
