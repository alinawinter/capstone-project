import Layout from "../components/layout";
import Header from "../components/Heading/Header";
import FormPreselection from "../components/Form/FormPreselectionFood";
import styled from "styled-components";
import Link from "next/link";

export default function Home({ foodCategory, handleSetFoodCategory }) {
  return (
    <Main>
      <Layout>
        <Header text="FuturePlate"></Header>
        <FormPreselection
          foodCategory={foodCategory}
          handleSetFoodCategory={handleSetFoodCategory}
        />
      </Layout>
    </Main>
  );
}

const Main = styled.main`
  min-height: 200vh;
`;
