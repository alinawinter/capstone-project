import styled from "styled-components";
import { BasicForm } from "../formStyles";
import SubmitButton from "../../Buttons/SubmitButton/SubmitButton";
import { BasicButton } from "../../Buttons/buttonStyles";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function FormQuantitySpecification({
  selectedFoodCategory,
  handleSetQuantityPerCategory,
  handleNextPage,
  currentIndex,
  selectedFoodCategories,
}) {
  const [currentValue, setCurrentValue] = useState(0);
  const { id, name, maxRangeInputField } = selectedFoodCategory;

  useEffect(() => {
    if (selectedFoodCategory.hasOwnProperty("consumedQuantity")) {
      setCurrentValue(selectedFoodCategory.consumedQuantity);
    }
  }, [selectedFoodCategory]);

  let buttonText =
    (currentIndex === selectedFoodCategories.length - 1 && "Auswertung") ||
    "Weiter";

  function handleQuantitySpecification(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    const consumedQuantityValue = parseFloat(data.consumedQuantity);
    handleSetQuantityPerCategory(
      selectedFoodCategories,
      id,
      consumedQuantityValue
    );
    handleNextPage();
    setCurrentValue(0);
  }

  function handleResetRangeInput(event) {
    event.preventDefault();
    setCurrentValue(0);
  }

  return (
    <>
      <BasicForm
        aria-labelledby="form-title"
        aria-describedby="form-description"
        onSubmit={handleQuantitySpecification}
      >
        <h3 id="form-title">Tägliches Essensquiz</h3>
        <legend id="form-description" htmlFor="range-input">
          Bitte wähle aus, wieviel <b>{name}</b> du heute gegessen hast:
        </legend>
        <output role="output">{`${currentValue} gramm`}</output>
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
            onChange={(event) => {
              setCurrentValue(event.target.value);
            }}
          />
          <div role="maxRangeInputField">{`${maxRangeInputField} g`}</div>
        </StyledSection>

        <ButtonBox>
          <BasicButton
            type="reset"
            text="Reset"
            onClick={handleResetRangeInput}
          >
            Reset
          </BasicButton>
          <SubmitButton text={buttonText} />
        </ButtonBox>
      </BasicForm>
    </>
  );
}

const Input = styled.input.attrs({ type: "range" })`
  background-color: var(--color-yellow);
  -webkit-appearance: none;
  height: 10px;
  outline: none;
  border-radius: 999px;
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 20px;
    height: 20px;
    background-color: var(--color-orange);
    border-radius: 50%;
  }
`;

const ButtonBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1em;
  flex-wrap: wrap;
`;

const StyledSection = styled.section`
  display: flex;
  flex-direction: row;
`;
