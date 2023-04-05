import styled from "styled-components";
import BasicLink from "./Link";

export default function RestartQuizLink() {
  return (
    <StyledRestartQuizLinkWrapper>
      <BasicLink to="./" text={`< Restart Quiz`} />
    </StyledRestartQuizLinkWrapper>
  );
}

const StyledRestartQuizLinkWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: start;
  margin: 1em;
`;
