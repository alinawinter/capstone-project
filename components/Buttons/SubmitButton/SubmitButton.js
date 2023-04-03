import styled from "styled-components";
import { BasicButton } from "../buttonStyles";

export default function SubmitButton({ text }) {
  return <BasicButton type="submit">{text}</BasicButton>;
}
