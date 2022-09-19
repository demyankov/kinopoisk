import styled from "@emotion/styled";
import { Breakpoints } from "../../enums/breakpoints";

export const CardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: var(--spacing-4);
  margin-bottom: var(--spacing-1);

  @media (max-width: ${Breakpoints.Tablet}) {
    justify-content: center;
  }
`;
