import styled from "styled-components";

export default function ResetButton({ setShowResult }) {
  function handleReset(event, setShowResults, setResultText) {
    event.preventDefault();
    event.target.form.reset();
    setShowResult(false);
  }

  return (
    <StyledButton type="reset" onClick={handleReset} text="Reset">
      Reset
    </StyledButton>
  );
}

const StyledButton = styled.button`
  color: var(--color-beige);
  font-family: var(--font-family-text);
  background-color: var(--color-green);
  border: none;
  border-radius: 999px;
  padding: 1em 2em;
  cursor: pointer;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
  &:hover {
    background-color: var(--color-orange);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  }
`;
