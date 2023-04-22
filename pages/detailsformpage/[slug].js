import Layout from "../../components/layout";
import ContentCard from "../../components/ContentCard/ContentCard";
import FormQuantitySpecification from "../../components/Form/FormQuantitySpecification";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function FormDetailspage({
  selectedFoodCategories,
  setSelectedFoodCategories,
  handleQuantityPerCategory,
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
      router.push(`/dayscorepage/${currentWeekDay.toLowerCase()}`);
    } else {
      setCurrentIndex(currentIndex + 1);
      router.push(
        `/detailsformpage/${selectedFoodCategories[currentIndex + 1].slug}`
      );
    }
  }

  function handlePreviousPage() {
    if (currentIndex === 0) {
      router.push("/selectcategoriesformpage");
      setSelectedFoodCategories([]);
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
        <ContentCard>
          <FormQuantitySpecification
            handleNextPage={handleNextPage}
            currentIndex={currentIndex}
            selectedFoodCategories={selectedFoodCategories}
            selectedFoodCategory={selectedFoodCategories[currentIndex]}
            handleQuantityPerCategory={handleQuantityPerCategory}
            handlePreviousPage={handlePreviousPage}
          />
        </ContentCard>
      </Layout>
    )
  );
}
