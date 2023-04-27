import GlobalStyle from "../styles";
import Head from "next/head";
import SplashScreen from "../components/SplashScreen/SplashScreen";
import { useState, useEffect } from "react";
import { foodCategories } from "../lib/db";
import useLocalStorageState from "use-local-storage-state";

export default function App({ Component, pageProps }) {
  const [showSplashScreen, setShowSplashScreen] = useState(true);
  const [selectedFoodCategories, setSelectedFoodCategories] = useState([]);
  const [dailyQuizzesResultCollection, setDailyQuizzesResultCollection] =
    useLocalStorageState("dailyQuizzesResultCollection", { defaultValue: [] });
  const [currentWeekDay, setCurrentWeekDay] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplashScreen(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  function handleSetSelectedFoodCategories(selection) {
    setSelectedFoodCategories(selection);
  }

  function handleCurrentWeekDay(weekday) {
    setCurrentWeekDay(weekday);
  }

  function handleDailyQuizzesResultCollection(dayQuiz) {
    setDailyQuizzesResultCollection(dayQuiz);
  }

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

  function handleQuantityPerCategory(
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
      {showSplashScreen ? (
        <SplashScreen />
      ) : (
        <Component
          {...pageProps}
          selectedFoodCategories={selectedFoodCategories}
          handleSetSelectedFoodCategories={handleSetSelectedFoodCategories}
          handleSelectedFoodCategories={handleSelectedFoodCategories}
          handleQuantityPerCategory={handleQuantityPerCategory}
          dailyQuizzesResultCollection={dailyQuizzesResultCollection}
          handleDailyQuizzesResultCollection={
            handleDailyQuizzesResultCollection
          }
          currentWeekDay={currentWeekDay}
          handleCurrentWeekDay={handleCurrentWeekDay}
          foodCategories={foodCategories}
        />
      )}
    </>
  );
}
