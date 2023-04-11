import { BasicButton } from "../buttonStyles";

export default function SubmitButton({ text }) {
  return (
    <BasicButton aria-label="Formular abschicken" type="submit">
      {text}
    </BasicButton>
  );
}
