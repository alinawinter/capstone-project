import styled from "styled-components";
import Header from "./Heading/Header";

export default function Layout({ children }) {
  return (
    <>
      <Header text="FuturePlate"></Header>
      <main>{children}</main>
    </>
  );
}
