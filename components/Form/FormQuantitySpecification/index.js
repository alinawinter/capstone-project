import styled from "styled-components";
import SubmitButton from "../../Buttons/SubmitButton/SubmitButton";
import ResetButton from "../../Buttons/ResetButton/ResetButton";
import BasicButton from "../../Buttons/BasicButton/BasicButton";
import Link from "next/link";
import { useState } from "react";
import {
  DetailsScoreCalculationDeviation,
  DetailsScoreCalculationAccordance,
} from "../../../utils/DetailsScoreCalculation";

export default function FormQuantitiySpecification({ foodCategory }) {
  const [showResult, setShowResult] = useState(false);
  const [resultText, setResultText] = useState("");
  const [quantity, setQuantity] = useState(0);

  const {
    id,
    name,
    recommendedConsumption,
    recommendedExample,
    maxRange,
    maxRangeInputField,
  } = foodCategory;

  function handleQuantitySpecification(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    setQuantity(parseFloat(data.consumedQuantity));
    const consumedQuantityAccordance = DetailsScoreCalculationAccordance(
      DetailsScoreCalculationDeviation,
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
  }

  return (
    <>
      <Form
        aria-labelledby="title"
        aria-describedby="description"
        onSubmit={handleQuantitySpecification}
      >
        <h3 id="title">Tägliches Essensquiz</h3>
        <legend id="description">
          Bitte wähle aus, wieviel <b>{name}</b> du heute gegessen hast:
        </legend>
        <StyledSection>
          <div>0 g</div>
          <input
            step={1}
            min={0}
            type="range"
            max={maxRangeInputField}
            id={id}
            name="consumedQuantity"
            value={quantity}
            quanitity={quantity}
            onChange={(event) => {
              setQuantity(event.target.value);
            }}
          />
          <div>{`${maxRangeInputField} g`}</div>
        </StyledSection>
        <output>{`${quantity} gramm`}</output>
        <ButtonBox>
          <Link href="../..">
            <BasicButton text="Zurück" />
          </Link>
          <ResetButton
            setShowResult={setShowResult}
            setResultText={setResultText}
            setQuantity={setQuantity}
          />
          <SubmitButton text="Auswertung" />
        </ButtonBox>
      </Form>
      <ResultContainer>
        {showResult && (
          <div>
            <p>{resultText}</p>
            <Hint>
              Bitte beachte, dass dies ungefähre Schätzungen sind, da die Menge
              je nach Sorte und Zubereitung variieren kann.
            </Hint>
          </div>
        )}
      </ResultContainer>
    </>
  );
}

const Form = styled.form`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5em;
  padding: 3em;
  justify-content: start;
  flex-wrap: wrap;
  height: 29em;
  margin: 1em;
  border-radius: 1.5em;
  color: var(--color-blue);
  text-align: center;
`;

const ButtonBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1em;
  flex-wrap: wrap;
`;

const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1em;
  margin: 1.5em;
`;

const Hint = styled.p`
  font-style: italic;
`;

const StyledSection = styled.section`
  display: flex;
  flex-direction: row;
`;
