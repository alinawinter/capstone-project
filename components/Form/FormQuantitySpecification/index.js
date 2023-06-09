import styled from "styled-components";
import { BasicForm } from "../formStyles";
import SubmitButton from "../../Buttons/SubmitButton/SubmitButton";
import { BasicButton } from "../../Buttons/buttonStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import Lottie from "lottie-react";
import lightbulb from "../../../public/lottie/lightbulb.json";

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
        <OutputAndToolTipBox>
          <Output role="output">{`${currentValue} g`}</Output>
          {showExample ? (
            <TooltipBox>
              <StyledIconLightBulb icon={faLightbulb} />
              <ToolTipSection>
                <ToolTipText>{toolTipQuantity}g entspricht ca.:</ToolTipText>{" "}
                <ToolTipText>{toolTipExample}</ToolTipText>
              </ToolTipSection>
            </TooltipBox>
          ) : (
            <EmptyTooltipBox>
              <LightBulbAnimation animationData={lightbulb} />
              <ToolTipText>
                Hier erhältst du Beispiele für Essensportionen, die dir bei der
                Einschätzung helfen.
              </ToolTipText>
            </EmptyTooltipBox>
          )}
        </OutputAndToolTipBox>
        <InputSection>
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
        </InputSection>
        <StyledButtonWrapper>
          <BasicButton type="reset" onClick={handleResetRangeInput}>
            Zurücksetzen
          </BasicButton>{" "}
        </StyledButtonWrapper>
        <ButtonBox>
          <BasicButton type="button" onClick={handlePreviousPage}>
            <StyledBackButtonWrapper>
              <StyledChevronLeft icon={faChevronLeft} />
              {currentIndex === 0 ? <p>Quiz neustarten</p> : <p>Zurück</p>}
            </StyledBackButtonWrapper>
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

const OutputAndToolTipBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1em;
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

const TooltipBox = styled.div`
  width: 15em;
  height: 11em;
  font-size: 0.9em;
  border-radius: 1.5em;
  background-color: rgba(242, 204, 143, 1);
  display: flex;
  flex-direction: column;
  opacity: 0.7;
  display: flex;
`;

const StyledIconLightBulb = styled(FontAwesomeIcon)`
  color: var(--color-orange);
  height: 2em;
  margin-top: 0.5em;
  margin-left: 0.5em;
  margin-bottom: 0;
  align-self: flex-start;
`;

const ToolTipSection = styled.section`
  margin-bottom: 0.3em;
  margin-left: 0.3em;
  margin-right: 0.3em;
  font-size: 0.9em;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1em;
  margin: 1.5em;
`;

const ToolTipText = styled.p`
  margin: 0;
  font-size: 0.9em;
`;

const EmptyTooltipBox = styled.div`
  width: 15em;
  height: 11em;
  font-size: 0.9em;
  border-radius: 1.5em;
  background-color: rgba(242, 204, 143, 1);
  display: flex;
  flex-direction: column;
  opacity: 0.7;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1em;
`;

const LightBulbAnimation = styled(Lottie)`
  width: 6em;
  height: 6em;
`;

const Input = styled.input.attrs({ type: "range" })`
  background-color: var(--color-yellow);
  -webkit-appearance: none;
  height: 10px;
  width: 150px;
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

const InputSection = styled.section`
  display: flex;
  gap: 0.4em;
  flex-direction: row;
  margin-bottom: 1em;
`;

const StyledButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const ButtonBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1em;
  flex-wrap: wrap;
`;

const StyledBackButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

const StyledChevronLeft = styled(FontAwesomeIcon)`
  color: var(--color-beige);
  margin: 0.3em;
  height: 1em;
`;
