import GlobalStyle from "../styles";
import Head from "next/head";
import { useState } from "react";
import { foodCategories } from "../lib/db";
import useLocalStorageState from "use-local-storage-state";

export default function App({ Component, pageProps }) {
  const [selectedFoodCategories, setSelectedFoodCategories] = useState([]);
  const [dailyQuizzesResultCollection, setDailyQuizzesResultCollection] =
    useLocalStorageState("dailyQuizzesResultCollection", { defaultValue: [] });

  function handleSelectedFoodCategories(selection) {
    const assignedFoodCategoryFromDB = foodCategories.find(
      (foodCategory) => foodCategory.name === selection
    );

    if (
      !selectedFoodCategories.find(
        (foodCategory) => foodCategory.name === assignedFoodCategoryFromDB.name
      )
    ) {
      const newAssignedFoodCategory = {
        ...assignedFoodCategoryFromDB,
        consumedQuantity: 0,
        isChecked: true,
      };
      setSelectedFoodCategories((prevSelected) => [
        ...prevSelected,
        newAssignedFoodCategory,
      ]);
    } else {
      const filteredArray = selectedFoodCategories.filter(
        (foodCategory) => foodCategory.name !== selection
      );
      setSelectedFoodCategories([...filteredArray]);
    }
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
        handleSelectedFoodCategories={handleSelectedFoodCategories}
        handleSetQuantityPerCategory={handleSetQuantityPerCategory}
        dailyQuizzesResultCollection={dailyQuizzesResultCollection}
        setDailyQuizzesResultCollection={setDailyQuizzesResultCollection}
      />
    </>
  );
}
