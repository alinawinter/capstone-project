import GlobalStyle from "../styles";
import Head from "next/head";
import { useState } from "react";
import { foodCategories } from "../lib/db";

export default function App({ Component, pageProps }) {
  const [selectedFoodCategories, setSelectedFoodCategories] = useState([]);

  function handleAddSelectedFoodCategories(selection) {
    const assignedFoodCategoryFromDB = foodCategories.find(
      (foodCategory) => foodCategory.name === selection
    );
    if (!selectedFoodCategories.includes(assignedFoodCategoryFromDB)) {
      const newAssignedFoodCategory = {
        ...assignedFoodCategoryFromDB,
        consumedQuantity: 0,
      };
      setSelectedFoodCategories((prevSelected) => [
        ...prevSelected,
        newAssignedFoodCategory,
      ]);
    }
  }

  function handleDeleteSelectedFoodCategories(selection) {
    const filteredArray = selectedFoodCategories.filter(
      (foodCategory) => foodCategory.name !== selection
    );
    setSelectedFoodCategories([...filteredArray]);
  }

  function handleSetQuantityPerCategory(
    selectedFoodCategories,
    categoryId,
    consumedQuantityValue
  ) {
    const assignedFoodCategoryFromSelection = selectedFoodCategories.find(
      (foodCategory) => foodCategory.id === categoryId
    );
    if (assignedFoodCategoryFromSelection) {
      assignedFoodCategoryFromSelection.consumedQuantity =
        consumedQuantityValue;
    }
    setSelectedFoodCategories(selectedFoodCategories);
  }

  return (
    <>
      <GlobalStyle />
      <Head>
        <title>FuturePlate</title>
      </Head>
      <Component
        {...pageProps}
        selectedFoodCategories={selectedFoodCategories}
        setSelectedFoodCategories={setSelectedFoodCategories}
        handleAddSelectedFoodCategories={handleAddSelectedFoodCategories}
        handleDeleteSelectedFoodCategories={handleDeleteSelectedFoodCategories}
        handleSetQuantityPerCategory={handleSetQuantityPerCategory}
      />
    </>
  );
}
