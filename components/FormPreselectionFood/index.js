import styled from "styled-components";
import SubmitButton from "../SubmitButton/index";
import ResetButton from "../ResetButton/index";
import { foodCategories } from "../../lib/db";
import { useState } from "react";

//This is the form for the first part of the daily quiz, where the user preselects the food that he or she ate

export default function FormPreselection() {
  const [showResult, setShowResult] = useState(false);
  const [resultText, setResultText] = useState("");

  //This function handels what happens, when the Submit-Button is clicked:
  function handleFoodSelection(event) {
    event.preventDefault();
    //The form-input is stored in the "data"-Object
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    /* The content of "data" is matched with the right Object from the foodCategories-Array 
 and stored in new variable selectedFoodCategory*/
    const selectedFoodCategory = foodCategories.find(
      (foodCategory) => foodCategory.name === data.foodAte
    );
    //If selectedFoodCategory is defined, its destructured, saved in a result variable and displayed*/
    if (selectedFoodCategory) {
      const { id, name, recommendedConsumption, recommendedExample } =
        selectedFoodCategory;
      const result = `Der empfohlene Tagesbedarf für ${name} liegt bei 
    ${recommendedConsumption} gramm. Das entspricht etwa: ${recommendedExample}.`;
      setResultText(result);
      setShowResult(true);
      //form is reset
      event.target.reset();
    }
  }

  return (
    <>
      <Form
        aria-labelledby="title"
        aria-describedby="description"
        onSubmit={handleFoodSelection}
      >
        <h3 id="title">Tägliches Essensquiz</h3>
        <legend id="description">
          Bitte wähle aus, was du heute gegessen hast:
        </legend>
        <Answers>
          {foodCategories.map(
            ({ id, name, recommendedConsumption, recommendedExample }) => (
              <li key={id}>
                <input type="radio" id="foodAte" name="foodAte" value={name} />
                <label htmlFor="foodAte">{name}</label>
              </li>
            )
          )}
        </Answers>
        <ButtonBox>
          <ResetButton setShowResult={setShowResult} />
          <SubmitButton text="Info zum Tagesbedarf" />
        </ButtonBox>
      </Form>
      <ResultContainer>
        {showResult && (
          <div>
            <p>{resultText}</p>
            <Hint>
              Bitte beachte, dass dies ungefähre Schätzungen sind, da die Menge
              je nach Sorte und Zubereitung variieren kann.
            </Hint>
          </div>
        )}
      </ResultContainer>
    </>
  );
}

const Form = styled.form`
  background-color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5em;
  padding: 3em;
  justify-content: center;
  flex-wrap: wrap;
  height: 40em;
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

const Hint = styled.p`
  font-style: italic;
`;
