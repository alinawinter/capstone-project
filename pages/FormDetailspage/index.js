import Header from "../../components/Heading/Header";
import FormQuantitiySpecification from "../../components/Form/FormQuantitySpecification";
import styled from "styled-components";
import Link from "next/link";

export default function FormDetailspage({ foodCategory }) {
  return (
    <Main>
      <Header text="FuturePlate"></Header>
      <FormQuantitiySpecification foodCategory={foodCategory} />
    </Main>
  );
}

const Main = styled.main`
  min-height: 200vh;
`;
