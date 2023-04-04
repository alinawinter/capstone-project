import styled from "styled-components";
import { useState } from "react";
import {
  calculateDetailsScoreDeviation,
  calculateDetailsScoreAccordance,
} from "../utils/detailsScoreUtils";

export default function Score({ foodCategory, quantity }) {
  const { name, recommendedConsumption, recommendedExample, maxRange } =
    foodCategory;

  const consumedQuantityAccordance = calculateDetailsScoreAccordance(
    calculateDetailsScoreDeviation,
    quantity,
    recommendedConsumption,
    maxRange
  );

  return (
    <ResultContainer>
      <StyledScore>{Math.floor(consumedQuantityAccordance)} %</StyledScore>
      <section>
        <p>
          Dein Konsum der Lebensmittelgruppe {name} stimmt zu{" "}
          {Math.floor(consumedQuantityAccordance)} % mit den Empfehlungen der
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
    </ResultContainer>
  );
}

const ResultContainer = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5em;
  padding: 3em;
  justify-content: center;
  flex-wrap: wrap;
  height: 50%;
  margin: 1em;
  border-radius: 1.5em;
  color: var(--color-blue);
  text-align: center;
`;

const Hint = styled.p`
  font-style: italic;
`;

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
  &:hover {
    background-color: var(--color-orange);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  }
`;

/*const [quantity, setQuantity] = useState(0);
const [showResult, setShowResult] = useState(false);
  const [resultText, setResultText] = useState("");
  
  const consumedQuantityAccordance = calculateDetailsScoreAccordance(
      calculateDetailsScoreDeviation,
      quantity,
      recommendedConsumption,
      maxRange
    );
    const result = `Dein Konsum der Lebensmittelgruppe ${name} stimmt zu ${Math.floor(
      consumedQuantityAccordance
    )} % mit den Empfehlungen der Planetary Health Diet überein. Empfohlen werden ${recommendedConsumption} gramm. Das entspricht etwa: ${recommendedExample}.`;
    setResultText(result);
    setShowResult(true);
    event.target.reset();

  const [resultText, setResultText] = useState("");

     const result = `Dein Konsum der Lebensmittelgruppe ${name} stimmt zu ${Math.floor(
    consumedQuantityAccordance
  )} % mit den Empfehlungen der Planetary Health Diet überein. Empfohlen werden ${recommendedConsumption} gramm. Das entspricht etwa: ${recommendedExample}.`;
  setResultText(result);
  
  */
