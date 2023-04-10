import styled from "styled-components";
import { BasicForm } from "../formStyles";
import SubmitButton from "../../Buttons/SubmitButton/SubmitButton";
import ResetFormButton from "../../Buttons/ResetButton/ResetFormButton";
import { foodCategories } from "../../../lib/db";
import { useRouter } from "next/router";
import { useState } from "react";

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
    console.log("selectedFoodCategories nach Submit", selectedFoodCategories);
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
      console.log("selectedFoodCategories nach Submit", selectedFoodCategories);
    }
  }

  return (
    <>
      <BasicForm
        aria-labelledby="form-title"
        aria-describedby="form-description"
        onSubmit={handleNextPage}
      >
        <h3 id="form-title">Tägliches Essensquiz</h3>
        <legend id="form-description">
          Bitte wähle aus, was du heute gegessen hast:
        </legend>
        <Answerslist>
          {foodCategories.map(({ id, name }) => (
            <li key={id}>
              <Input
                type="checkbox"
                id={id}
                name="foodAte"
                value={name}
                onChange={handleCheckBoxChange}
              />
              <label htmlFor={id}>{name}</label>
            </li>
          ))}
        </Answerslist>
        <ButtonBox>
          <ResetFormButton text="Reset" />
          <SubmitButton text="Weiter" />
        </ButtonBox>
      </BasicForm>
    </>
  );
}

const Input = styled.input.attrs({ type: "checkbox" })``;

const Answerslist = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5em;
  flex-wrap: wrap;
`;

const ButtonBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1em;
  flex-wrap: wrap;
`;

//const newArray = selectedFoodCategories.splice(index, 1);
