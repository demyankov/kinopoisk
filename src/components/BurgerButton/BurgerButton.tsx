import { BurgerWrapper } from "./burgerButtonStyles";
import { BurgerButtonType } from "./burgerButtonType";

export function BurgerButton({
  children,
  ...otherProps
}: BurgerButtonType): JSX.Element {
  return (
    <BurgerWrapper type="button" {...otherProps}>
      {children}
    </BurgerWrapper>
  );
}
