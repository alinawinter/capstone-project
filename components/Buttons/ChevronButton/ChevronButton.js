import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faCircleChevronUp } from "@fortawesome/free-solid-svg-icons";

export default function ChevronButton({ isInfoShown, onHandleInfoShown }) {
  return (
    <StyledButton onClick={() => onHandleInfoShown(!isInfoShown)} type="button">
      {isInfoShown ? (
        <StyledChevronUp icon={faCircleChevronUp} />
      ) : (
        <StyledChevronDown icon={faCircleChevronDown} />
      )}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  background-color: transparent;
  border: none;
  align-self: center;
`;

const StyledChevronDown = styled(FontAwesomeIcon)`
  color: var(--color-green);
  font-size: 24px;
`;

const StyledChevronUp = styled(FontAwesomeIcon)`
  color: var(--color-green);
  font-size: 24px;
`;
