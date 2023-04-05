import styled from "styled-components";
import BasicLink from "./Link";

export default function RestartQuizLink({ to, text }) {
  return (
    <StyledRestartQuizLinkWrapper>
      <BasicLink to="./" text={`< Restart`} />
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
