import styled from "styled-components";
import { BasicButton } from "../buttonStyles";

export default function ResetFormAndResultButton({
  text,
  showResult,
  setShowResult,
  setResultText,
  setQuantity,
}) {
  function handleReset(event) {
    event.preventDefault();
    event.target.form.reset();
    if (showResult) {
      setShowResult(false);
    }
    setResultText("");
    setQuantity(0);
  }

  return (
    <BasicButton type="reset" onClick={handleReset}>
      {text}
    </BasicButton>
  );
}
