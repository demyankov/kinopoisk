import styled from "@emotion/styled";
import { Breakpoints } from "../../enums/breakpoints";

export const EmptyWrapper = styled.div`
  min-height: 80%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    height: 100%;
    min-width: 18rem;
    width: 40%;
    object-fit: cover;
  }

  @media (max-width: ${Breakpoints.Mobile}) {
    max-width: 90vw;
  }
`;
