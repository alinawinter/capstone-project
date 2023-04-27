import styled from "styled-components";

export default function ContentCard({ children }) {
  return <StyledContainer>{children}</StyledContainer>;
}

const StyledContainer = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
  padding: 1em;
  flex-wrap: wrap;
  height: auto;
  border-radius: 1.5em;
  color: var(--color-blue);
  text-align: center;
  width: 100%;
  margin-bottom: 1em;
`;
