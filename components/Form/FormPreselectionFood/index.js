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
  setSelectedFoodCategories,
}) {
  const router = useRouter();
  const [allIsMarked, setAllIsMarked] = useState(false);
  const [buttonText, setButtonText] = useState("Mark All");

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
      setSelectedFoodCategories(orderedArray);
      router.push(`/detailsformpage/${selectedFoodCategories[0].slug}`);
    }
  }

  function handleMarkAll(event) {
    event.preventDefault();
    if (allIsMarked === true) {
      setSelectedFoodCategories([]);
      setAllIsMarked(false);
      setButtonText("Select all");
    }
    if (allIsMarked === false) {
      const checkedFoodCategories = foodCategories.map((foodCategory) => ({
        ...foodCategory,
        consumedQuantity: 0,
        isChecked: true,
      }));
      setSelectedFoodCategories([...checkedFoodCategories]);
      setAllIsMarked(true);
      setButtonText("Reset");
    }
  }

  return (
    <BasicForm
      aria-labelledby="form-title"
      aria-describedby="form-description"
      onSubmit={handleNextPage}
    >
      <h3 id="form-title">Tägliches Essensquiz</h3>
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
          onClick={handleMarkAll}
          aria-label="Auswahl markieren togglen"
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
  gap: 0.4em;
  flex-wrap: wrap;
`;
const CheckBoxContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(61, 64, 91, 0.7);
  font-family: var(--font-family-text);
  background-color: ${({ isChecked }) =>
    isChecked ? "var(--color-yellow)" : "rgba(244, 241, 222, 0.7)"};
  border: none;
  border-radius: 999px;
  padding: 0.3em 1em;
  cursor: pointer;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
  width: 10em;
  height: 3em;
  /*
&:hover {
  color: var(--color-blue)
  opacity: 100%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  */
`;

const CheckBoxInput = styled.input.attrs({ type: "checkbox" })`
  position: absolute;
  display: none;
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
