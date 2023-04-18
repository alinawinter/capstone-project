import styled from "styled-components";
import { foodCategories } from "../../lib/db";
import { calculateAverageScoreAccordance } from "../../utils/averageScoreUtils";
import { mergeArrayAllFoodAndSelectedFood } from "../../utils/mergeSelectedAndOtherFoodUtils";
import {
  calculateDetailsScoreDeviation,
  calculateDetailsScoreAccordance,
} from "../../utils/detailsScoreUtils";

export default function MiniScore({ dailyQuizzesResultCollection, weekDay }) {
  console.log("dailyQuizzesResultCollection", dailyQuizzesResultCollection);
  const objectForWeekDay = dailyQuizzesResultCollection.find(
    ({ weekday }) => weekday === weekDay
  );
  const selectedFoodForWeekDay = objectForWeekDay?.data || [];

  const mergedArrayAllFoodAndSelectedFood = mergeArrayAllFoodAndSelectedFood(
    foodCategories,
    selectedFoodForWeekDay
  );

  const consumedQuantityAccordanceAverage = calculateAverageScoreAccordance(
    mergedArrayAllFoodAndSelectedFood,
    calculateDetailsScoreDeviation,
    calculateDetailsScoreAccordance
  );

  return (
    <>
      <StyledScore>
        {Math.floor(consumedQuantityAccordanceAverage)} %
      </StyledScore>
    </>
  );
}

const StyledScore = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--color-blue);
  font-family: var(--font-family-text);
  font-size: 1em;
  background-color: var(--color-yellow);
  border: none;
  border-radius: 50%;
  width: 3.5em;
  height: 3.5em;
  padding: 0.1em 0.1em;
  cursor: pointer;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
`;
