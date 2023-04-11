import Layout from "../../components/layout";
import ContentCard from "../../components/ContentCard/ContentCard";
import { BasicButton } from "../../components/Buttons/buttonStyles";
import FormQuantitySpecification from "../../components/Form/FormQuantitySpecification";
import styled from "styled-components";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function FormDetailspage({
  selectedFoodCategories,
  setSelectedFoodCategories,
  handleSetQuantityPerCategory,
}) {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [calledPush, setCalledPush] = useState(false);

  useEffect(() => {
    if (
      selectedFoodCategories === undefined ||
      selectedFoodCategories.length === 0
    ) {
      if (calledPush) {
        return;
      }
      router.push("/");
      setCalledPush(true);
    }
  }, [selectedFoodCategories, router, calledPush]);

  function handleNextPage() {
    if (currentIndex === selectedFoodCategories.length - 1) {
      router.push("/scorepage");
    } else {
      setCurrentIndex(currentIndex + 1);
      router.push(
        `/detailsformpage/${selectedFoodCategories[currentIndex + 1].slug}`
      );
    }
  }

  function handlePreviousPage() {
    if (currentIndex === 0) {
      setSelectedFoodCategories([]);
      router.push("/");
    } else {
      setCurrentIndex(currentIndex - 1);
      router.push(
        `/detailsformpage/${selectedFoodCategories[currentIndex - 1].slug}`
      );
    }
  }

  return (
    selectedFoodCategories.length > 0 && (
      <Layout>
        <StyledButtonWrapper>
          <BasicButton onClick={handlePreviousPage}>
            {currentIndex === 0 ? "< Restart Quiz" : "<"}
          </BasicButton>
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
    )
  );
}

const StyledButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: start;
  margin: 1em;
`;