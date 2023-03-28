import Header from "../components/Heading";
import FormPreselection from "../components/FormPreselectionFood";
import styled from "styled-components";

export default function Home() {
  return (
    <main>
      <Header text="FuturePlate"></Header>
      <FormPreselection />
    </main>
  );
}
