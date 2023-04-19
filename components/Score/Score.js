import styled from "styled-components";
import { calculateAverageScoreAccordance } from "../../utils/averageScoreUtils";
import { mergeArrayAllFoodAndSelectedFood } from "../../utils/mergeSelectedAndOtherFoodUtils";
import {
  calculateDetailsScoreDeviation,
  calculateDetailsScoreAccordance,
} from "../../utils/detailsScoreUtils";

export default function Score({ selectedFoodCategories, foodCategories }) {
  const mergedArrayAllFoodAndSelectedFood = mergeArrayAllFoodAndSelectedFood(
    foodCategories,
    selectedFoodCategories
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
      <section>
        <p>
          Insgesamt stimmt deine heutige Ernährungsweise zu{" "}
          {Math.floor(consumedQuantityAccordanceAverage)} % mit den Empfehlungen
          der Planetary Health Diet überein.
        </p>
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
`;
