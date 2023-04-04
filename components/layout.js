import styled from "styled-components";
import Header from "./Heading/Header";

export default function Layout({ children }) {
  return (
    <>
      <Header text="FuturePlate"></Header>
      <StyledMain>{children}</StyledMain>
    </>
  );
}

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  gap: 0.1em;
  justify-content: start;
  flex-wrap: wrap;
  min-height: 200vh;
`;
