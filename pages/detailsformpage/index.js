import Header from "../../components/Heading/Header";
import Layout from "../../components/layout";
import FormQuantitySpecification from "../../components/Form/FormQuantitySpecification";
import styled from "styled-components";
import Link from "next/link";
import { BackLink } from "../../components/BackLink";

export default function FormDetailspage({ foodCategory }) {
  return (
    <Main>
      <Layout>
        <Header text="FuturePlate"></Header>
        <BackLink></BackLink>
        <FormQuantitySpecification foodCategory={foodCategory} />
      </Layout>
    </Main>
  );
}

const Main = styled.main`
  min-height: 200vh;
`;
