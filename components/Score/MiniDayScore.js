import styled from "styled-components";
import { calculateAverageScoreAccordance } from "../../utils/averageScoreUtils";
import { mergeArrayAllFoodAndSelectedFood } from "../../utils/mergeSelectedAndOtherFoodUtils";
import {
  calculateDetailsScoreDeviation,
  calculateDetailsScoreAccordance,
} from "../../utils/detailsScoreUtils";

export default function MiniDayScore({
  dailyQuizzesResultCollection,
  weekDay,
  foodCategories,
}) {
  const dailyQuizForWeekDay = dailyQuizzesResultCollection.find(
    ({ weekday }) => weekday === weekDay
  );
  const selectedFoodForWeekDay = dailyQuizForWeekDay?.data || [];

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
    <StyledScore>{Math.floor(consumedQuantityAccordanceAverage)} %</StyledScore>
  );
}

const StyledScore = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--color-blue);
  font-family: var(--font-family-text);
  font-size: 0.75em;
  background-color: var(--color-yellow);
  border-radius: 50%;
  width: 3.5em;
  height: 3.5em;
  padding: 0.1em 0.1em;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  margin: 0;
`;
