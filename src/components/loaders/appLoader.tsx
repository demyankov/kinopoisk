import { MutatingDots as Loader } from "react-loader-spinner";
import { LoaderWrapper } from "./appLoaderStyles";
import { LoaderProps } from "./loaderType";

export function AppLoader({ ...props }: LoaderProps): JSX.Element {
  return (
    <LoaderWrapper>
      <Loader {...props} />
    </LoaderWrapper>
  );
}
