import Layout from "../../components/layout";
import ContentCard from "../../components/ContentCard/ContentCard";
import { BasicButton } from "../../components/Buttons/buttonStyles";
import FormQuantitySpecification from "../../components/Form/FormQuantitySpecification";
import styled from "styled-components";
import { useRouter } from "next/router";
import { useState } from "react";

export default function FormDetailspage({
  selectedFoodCategories,
  handleSetQuantityPerCategory,
}) {
  const router = useRouter();

  const [currentIndex, setCurrentIndex] = useState(0);

  function handleNextPage() {
    if (currentIndex === selectedFoodCategories.length - 1) {
      router.push("/scorepage");
    } else {
      setCurrentIndex(currentIndex + 1);
      console.log(selectedFoodCategories);
      router.push(
        `/detailsformpage/${selectedFoodCategories[currentIndex + 1].slug}`
      );
    }
  }

  function handlePreviousPage() {
    if (currentIndex === 0) {
      router.push("/");
    } else {
      setCurrentIndex(currentIndex - 1);
      router.push(
        `/detailsformpage/${selectedFoodCategories[currentIndex - 1].slug}`
      );
    }
  }

  return (
    <Layout>
      <StyledButtonWrapper>
        <BasicButton onClick={handlePreviousPage}>{"<"}</BasicButton>
      </StyledButtonWrapper>
      <ContentCard>
        <FormQuantitySpecification
          handleNextPage={handleNextPage}
          currentIndex={currentIndex}
          selectedFoodCategories={selectedFoodCategories}
          selectedFoodCategory={selectedFoodCategories[currentIndex]}
          handleSetQuantityPerCategory={handleSetQuantityPerCategory}
        />
      </ContentCard>
    </Layout>
  );
}

const StyledButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: start;
  margin: 1em;
`;
