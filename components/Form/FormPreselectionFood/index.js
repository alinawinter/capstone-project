import styled from "styled-components";
import { BasicForm } from "../formStyles";
import SubmitButton from "../../Buttons/SubmitButton/SubmitButton";
import ResetFormButton from "../../Buttons/ResetButton/ResetFormButton";
import { foodCategories } from "../../../lib/db";
import { useRouter } from "next/router";

export default function FormPreselection({
  handleAddSelectedFoodCategories,
  handleDeleteSelectedFoodCategories,
  selectedFoodCategories,
  setSelectedFoodCategories,
}) {
  const router = useRouter();

  function handleCheckBoxChange(event) {
    const checkBoxValue = event.target.value;
    const isChecked = event.target.checked;
    if (isChecked) {
      handleAddSelectedFoodCategories(checkBoxValue);
    } else {
      handleDeleteSelectedFoodCategories(checkBoxValue);
    }
  }

  function handleNextPage(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    if (Object.keys(data).length === 0) {
      alert("Bitte wählen Sie mindestens eine Kategorie aus");
    } else {
      const orderedArray = selectedFoodCategories.sort((a, b) => a.id - b.id);
      setSelectedFoodCategories(orderedArray);
      router.push(`/detailsformpage/${selectedFoodCategories[0].slug}`);
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
          <CheckBoxListElement key={id}>
            <input
              type="checkbox"
              id={id}
              name="foodAte"
              value={name}
              onChange={handleCheckBoxChange}
            />
            <CheckBoxLabel htmlFor={id}>{name}</CheckBoxLabel>
          </CheckBoxListElement>
        ))}
      </CheckBoxList>
      <ButtonBox>
        <ResetFormButton text="Reset" />
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
  justify-content: flex-start;
  font-size: 14px;
  margin: 0;
  padding: 0;
  gap: 0.3em;
  flex-wrap: wrap;
`;

const CheckBoxLabel = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const CheckBoxListElement = styled.li`
  display: flex;
  align-items: center;
`;

// styled.input.attrs({ type: "checkbox" })`;

const ButtonBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1em;
  flex-wrap: wrap;
`;
