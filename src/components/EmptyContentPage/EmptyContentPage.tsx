import EmptyPageImage from "../Images/emptyPage.png";
import { EmptyWrapper } from "./emptyContentPageStyles";

export function EmptyContentPage(): JSX.Element {
  return (
    <EmptyWrapper>
      <img src={EmptyPageImage} alt="Empty Page"></img>
    </EmptyWrapper>
  );
}
