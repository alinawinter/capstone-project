import styled from "styled-components";
import { BasicForm } from "../formStyles";
import SubmitButton from "../../Buttons/SubmitButton/SubmitButton";
import ResetFormButton from "../../Buttons/ResetButton/ResetFormButton";
import { foodCategories } from "../../../lib/db";
import { useRouter } from "next/router";

export default function FormPreselection({ handleSetFoodCategory }) {
  const router = useRouter();
  function handleSubmitAndNextPage(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    handleSetFoodCategory(data.foodAte);

    router.push("/detailsformpage");
  }

  return (
    <>
      <BasicForm
        aria-labelledby="form-title"
        aria-describedby="form-description"
        onSubmit={handleSubmitAndNextPage}
        handleSetFoodCategory={handleSetFoodCategory}
      >
        <h3 id="form-title">Tägliches Essensquiz</h3>
        <legend id="form-description">
          Bitte wähle aus, was du heute gegessen hast:
        </legend>
        <Answerslist>
          {foodCategories.map(({ id, name }) => (
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

const InformationText = styled.p`
  display: none;
`;

const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
`;
