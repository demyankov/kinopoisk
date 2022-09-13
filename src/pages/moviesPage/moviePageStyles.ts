import styled from "@emotion/styled";

export const CardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: var(--spacing-4);
  margin-bottom: var(--spacing-1);
  justify-content: space-around;
`;

export const ShowMoreButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const ShowMoreButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: var(--spacing-9);
  border-radius: 9999px;
  padding: var(--spacing-9) var(--spacing-6);
  background-color: var(--background-color-second);
`;
