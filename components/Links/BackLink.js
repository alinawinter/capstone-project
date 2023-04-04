import styled from "styled-components";
import BasicLink from "./Link";

export default function StyledBackLink({ to, text }) {
  return (
    <StyledBackLinkWrapper>
      <BasicLink to="./" text={`< Zurück`} />
    </StyledBackLinkWrapper>
  );
}

const StyledBackLinkWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: start;
  margin: 1em;
`;
