import styled from "styled-components";
import { calculateAverageScoreAccordance } from "../../utils/averageScoreUtils";
import {
  calculateDetailsScoreDeviation,
  calculateDetailsScoreAccordance,
} from "../../utils/detailsScoreUtils";
import { useState, useEffect } from "react";
import calculateFormatWeekDataForScoreCalculation from "../../utils/formatWeekDataForScores";

export default function WeeklyScore({
  dailyQuizzesResultCollection,
  foodCategories,
  sumOfActualWeeklyConsumptionByFoodCategories,
  recommendedConsumptionByFoodCategoryBasedOnNumberQuizzes,
  maxRangeByFoodCategoryBasedOnNumberQuizzes,
}) {
  const [calculatedWeeklyScoreNumber, setCalculatedWeeklyScoreNumber] =
    useState(null);

  useEffect(() => {
    const weekDataForScoreCalculation =
      calculateFormatWeekDataForScoreCalculation(
        sumOfActualWeeklyConsumptionByFoodCategories,
        recommendedConsumptionByFoodCategoryBasedOnNumberQuizzes,
        maxRangeByFoodCategoryBasedOnNumberQuizzes
      );

    const score = calculateAverageScoreAccordance(
      weekDataForScoreCalculation,
      calculateDetailsScoreDeviation,
      calculateDetailsScoreAccordance
    );

    setCalculatedWeeklyScoreNumber(Math.floor(score));
  }, [
    calculatedWeeklyScoreNumber,
    dailyQuizzesResultCollection,
    foodCategories,
    maxRangeByFoodCategoryBasedOnNumberQuizzes,
    recommendedConsumptionByFoodCategoryBasedOnNumberQuizzes,
    sumOfActualWeeklyConsumptionByFoodCategories,
  ]);
  if (calculatedWeeklyScoreNumber === null) {
    return null;
  }
  return (
    <>
      <StyledScore>{Math.floor(calculatedWeeklyScoreNumber)} %</StyledScore>
      <section>
        <Hint>
          Deine Ernährungsweise stimmt zu{" "}
          {Math.floor(calculatedWeeklyScoreNumber)} % mit den Empfehlungen der
          Planetary Health Diet überein.
        </Hint>
      </section>
    </>
  );
}

const StyledScore = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--color-blue);
  font-family: var(--font-family-text);
  background-color: var(--color-yellow);
  border-radius: 50%;
  width: 4.5em;
  height: 4.5em;
  padding: 0.5em 0.5em;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
`;

const Hint = styled.p`
  font-style: italic;
  padding: 0.6em;
  flex-wrap: wrap;
  margin: 1em;
  text-align: center;
`;
