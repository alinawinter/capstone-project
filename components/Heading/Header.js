import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <HeadingContainer>
      <StyledUtensilsIcon icon={faUtensils} />
      <Heading>FuturePlate</Heading>
    </HeadingContainer>
  );
}

const HeadingContainer = styled.div`
  background-color: var(--color-orange);
  top: 0;
  display: flex;
  position: sticky;
  z-index: 10;
  height: 4em;
  padding: 1rem;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  gap: 0.5em;
`;

const Heading = styled.h1`
  font-family: var(--font-family-heading);
  z-index: 11;
  color: var(--color-beige);
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
`;

const StyledUtensilsIcon = styled(FontAwesomeIcon)`
  color: var(--color-beige);
  font-size: 2em;
`;
