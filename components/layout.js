import Header from "./Heading/Header";
import NavBar from "./NavBar/NavBar";
import styled from "styled-components";

export default function Layout({ children }) {
  return (
    <LayoutStyling>
      <Header text="FuturePlate" />
      <main>{children}</main>
      <NavBar />
    </LayoutStyling>
  );
}

const LayoutStyling = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
