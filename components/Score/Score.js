import styled from "styled-components";
//import ContentCard from "../ContentCard/ContentCard";
import { calculateAverageScoreAccordance } from "../../utils/averageScoreUtils";
import {
  calculateDetailsScoreDeviation,
  calculateDetailsScoreAccordance,
} from "../../utils/detailsScoreUtils";

export default function Score({ selectedFoodCategories }) {
  const consumedQuantityAccordanceAverage = calculateAverageScoreAccordance(
    selectedFoodCategories,
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
  color: var(--color-blue);
  font-family: var(--font-family-text);
  background-color: var(--color-yellow);
  border: none;
  border-radius: 999px;
  padding: 1em 2em;
  cursor: pointer;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
`;

const Hint = styled.p`
  font-style: italic;
`;

/* elder version of page, optional to use for detailspage:

import styled from "styled-components";
//import ContentCard from "../ContentCard/ContentCard";
import {
  calculateDetailsScoreDeviation,
  calculateDetailsScoreAccordance,
} from "../../utils/detailsScoreUtils";

export default function Score({ selectedFoodCategories}) {
  const { consumedQuantity, name, recommendedConsumption, recommendedExample, maxRange } =
    selectedFoodCategories;

  const consumedQuantityAccordance = calculateDetailsScoreAccordance(
    calculateDetailsScoreDeviation,
    consumedQuantity,
    recommendedConsumption,
    maxRange
  );

  return (
    <>
      <StyledScore>{Math.floor(consumedQuantityAccordance)} %</StyledScore>
      <section>
        <p>
          Dein Konsum der Lebensmittelgruppe {name} über {quantity} gramm stimmt
          zu {Math.floor(consumedQuantityAccordance)} % mit den Empfehlungen der
          Planetary Health Diet überein.
        </p>
        <p>
          Empfohlen werden <strong> {recommendedConsumption} gramm </strong>.
          Das entspricht etwa: {recommendedExample}.
        </p>
        <Hint>
          Bitte beachte, dass dies ungefähre Schätzungen sind, da die Menge je
          nach Sorte und Zubereitung variieren kann.
        </Hint>
      </section>
    </>
  );
}
*/
