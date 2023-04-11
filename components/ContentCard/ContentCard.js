import styled from "styled-components";

export default function ContentCard({ children }) {
  return <StyledContainer>{children}</StyledContainer>;
}

const StyledContainer = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5em;
  padding: 3em;
  justify-content: center;
  flex-wrap: wrap;
  height: auto;
  margin: 8%;
  border-radius: 1.5em;
  color: var(--color-blue);
  text-align: center;
`;