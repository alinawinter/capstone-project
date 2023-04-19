import styled from "styled-components";
import { calculateAverageScoreAccordance } from "../../utils/averageScoreUtils";
import {
  calculateDetailsScoreDeviation,
  calculateDetailsScoreAccordance,
} from "../../utils/detailsScoreUtils";
import { useState, useEffect } from "react";

export default function WeeklyScore({
  dailyQuizzesResultCollection,
  foodCategories,
}) {
  const [calculatedWeeklyScoreNumber, setCalculatedWeeklyScoreNumber] =
    useState(null);

  useEffect(() => {
    const sumOfActualWeeklyConsumptionByFoodCategories = {};
    dailyQuizzesResultCollection.forEach((dailyQuiz) => {
      dailyQuiz.data.forEach((foodCategory) => {
        const { name, consumedQuantity } = foodCategory;

        if (sumOfActualWeeklyConsumptionByFoodCategories[name]) {
          sumOfActualWeeklyConsumptionByFoodCategories[name] +=
            consumedQuantity;
        } else {
          sumOfActualWeeklyConsumptionByFoodCategories[name] = consumedQuantity;
        }
      });
    });

    const recommendedConsumptionByFoodCategoryBasedOnNumberQuizzes =
      foodCategories.reduce((result, foodCategory) => {
        result[foodCategory.name] =
          foodCategory.recommendedConsumption *
          dailyQuizzesResultCollection.length;
        return result;
      }, {});

    const maxRangeByFoodCategoryBasedOnNumberQuizzes = foodCategories.reduce(
      (result, foodCategory) => {
        result[foodCategory.name] =
          foodCategory.maxRange * dailyQuizzesResultCollection.length;
        return result;
      },
      {}
    );

    const weekDataForScoreCalculation = [];

    for (let foodCategory in sumOfActualWeeklyConsumptionByFoodCategories) {
      const consumedQuantity =
        sumOfActualWeeklyConsumptionByFoodCategories[foodCategory];
      const recommendedConsumption =
        recommendedConsumptionByFoodCategoryBasedOnNumberQuizzes[foodCategory];
      const maxRange = maxRangeByFoodCategoryBasedOnNumberQuizzes[foodCategory];

      weekDataForScoreCalculation.push({
        name: foodCategory,
        consumedQuantity: consumedQuantity,
        recommendedConsumption: recommendedConsumption,
        maxRange: maxRange,
      });
    }

    const score = calculateAverageScoreAccordance(
      weekDataForScoreCalculation,
      calculateDetailsScoreDeviation,
      calculateDetailsScoreAccordance
    );

    setCalculatedWeeklyScoreNumber(Math.floor(score));
  }, [dailyQuizzesResultCollection, foodCategories]);

  if (calculatedWeeklyScoreNumber === null) {
    return null;
  }

  return (
    <>
      <StyledScore>{Math.floor(calculatedWeeklyScoreNumber)} %</StyledScore>
      <section>
        <Hint>
          Insgesamt stimmt deine heutige Ernährungsweise zu{" "}
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
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
`;

const Hint = styled.p`
  font-style: italic;
  padding: 0.6em;
  flex-wrap: wrap;
  width: 90vw;
  margin: 1em;
  text-align: center;
`;
