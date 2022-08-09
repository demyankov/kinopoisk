import { ButtonWrapper } from "./buttonStyles";
import { ButtonType } from "./buttonType";

export function Button({
  children,
  width = "auto",
  ...otherProps
}: ButtonType): JSX.Element {
  return (
    <ButtonWrapper width={width} type="button" {...otherProps}>
      {children}
    </ButtonWrapper>
  );
}
