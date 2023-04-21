import Header from "./Heading/Header";
import NavBar from "./NavBar/NavBar";

export default function Layout({ children }) {
  return (
    <>
      <Header text="FuturePlate"></Header>
      <main>{children}</main>
      <NavBar />
    </>
  );
}
