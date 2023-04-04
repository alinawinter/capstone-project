import styled from "styled-components";
import SubmitButton from "../../Buttons/SubmitButton/SubmitButton";
import { BasicButton } from "../../Buttons/buttonStyles";
import { useState } from "react";
import { useRouter } from "next/router";

export default function FormQuantitySpecification({
  foodCategory,
  handleSetQuantityPerCategory,
}) {
  const router = useRouter();
  const [currentValue, setCurrentValue] = useState(0);

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
    handleSetQuantityPerCategory(data);
    router.push("/scorepage");
  }

  function handleReset(event) {
    event.preventDefault();
    setCurrentValue(0);
  }

  return (
    <>
      <Form
        aria-labelledby="form-title"
        aria-describedby="form-description"
        onSubmit={handleQuantitySpecification}
      >
        <h3 id="form-title">Tägliches Essensquiz</h3>
        <legend id="form-description">
          Bitte wähle aus, wieviel <b>{name}</b> du heute gegessen hast:
        </legend>
        <output>{`${currentValue} gramm`}</output>
        <StyledSection>
          <div>0 g</div>
          <Input
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
          <div>{`${maxRangeInputField} g`}</div>
        </StyledSection>

        <ButtonBox>
          <BasicButton type="reset" onClick={handleReset}>
            Reset
          </BasicButton>
          <SubmitButton text="Auswertung" />
        </ButtonBox>
      </Form>
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
  justify-content: center;
  flex-wrap: wrap;
  height: 50%;
  margin: 1em;
  border-radius: 1.5em;
  color: var(--color-blue);
  text-align: center;
`;

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
