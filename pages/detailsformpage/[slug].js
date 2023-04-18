import Layout from "../../components/layout";
import ContentCard from "../../components/ContentCard/ContentCard";
import { BasicButton } from "../../components/Buttons/buttonStyles";
import FormQuantitySpecification from "../../components/Form/FormQuantitySpecification";
import styled from "styled-components";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function FormDetailspage({
  selectedFoodCategories,
  handleSetQuantityPerCategory,
  currentWeekDay,
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
      router.push("/selectcategoriesformpage");
      setCalledPush(true);
    }
  }, [selectedFoodCategories, router, calledPush]);

  function handleNextPage() {
    if (currentIndex === selectedFoodCategories.length - 1) {
      router.push(`/scorepage/${currentWeekDay.toLowerCase()}`);
    } else {
      setCurrentIndex(currentIndex + 1);
      router.push(
        `/detailsformpage/${selectedFoodCategories[currentIndex + 1].slug}`
      );
    }
  }

  function handlePreviousPage() {
    if (currentIndex === 0) {
      dataSetSelectedFoodCategories([]);
      router.push("/selectcategoriesformpage");
    } else {
      setCurrentIndex(currentIndex - 1);
      router.push(
        `/detailsformpage/${dataSelectedFoodCategories[currentIndex - 1].slug}`
      );
    }
  }

  return (
    selectedFoodCategories.length > 0 && (
      <Layout>
        <ContentCard>
          <FormQuantitySpecification
            handleNextPage={handleNextPage}
            currentIndex={currentIndex}
            selectedFoodCategories={selectedFoodCategories}
            selectedFoodCategory={selectedFoodCategories[currentIndex]}
            handleSetQuantityPerCategory={handleSetQuantityPerCategory}
          />
        </ContentCard>
        <StyledButtonWrapper>
          <BasicButton onClick={handlePreviousPage}>
            {currentIndex === 0 ? "< Quiz neustarten" : "<"}
          </BasicButton>
        </StyledButtonWrapper>
      </Layout>
    )
  );
}

const StyledButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;
