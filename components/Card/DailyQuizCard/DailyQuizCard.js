import styled from "styled-components";

export default function DailyQuizCard({ children }) {
  return <StyledContainer>{children}</StyledContainer>;
}

const StyledContainer = styled.div`
  background-color: white;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  align-items: center;
  padding: 1em;
  flex-wrap: wrap;
  height: auto;
  margin: 1em;
  border-radius: 1.5em;
  color: var(--color-blue);
  text-align: center;
`;
