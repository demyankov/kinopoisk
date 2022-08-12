import { Rings as Loader } from "react-loader-spinner";

import { LoaderProps } from "./loaderType";
import { RingsLoaderWrapper } from "./ringsLoaderStyles";

export function RingsLoader({
  ...props
}: Omit<LoaderProps, "secondaryColor">): JSX.Element {
  return (
    <RingsLoaderWrapper>
      <Loader {...props} />
    </RingsLoaderWrapper>
  );
}
