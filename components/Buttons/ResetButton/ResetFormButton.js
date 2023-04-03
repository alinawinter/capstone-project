import styled from "styled-components";
import { BasicButton } from "../buttonStyles";

export default function ResetFormButton({ text }) {
  function handleReset(event) {
    event.preventDefault();
    event.target.form.reset();
  }

  return (
    <BasicButton type="reset" onClick={handleReset}>
      {text}
    </BasicButton>
  );
}
