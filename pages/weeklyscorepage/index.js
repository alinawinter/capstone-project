import calculateSumOfActualWeeklyConsumptionByFoodCategories from "../../utils/sumConsumptionByFoodCategory";
import calculateRecommendedConsumptionByFoodCategoryBasedOnNumberQuizzes from "../../utils/sumRecommendedConsumptionByFoodCategory";
import Layout from "../../components/layout";
import WeeklyScore from "../../components/Score/WeeklyScore";
import WeeklyScoreTable from "../../components/Score/WeeklyScoreTable";
import { BasicButton } from "../../components/Buttons/buttonStyles";
import styled from "styled-components";
import { useEffect, useState } from "react";

export default function WeeklyScorePage({
  dailyQuizzesResultCollection,
  foodCategories,
  handleDailyQuizzesResultCollection,
}) {
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

  function handleResetWeek() {
    handleDailyQuizzesResultCollection([]);
  }

  return (
    <Layout>
      {dailyQuizzesResultCollection.length === 0 ? (
        <>
          <h2>Dein Wochenscore</h2>
          <Description>
            Beginne dein tägliches Quiz, um deinen Wochenscore zu berechnen.
          </Description>
        </>
      ) : (
        <ScoreBox>
          <h2>Dein Wochenscore:</h2>
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
            maxRangeByFoodCategoryBasedOnNumberQuizzes={
              maxRangeByFoodCategoryBasedOnNumberQuizzes
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

const Description = styled.p`
  flex-wrap: wrap;
  text-align: center;
`;

const ScoreBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  flex-wrap: wrap;
`;
