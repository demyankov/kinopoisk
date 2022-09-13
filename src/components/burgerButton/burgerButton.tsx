import { BurgerWrapper } from "./burgerButtonStyles";
import { BurgerButtonType } from "./BurgerButtonType";

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
