import styled from "styled-components";

export const BasicButton = styled.button`
  color: var(--color-beige);
  font-family: var(--font-family-text);
  background-color: var(--color-green);
  border: none;
  border-radius: 999px;
  padding: 1em 1em;
  cursor: pointer;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
  &:hover {
    background-color: var(--color-orange);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  }
`;
