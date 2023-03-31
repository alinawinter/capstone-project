import styled from "styled-components";
import SubmitButton from "../../Buttons/SubmitButton/SubmitButton";
import ResetButton from "../../Buttons/ResetButton/ResetButton";
import { foodCategories } from "../../../lib/db";
import { useState } from "react";
import { useRouter } from "next/router";

export default function FormPreselection({
  foodCategory,
  handleSetFoodCategory,
}) {
  const router = useRouter();
  function handleSubmitAndNextPage(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    handleSetFoodCategory(data.foodAte);

    router.push("../../FormDetailspage");
  }

  return (
    <>
      <Form
        aria-labelledby="title"
        aria-describedby="description"
        onSubmit={handleSubmitAndNextPage}
        handleSetFoodCategory={handleSetFoodCategory}
      >
        <h3 id="title">Tägliches Essensquiz</h3>
        <legend id="description">
          Bitte wähle aus, was du heute gegessen hast:
        </legend>
        <Answers>
          {foodCategories.map(
            ({ id, name, recommendedConsumption, recommendedExample }) => (
              <li key={id}>
                <input
                  type="radio"
                  id={id}
                  name="foodAte"
                  value={name}
                  required
                />
                <label htmlFor={id}>{name}</label>
              </li>
            )
          )}
        </Answers>
        <ButtonBox>
          <ResetButton />
          <SubmitButton text="Weiter" />
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
  justify-content: start;
  flex-wrap: wrap;
  height: 29em;
  margin: 1em;
  border-radius: 1.5em;
  color: var(--color-blue);
  text-align: center;
`;

const Answers = styled.ul`
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

const InformationText = styled.p`
  display: none;
`;

const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
`;
