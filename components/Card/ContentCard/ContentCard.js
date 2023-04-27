import styled from "styled-components";

export default function ContentCard({ children }) {
  return <StyledContainer>{children}</StyledContainer>;
}

const StyledContainer = styled.div`
  background-color: white;
  border-radius: 1.5em;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.3em;
  flex-wrap: wrap;
  height: auto;
  width: 100%;
  margin-bottom: 1em;
  padding: 0.6em;
`;
