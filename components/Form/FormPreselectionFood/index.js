import styled from "styled-components";
import { BasicForm } from "../formStyles";
import SubmitButton from "../../Buttons/SubmitButton/SubmitButton";
import { BasicButton } from "../../Buttons/buttonStyles";
import { foodCategories } from "../../../lib/db";
import { useRouter } from "next/router";
import { useState } from "react";

export default function FormPreselection({
  handleSelectedFoodCategories,
  selectedFoodCategories,
  handleSetSelectedFoodCategories,
}) {
  const router = useRouter();
  const [isEverythingSelected, setIsEverythingSelected] = useState(false);
  const [buttonText, setButtonText] = useState("Alle auswählen");

  function handleCheckBoxChange(event) {
    const checkBoxValue = event.target.value;
    handleSelectedFoodCategories(checkBoxValue);
  }

  function handleNextPage(event) {
    event.preventDefault();
    if (selectedFoodCategories.length === 0) {
      alert("Bitte wählen Sie mindestens eine Kategorie aus");
    } else {
      const orderedArray = selectedFoodCategories.sort((a, b) => a.id - b.id);
      handleSetSelectedFoodCategories(orderedArray);
      router.push(`/detailsformpage/${selectedFoodCategories[0].slug}`);
    }
  }

  function handleSelectAll(event) {
    event.preventDefault();
    if (isEverythingSelected === true) {
      handleSetSelectedFoodCategories([]);
      setIsEverythingSelected(false);
      setButtonText("Alle Auswählen");
    }
    if (isEverythingSelected === false) {
      const checkedFoodCategories = foodCategories.map((foodCategory) => ({
        ...foodCategory,
        consumedQuantity: 0,
        isChecked: true,
      }));
      handleSetSelectedFoodCategories([...checkedFoodCategories]);
      setIsEverythingSelected(true);
      setButtonText("Zurücksetzen");
    }
  }

  return (
    <BasicForm
      aria-labelledby="form-title"
      aria-describedby="form-description"
      onSubmit={handleNextPage}
    >
      <h2 id="form-title">Tägliches Essensquiz</h2>
      <legend id="form-description">
        Bitte wähle aus, was du heute gegessen hast:
      </legend>
      <CheckBoxList>
        {foodCategories.map(({ id, name }) => (
          <CheckBoxContainer
            key={id}
            isChecked={selectedFoodCategories.find(
              (foodCategory) => foodCategory.name === name
            )}
          >
            <li>
              <CheckBoxLabel htmlFor={id}>
                <CheckBoxInput
                  type="checkbox"
                  id={id}
                  name="foodAte"
                  value={name}
                  onChange={handleCheckBoxChange}
                />
                <span>{name}</span>
              </CheckBoxLabel>
            </li>
          </CheckBoxContainer>
        ))}
      </CheckBoxList>
      <ButtonBox>
        <BasicButton
          onClick={handleSelectAll}
          type="button"
          aria-label={
            isEverythingSelected
              ? "Kategorienauswahl zurücksetzen"
              : "Alle Kategorien auswählen"
          }
        >
          {buttonText}
        </BasicButton>
        <SubmitButton text="Weiter" />
      </ButtonBox>
    </BasicForm>
  );
}

const CheckBoxList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  margin: 0;
  padding: 0;
  gap: 1.2em;
  flex-wrap: wrap;
  font-weight: bold;
`;
const CheckBoxContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ isChecked }) =>
    isChecked ? "rgba(244, 241, 222, 1)" : "rgba(224, 122, 95, 1)"};
  background-color: ${({ isChecked }) =>
    isChecked ? "rgba(224, 122, 95, 0.9)" : "rgba(244, 241, 222, 0.6)"};
  border: none;
  border-radius: 999px;
  padding: 0.3em 1em;
  cursor: pointer;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  text-shadow: ${({ isChecked }) =>
    isChecked && "1px 1px 2px rgba(0, 0, 0, 0.2)"};
  width: 11em;
  height: 4em;
`;

const CheckBoxInput = styled.input.attrs({ type: "checkbox" })`
  position: absolute;
  display: none;
  width: 100px;
  height: 20px;
`;

const CheckBoxLabel = styled.label`
  cursor: pointer;
`;

const ButtonBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1em;
  flex-wrap: wrap;
`;
