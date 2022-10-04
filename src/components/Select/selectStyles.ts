import styled from "@emotion/styled";

export const SelectWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: end;
  gap: var(--spacing-9);
`;

export const StyledSelect = styled.select`
  width: 100%;
  padding: var(--spacing-7) var(--spacing-6);
  background-color: var(--background-color-second);
  border-radius: var(--spacing-9);
  border: none;

  & > option {
    padding: 10px;
    line-height: 20px;
    color: var(--font-color-base);
  }
`;
