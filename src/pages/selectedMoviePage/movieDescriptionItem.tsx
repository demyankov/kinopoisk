import { getMoviesDetailsResponseType } from "../../types/getMoviesDetailsResponseType";
import {
  DescriptionHeader,
  DescriptionItemWrapper,
  DescriptionText,
} from "./movieDescriptionItemStyles";

export function MovieDescriptionItem({
  header,
  text,
}: {
  header: string;
  text: string;
}) {
  return (
    <DescriptionItemWrapper>
      <DescriptionHeader>{header}</DescriptionHeader>
      <DescriptionText>{text}</DescriptionText>
    </DescriptionItemWrapper>
  );
}
