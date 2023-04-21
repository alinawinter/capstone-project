import calculateSumOfActualWeeklyConsumptionByFoodCategories from "../utils/sumConsumptionByFoodCategory";
import calculateRecommendedConsumptionByFoodCategoryBasedOnNumberQuizzes from "../utils/sumRecommendedConsumptionByFoodCategory";
import Layout from "../components/layout";
import WeekdayOptions from "../components/WeekdayOptions/WeekdayOptions";
import WeeklyScore from "../components/Score/WeeklyScore";
import WeeklyScoreTable from "../components/Score/WeeklyScoreTable";
import { BasicButton } from "../components/Buttons/buttonStyles";
import styled from "styled-components";
import { useEffect, useState } from "react";

export default function Home({
  setSelectedFoodCategories,
  handleDailyQuizzesResultCollection,
  dailyQuizzesResultCollection,
  handleCurrentWeekDay,
  currentWeekDay,
  foodCategories,
}) {
  const weekDays = [
    "Montag",
    "Dienstag",
    "Mittwoch",
    "Donnerstag",
    "Freitag",
    "Samstag",
    "Sonntag",
  ];
  const [
    sumOfActualWeeklyConsumptionByFoodCategories,
    setSumOfActualWeeklyConsumptionByFoodCategories,
  ] = useState({});
  const [
    recommendedConsumptionByFoodCategoryBasedOnNumberQuizzes,
    setRecommendedConsumptionByFoodCategoryBasedOnNumberQuizzes,
  ] = useState({});
  const [
    maxRangeByFoodCategoryBasedOnNumberQuizzes,
    setMaxRangeByFoodCategoryBasedOnNumberQuizzes,
  ] = useState({});

  function handleResetWeek() {
    handleDailyQuizzesResultCollection([]);
  }

  useEffect(() => {
    const newSumOfActualWeeklyConsumptionByFoodCategories =
      calculateSumOfActualWeeklyConsumptionByFoodCategories(
        dailyQuizzesResultCollection
      );
    setSumOfActualWeeklyConsumptionByFoodCategories(
      newSumOfActualWeeklyConsumptionByFoodCategories
    );

    const newRecommendedConsumptionByFoodCategoryBasedOnNumberQuizzes =
      calculateRecommendedConsumptionByFoodCategoryBasedOnNumberQuizzes(
        dailyQuizzesResultCollection,
        foodCategories
      );

    setRecommendedConsumptionByFoodCategoryBasedOnNumberQuizzes(
      newRecommendedConsumptionByFoodCategoryBasedOnNumberQuizzes
    );

    const newMaxRangeByFoodCategoryBasedOnNumberQuizzes = foodCategories.reduce(
      (result, foodCategory) => {
        result[foodCategory.name] =
          foodCategory.maxRange * dailyQuizzesResultCollection.length;
        return result;
      },
      {}
    );
    setMaxRangeByFoodCategoryBasedOnNumberQuizzes(
      newMaxRangeByFoodCategoryBasedOnNumberQuizzes
    );
  }, [dailyQuizzesResultCollection, foodCategories]);

  return (
    <Layout>
      <h2>Deine Woche</h2>
      {dailyQuizzesResultCollection.length === 0 && (
        <Description>
          Beginne dein tägliches Quiz, um deinen Wochenscore zu berechnen.
        </Description>
      )}
      <List role="list">
        {weekDays.map((weekDay) => (
          <li key={weekDay}>
            <WeekdayOptions
              key={weekDay}
              setSelectedFoodCategories={setSelectedFoodCategories}
              dailyQuizzesResultCollection={dailyQuizzesResultCollection}
              handleDailyQuizzesResultCollection={
                handleDailyQuizzesResultCollection
              }
              weekDay={weekDay}
              handleCurrentWeekDay={handleCurrentWeekDay}
              currentWeekDay={currentWeekDay}
              foodCategories={foodCategories}
            />
          </li>
        ))}
      </List>
      {dailyQuizzesResultCollection.length !== 0 && (
        <ScoreBox>
          <h2>Bisheriger Wochenscore:</h2>
          <WeeklyScore
            dailyQuizzesResultCollection={dailyQuizzesResultCollection}
            foodCategories={foodCategories}
            sumOfActualWeeklyConsumptionByFoodCategories={
              sumOfActualWeeklyConsumptionByFoodCategories
            }
            recommendedConsumptionByFoodCategoryBasedOnNumberQuizzes={
              recommendedConsumptionByFoodCategoryBasedOnNumberQuizzes
            }
            maxRangeByFoodCategoryBasedOnNumberQuizzes={
              maxRangeByFoodCategoryBasedOnNumberQuizzes
            }
          />
          <WeeklyScoreTable
            dailyQuizzesResultCollection={dailyQuizzesResultCollection}
            foodCategories={foodCategories}
            sumOfActualWeeklyConsumptionByFoodCategories={
              sumOfActualWeeklyConsumptionByFoodCategories
            }
            recommendedConsumptionByFoodCategoryBasedOnNumberQuizzes={
              recommendedConsumptionByFoodCategoryBasedOnNumberQuizzes
            }
          />
          <BasicButton
            type="reset"
            aria-label="Ergebnisse der ganzen Woche zurücksetzen"
            onClick={handleResetWeek}
          >
            Woche zurücksetzen
          </BasicButton>
        </ScoreBox>
      )}
    </Layout>
  );
}

const ScoreBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  flex-wrap: wrap;
`;

const List = styled.ul`
  list-style: none;
  padding 0;
  margin: 0;
`;

const Description = styled.p`
  flex-wrap: wrap;
  text-align: center;
`;
