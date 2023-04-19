import styled from "styled-components";
import { BasicForm } from "../formStyles";
import SubmitButton from "../../Buttons/SubmitButton/SubmitButton";
import { BasicButton } from "../../Buttons/buttonStyles";
import { useState, useEffect } from "react";

export default function FormQuantitySpecification({
  selectedFoodCategory,
  handleQuantityPerCategory,
  handleNextPage,
  handlePreviousPage,
  currentIndex,
  selectedFoodCategories,
}) {
  const [currentValue, setCurrentValue] = useState(0);
  const [toolTipQuantity, setToolTipQuantity] = useState(0);
  const [toolTipExample, setToolTipExample] = useState("");
  const [showExample, setShowExample] = useState(false);
  const {
    id,
    name,
    maxRangeInputField,
    recommendedConsumption,
    recommendedExample,
    furtherExamplaryPortions,
  } = selectedFoodCategory;

  useEffect(() => {
    if (selectedFoodCategory.hasOwnProperty("consumedQuantity")) {
      setCurrentValue(selectedFoodCategory.consumedQuantity);
    }
  }, [selectedFoodCategory]);

  let buttonText =
    (currentIndex === selectedFoodCategories.length - 1 && "Auswertung") ||
    "Weiter";

  function handleChangeRangeSlider(event) {
    setCurrentValue(event.target.value);
    if (
      currentValue === recommendedConsumption ||
      (currentValue > recommendedConsumption - (5 * maxRangeInputField) / 100 &&
        currentValue < recommendedConsumption + (5 * maxRangeInputField) / 100)
    ) {
      setToolTipQuantity(recommendedConsumption);
      setToolTipExample(recommendedExample);
      setShowExample(true);
    } else {
      furtherExamplaryPortions.forEach((portion) => {
        if (
          currentValue === portion.quantity ||
          (currentValue > portion.quantity - (5 * maxRangeInputField) / 100 &&
            currentValue < portion.quantity + (5 * maxRangeInputField) / 100)
        ) {
          setToolTipQuantity(portion.quantity);
          setToolTipExample(portion.example);
          setShowExample(true);
        }
      });
    }
  }

  function handleQuantitySpecification(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    const consumedQuantityValue = parseFloat(data.consumedQuantity);
    handleQuantityPerCategory(
      selectedFoodCategories,
      id,
      consumedQuantityValue
    );
    handleNextPage();
    setCurrentValue(0);
    setShowExample(false);
  }

  function handleResetRangeInput(event) {
    event.preventDefault();
    setCurrentValue(0);
    setShowExample(false);
  }
  return (
    <>
      <BasicForm
        aria-labelledby="form-title"
        aria-describedby="form-description"
        onSubmit={handleQuantitySpecification}
      >
        <h2 id="form-title">Tägliches Essensquiz</h2>
        <Legend id="form-description" htmlFor="range-input">
          Bitte wähle aus, wieviel <b>{name}</b> du heute gegessen hast:
        </Legend>
        <Output role="output">{`${currentValue} g`}</Output>
        <StyledSection>
          <div role="minRangeInputField">0 g</div>
          <Input
            role="slider"
            step={1}
            min={0}
            type="range"
            max={maxRangeInputField}
            id={id}
            name="consumedQuantity"
            value={currentValue}
            onChange={handleChangeRangeSlider}
          />
          <div role="maxRangeInputField">{`${maxRangeInputField} g`}</div>
        </StyledSection>
        {showExample ? (
          <TooltipBox>
            <p>{toolTipQuantity}g entspricht ca.:</p> <p>{toolTipExample}</p>
          </TooltipBox>
        ) : (
          <TooltipBox></TooltipBox>
        )}
        <StyledButtonWrapper>
          <BasicButton type="reset" onClick={handleResetRangeInput}>
            Zurücksetzen
          </BasicButton>{" "}
        </StyledButtonWrapper>
        <ButtonBox>
          <BasicButton type="button" onClick={handlePreviousPage}>
            {currentIndex === 0 ? "< Quiz neustarten" : "< Zurück"}
          </BasicButton>
          <SubmitButton text={buttonText} />
        </ButtonBox>
      </BasicForm>
    </>
  );
}
const Legend = styled.legend`
  height: 4em;
  widht: 4em;
`;

const Output = styled.output.attrs({ type: "range" })`
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--color-blue);
  font-family: var(--font-family-text);
  background-color: var(--color-yellow);
  border: none;
  border-radius: 50%;
  width: 3.5em;
  height: 3.5em;
  padding: 0.2em 0.2em;
  cursor: pointer;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
`;

const Input = styled.input.attrs({ type: "range" })`
  background-color: var(--color-yellow);
  -webkit-appearance: none;
  height: 10px;
  outline: none;
  border-radius: 999px;
  z-index: 4;
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 20px;
    height: 20px;
    background-color: var(--color-orange);
    border-radius: 50%;
    z-index: 5;
  }
`;

const StyledSection = styled.section`
  display: flex;
  flex-direction: row;
`;

const TooltipBox = styled.div`
  width: 15em;
  height: 6em;
  font-size: 13px;
  font-style: italic;
`;

const ButtonBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1em;
  flex-wrap: wrap;
`;

const StyledButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;
