import styled from "styled-components";
export default function Layout({ children }) {
  return <StyledLayoutContainer>{children}</StyledLayoutContainer>;
}

const StyledLayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.1em;
  justify-content: start;
  flex-wrap: wrap;
`;
